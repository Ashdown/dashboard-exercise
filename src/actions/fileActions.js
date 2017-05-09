import * as types from "../constants/ActionTypes";

export function addFileData(data) {
    return {
        type: types.ADD_FILE_DATA,
        data
    };
}
