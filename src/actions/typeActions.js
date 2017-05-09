import * as types from "../constants/ActionTypes";

export function addTypeData(data) {
    return {
        type: types.ADD_TYPE_DATA,
        data
    };
}
