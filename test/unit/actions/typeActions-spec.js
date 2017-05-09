/*global describe, it, expect*/

import * as actions from "../../../src/actions/typeActions";
import * as types from "../../../src/constants/ActionTypes";

describe("actions", () => {
    it("should create an action to add type data", () => {
        const data = "Lorem Ipsum";
        const expectedAction = {
            type: types.ADD_TYPE_DATA,
            data
        };
        expect(actions.addTypeData(data)).toEqual(expectedAction);
    });
});