import React, {Component} from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as typeActions from "../actions/typeActions";

export class TypeList extends Component {

    fetchData() {
        const { dispatch } = this.props;
        const actions = bindActionCreators(typeActions, dispatch);

        return fetch("http://localhost:3001/types")
            .then((response) => {
                if(!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then((data) => {
                for (let typeData of data) {
                    dispatch(actions.addTypeData(typeData));
                }
            }).catch((error) => {
            console.log('error', error);
        });
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {

        const { typelist: { types } } = this.props;
        let typeItems = [];

        for(let typeData of types) {
            typeItems.push(<li>{typeData.name} ({typeData.count})</li>);
        }

        return (
            <ul className="type-list">{typeItems}</ul>
        );
    }

}

export default connect(state => ({typelist: state.typelist}))(TypeList)
