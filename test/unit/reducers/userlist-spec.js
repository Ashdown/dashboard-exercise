/*global describe, it, expect*/

import reducer from "../../../src/reducers/userlist";
import * as types from "../../../src/constants/ActionTypes";

const sampleData = {
    id: 1,
    givenName: "Peter",
    familyName: "Capaldi"
};

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
                data: sampleData
            })
        ).toEqual({
            "users": [{
                id: 1,
                givenName: "Peter",
                familyName: "Capaldi"
            }]
        });
    });

    it("should add the correct number of users", () => {

        let nextData = sampleData;
        let currentState = undefined;

        currentState = reducer(currentState, {
            type: types.ADD_USER_DATA,
            data: nextData
        });

        expect(currentState["users"].length).toBe(1);

        nextData = Object.assign({}, sampleData).id = '2';
        currentState = reducer(currentState, {
            type: types.ADD_USER_DATA,
            data: nextData
        });

        expect(currentState["users"].length).toBe(2);

    })

});