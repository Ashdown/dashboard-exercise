import React, {Component, PropTypes} from "react";

export default class FilterItem extends Component {

    static propTypes = {
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        isSelected: PropTypes.bool.isRequired,
        selectItem: PropTypes.func.isRequired
    };

    clickLink = (event) =>{
        event.preventDefault();
        this.props.selectItem(this.props.id);
    };

    render() {

        const linkClass = "blue-link" + (this.props.isSelected? ' selected' : '');

        return(
            <li className="filter-item"><a className={linkClass} href={this.props.id} onClick={this.clickLink}>{this.props.text}</a></li>
        );
    }
}