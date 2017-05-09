import React, {Component} from "react";

export default class SearchBar extends Component {

    render() {

        return (
            <div className="search-bar curved">
                <p className="programme-title">Programmes - Dr Who</p>
                <a className="fa fa-search" href="#">
                    <span className="hidden-text">Search</span>
                </a>
            </div>
        );
    }

}
