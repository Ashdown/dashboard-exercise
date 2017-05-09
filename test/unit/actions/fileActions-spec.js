/*global describe, it, expect*/

import * as actions from "../../../src/actions/fileActions";
import * as types from "../../../src/constants/ActionTypes";

describe("actions", () => {
    it("should create an action to add file data", () => {
        const data = "Lorem Ipsum";
        const expectedAction = {
            type: types.ADD_FILE_DATA,
            data
        };
        expect(actions.addFileData(data)).toEqual(expectedAction);
    });
});