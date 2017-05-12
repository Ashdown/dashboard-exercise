/*global describe, it, expect*/

import reducer from "../../../src/reducers/typelist";
import * as types from "../../../src/constants/ActionTypes";

const sampleData = {
    "creationDateTime": "2016-08-17T13:07:19.800Z",
    "id": "article",
    "documentsCount": 5,
    "description": "Articles about the programme",
    "name": "Article Page",
    "colourId": "golden"
};

describe("typelist reducer", () => {
    it("should return the initial state", () => {
        expect(
            reducer(undefined, {})
        ).toEqual({
            "types": []
        });
    });

    it("should handle ADD_TYPE_DATA", () => {
        expect(
            reducer(undefined, {
                type: types.ADD_TYPE_DATA,
                data: sampleData
            })
        ).toEqual({
            "types": [{
                id: "article",
                count: 5,
                name: "Article Page"
            }]
        });
    });

    it("should add the correct number of types", () => {

        let nextData = sampleData;
        let currentState = undefined;

        currentState = reducer(currentState, {
            type: types.ADD_TYPE_DATA,
            data: nextData
        });

        expect(currentState["types"].length).toBe(1);

        nextData = Object.assign({}, sampleData).id = 'feature';
        currentState = reducer(currentState, {
            type: types.ADD_TYPE_DATA,
            data: nextData
        });

        expect(currentState["types"].length).toBe(2);

    })

});