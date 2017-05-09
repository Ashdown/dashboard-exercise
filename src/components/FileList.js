import React, {Component} from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as fileActions from "../actions/fileActions";
import fetch from "isomorphic-fetch";

@connect(state => ({
    filelist: state.filelist
}))

export default class FileList extends Component {

    componentDidMount() {

        const { filelist: { sensors }, dispatch } = this.props;
        const actions = bindActionCreators(fileActions, dispatch);

        fetch("http://localhost:3001/files")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                for (let fileData of data) {
                    dispatch(actions.addFileData(fileData));
                }
            });
    }

    render() {

        const { filelist: { files }, dispatch } = this.props;
        const actions = bindActionCreators(fileActions, dispatch);

        let fileItems = [];

        for(let fileData of files) {
            fileItems.push(<li>{fileData.title} Author: {fileData.author_id}, Status: {fileData.status}</li>);
        }

        return (
            <ul className="file-list">{fileItems}</ul>
        );
    }

}
