import React, {Component} from "react";
import { connect } from 'react-redux';
import * as userActions from "../actions/userActions";

export class ProgrammeInformation extends Component {

    constructor(props) {
        super(props);
        this.requestCount = 1;
    }

    fetchData()  {

        const { dispatch } = this.props;

        return fetch("http://localhost:3001/users")
            .then((response) => {
                if(!response.ok) {

                    if(++this.requestCount <= 3) {
                        this.fetchData();
                        throw Error('Users List failed. Trying again');
                    }

                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then((data) => {
                for (let userData of data) {
                    dispatch(userActions.addUserData(userData));
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
            <div className="programme-information">
                <h2 className="programme-title">Programmes - Dr Who</h2>
                <p className="description">This project has {users.length} users</p>
            </div>
        );
    }

}

export default connect(state => ({userlist: state.userlist}))(ProgrammeInformation);
