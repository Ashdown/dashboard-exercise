/*global describe, it, expect*/

import * as actions from "../../../src/actions/userActions";
import * as types from "../../../src/constants/ActionTypes";

describe("actions", () => {
    it("should create an action to add sensor data", () => {
        const data = "Lorem Ipsum";
        const expectedAction = {
            type: types.ADD_USER_DATA,
            data
        };
        expect(actions.addUserData(data)).toEqual(expectedAction);
    });
});