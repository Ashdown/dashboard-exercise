/*global describe, it, expect*/

import reducer from "../../../src/reducers/userlist";
import * as types from "../../../src/constants/ActionTypes";

describe("userlist reducer", () => {
    it("should return the initial state", () => {
        expect(
            reducer(undefined, {})
        ).toEqual({
            "users": []
        });
    });

    it("should handle ADD_USER_DATA", () => {
        expect(
            reducer(undefined, {
                type: types.ADD_USER_DATA,
                data: {
                    id: 1,
                    givenName: "Peter",
                    familyName: "Capaldi"
                }
            })
        ).toEqual({
            "users": [{
                id: 1,
                givenName: "Peter",
                familyName: "Capaldi"
            }]
        });
    });

});