import React, {Component} from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as typeActions from "../actions/typeActions";

export class TypePanel extends Component {

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
            typeItems.push(<li className="type-item"><a className="type-link" href="#">{typeData.name} ({typeData.count})</a></li>);
        }

        return (
            <div className="type-panel content-panel">
                <h3 className="panel-title">File Types</h3>
                <ol start="0" className="type-list">{typeItems}</ol>
            </div>
        );
    }

}

export default connect(state => ({typelist: state.typelist}))(TypePanel)
