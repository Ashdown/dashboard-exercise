import React, {Component} from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from "../actions/userActions";
import fetch from "isomorphic-fetch";

export class UserInformation extends Component {

    constructor(props) {
        super(props);
        this.requestCount = 1;
    }

    fetchData()  {

        console.log('fetch');

        const { dispatch } = this.props;
        const actions = bindActionCreators(userActions, dispatch);

        fetch("http://localhost:3001/users")
            .then((response) => {

                if(!response.ok) {

                    if(this.requestCount++ <= 3) {
                        this.fetchData();
                        throw Error('Users List failed. Trying again');
                    }

                    throw Error(response.statusText);
                }
                console.log('response', response);
                return response.json();
            })
            .then((data) => {
            console.log('data', data);
                for (let userData of data) {
                    console.log('calling disaptch');
                    dispatch(actions.addUserData(userData));
                }
            }).catch((error) => {
                console.log('error', error);
        });
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {

        const { userlist: { users } } = this.props;

        return (
            <div className="user-information">User Count {users.length}</div>
        );
    }

}

export default connect(state => ({userlist: state.userlist}))(UserInformation);
