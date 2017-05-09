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

        const { filelist: { files } } = this.props;

        let fileItems = [];

        for(let fileData of files) {
            fileItems.push(<li>{fileData.title} Author: {fileData.author_id}, Status: {fileData.status}</li>);
        }

        return (
            <ul className="file-list">{fileItems}</ul>
        );
    }

}

export default connect(state => ({filelist: state.filelist}))(FileList)
