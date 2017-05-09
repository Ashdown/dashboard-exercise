import React, {Component} from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as fileActions from "../actions/fileActions";

export class FileList extends Component {

    fetchData() {
        const { dispatch } = this.props;
        const actions = bindActionCreators(fileActions, dispatch);

        return fetch("http://localhost:3001/files")
            .then((response) => {
                if(!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then((data) => {
                for (let fileData of data) {
                    dispatch(actions.addFileData(fileData));
                }
            }).catch((error) => {
            console.log('error', error);
        });
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {

        const files = this.props.store.filelist.files;
        const users = this.props.store.userlist.users;


        let fileItems = [];
        let authorname = 'author';

        for(let fileData of files) {

            for(let userData of users) {
                if(userData.id === fileData.author_id){
                    authorname = userData.givenName + ' ' + userData.familyName;
                }
            }

            fileItems.push(<li>{fileData.title} Author: {authorname}, Status: {fileData.status}</li>);
        }

        return (
            <ul className="file-list">{fileItems}</ul>
        );
    }

}

export default connect(state => ({store: state}))(FileList)
