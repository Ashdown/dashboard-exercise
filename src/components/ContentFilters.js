import React, {Component} from "react";
import FilterItem from './FilterItem';


export default class ContentFilters extends Component {

    filterData = {
        'my-content': 'My Content',
        'filter-item': 'All',
        'published': 'Published'
    };

    constructor () {
        super();
        this.state = {
            selectedFilter: 'my-content'
        };
    }

    selectItem = (itemKey) => {
        this.setState({
          selectedFilter: itemKey
        });
    }

    render() {

        let filterItems = [];

        for(let key in this.filterData) {
            filterItems.push(

                <FilterItem key={key} id={key} text={this.filterData[key]} isSelected={key === this.state.selectedFilter}
                            selectItem={this.selectItem} />)
        }

        return (
            <ul className="content-filters">{filterItems}</ul>
        );
    }

}
