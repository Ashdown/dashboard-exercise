import * as types from "../constants/ActionTypes";

export function addFileData(data) {
    return {
        type: types.ADD_FILE_DATA,
        data
    };
}

export function filterByStatus(status) {
    return {
        type: types.FILTER_BY_STATUS,
        status
    };
}
