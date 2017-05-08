import * as types from "../constants/ActionTypes";

export function addUserData(data) {
    return {
        type: types.ADD_USER_DATA,
        data
    };
}
