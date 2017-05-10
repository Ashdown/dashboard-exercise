import React, {Component} from "react";

export default class ContentFilters extends Component {

    render() {

        return (
            <ul className="content-filters">
                <li className="filter-item"><a className="blue-link selected" href="#">My Content</a></li>
                <li className="filter-item"><a className="blue-link" href="#">All</a></li>
                <li className="filter-item"><a className="blue-link" href="#">Published</a></li>
            </ul>
        );
    }

}
