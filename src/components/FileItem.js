import React, {Component, PropTypes} from "react";

export default class FileItem extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired
    };

    getTimeString(timestamp) {
        const a = new Date(timestamp);
        const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        const year = a.getFullYear();
        const month = months[a.getMonth()];
        const date = a.getDate();
        return date + ' ' + month + ' ' + year;
    }



    render() {

        return (
            <li className="file-item">
                <h4 className="file-title">{this.props.title}</h4>
                <p className="description">
                    <span className="type strong">{this.props.type}</span> modified by <span className="strong">{this.props.author}</span> on <span className="strong">{this.getTimeString(this.props.date)}</span> - {this.props.status}
                </p>
            </li>
        );
    }

}
