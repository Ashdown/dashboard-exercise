import React, {Component} from "react";
import {combineReducers} from "redux";
import {createStore, renderDevTools} from "../store_enhancers/devTools";
import * as reducers from "../reducers";
import ProgrammeInformation from "../components/ProgrammeInformation";
import TypeList from "../components/TypeList";
import FileList from "../components/FileList";
import SearchBar from "../components/SearchBar";
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
                <SearchBar />
                <Provider store={store}>
                    {() => <ProgrammeInformation />}
                </Provider>
                <Provider store={store}>
                    {() => <TypeList />}
                </Provider>
                <Provider store={store}>
                    {() => <FileList />}
                </Provider>
                {renderDevTools(store)}
            </div>
        );
    }
}
