import React, {Component} from "react";
import {combineReducers} from "redux";
import {createStore, renderDevTools} from "../store_enhancers/devTools";
import * as reducers from "../reducers";
import UserInformation from "../components/UserInformation";
import TypeList from "../components/TypeList";
import {Provider} from "react-redux";

const reducer = combineReducers(reducers);
const store = createStore(
    reducer,
    {}
);

export default class Dashboard extends Component {
    render() {

        return (
            <div className="dashboard">
                <h2 className="dashboard-title">Dashboard</h2>
                <p>This is the dashboard</p>
                <Provider store={store}>
                    {() => <UserInformation />}
                </Provider>
                <Provider store={store}>
                    {() => <TypeList />}
                </Provider>
                {renderDevTools(store)}
            </div>
        );
    }
}
