import React, {Component} from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as fileActions from "../actions/fileActions";
import ContentFilters from "./ContentFilters";
import FileItem from "./FileItem";

export class FilePanel extends Component {

    showMore = (event) => {
        event.preventDefault();
        this.setState({
            showAll: true
        })
    }

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

    constructor () {
        super();
        this.state = {
            showAll: false
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {

        const files = this.props.store.filelist.files;
        const users = this.props.store.userlist.users;


        let fileItems = [];
        let authorname = 'unknown';

        for(let fileData of files) {

            for(let userData of users) {
                if(userData.id === fileData.author_id){
                    authorname = userData.givenName + ' ' + userData.familyName;
                }
            }
            fileItems.push(<FileItem title={fileData.title} author={authorname} status={fileData.status} date={fileData.date_modified} type={fileData.type}/>);

        }

        return (
            <div className="file-panel">
                <h3 className="content-title">Latest Content</h3>
                <div className="content-panel">
                    <ContentFilters/>
                    <ul className={"file-list " +  (this.state.showAll? "show-all" : "hide-some")}>{fileItems}</ul>
                    <a className={"curved view-more-button " +  (this.state.showAll? "hidden" : "show")} onClick={this.showMore} href="#">View all content</a>
                </div>
            </div>
        );
    }

}

export default connect(state => ({store: state}))(FilePanel)
