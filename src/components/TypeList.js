import React, {Component} from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as typeActions from "../actions/typeActions";
import fetch from "isomorphic-fetch";

@connect(state => ({
    typelist: state.typelist
}))

export default class TypeList extends Component {

    componentDidMount() {

        const { typelist: { sensors }, dispatch } = this.props;
        const actions = bindActionCreators(typeActions, dispatch);

        fetch("http://localhost:3001/types")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                for (let typeData of data) {
                    dispatch(actions.addTypeData(typeData));
                }
            });
    }

    render() {

        const { typelist: { types }, dispatch } = this.props;
        const actions = bindActionCreators(typeActions, dispatch);

        let typeItems = [];

        for(let typeData of types) {
            typeItems.push(<li>{typeData.name} ({typeData.count})</li>);
        }

        return (
            <ul className="type-list">{typeItems}</ul>
        );
    }

}
