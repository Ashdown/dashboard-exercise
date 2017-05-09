import React, {Component} from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from "../actions/userActions";
import fetch from "isomorphic-fetch";

@connect(state => ({
    userlist: state.userlist
}))

export default class SensorList extends Component {

    componentDidMount() {

        const { userlist: { sensors }, dispatch } = this.props;
        const actions = bindActionCreators(userActions, dispatch);

        fetch("http://localhost:3001/users")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                for (let userData of data) {
                    dispatch(actions.addUserData(userData));
                }
            });
    }

    render() {

        const { userlist: { users }, dispatch } = this.props;
        const actions = bindActionCreators(userActions, dispatch);

        return (
            <div className="user-information">User Count {users.length}</div>
        );
    }

}
