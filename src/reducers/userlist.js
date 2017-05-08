import * as types from "../constants/ActionTypes";

const initialState = {
    users: []
};

export default function userlist(state = initialState, action) {

    switch (action.type) {
        case types.ADD_USER_DATA:

            //add a new user

            return {
                users: [
                    ...state.users,
                    {
                        id: action.data.id,
                        givenName: action.data.givenName,
                        familyName: action.data.familyName
                    }
                ]
            };

        default:
            return state;
    }
}
