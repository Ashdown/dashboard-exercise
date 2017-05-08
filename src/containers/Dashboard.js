import React, {Component} from "react";
import {combineReducers} from "redux";
import {createStore, renderDevTools} from "../store_enhancers/devTools";
import * as reducers from "../reducers";

const reducer = combineReducers(reducers);
const store = createStore(
    reducer,
    {}
);

export default class Dashboard extends Component {
    render() {

        console.log(store.getState());

        return (
            <div className="dashboard">
                <h2 className="dashboard-title">Dashboard</h2>
                <p>This is the dashboard</p>
                {renderDevTools(store)}
            </div>
        );
    }
}
