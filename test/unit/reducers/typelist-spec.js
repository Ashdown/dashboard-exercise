/*global describe, it, expect*/

import reducer from "../../../src/reducers/typelist";
import * as types from "../../../src/constants/ActionTypes";

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
                data: {
                    id: 1,
                    documentsCount: 123,
                    name: "Lorem Ipsum"
                }
            })
        ).toEqual({
            "types": [{
                id: 1,
                count: 123,
                name: "Lorem Ipsum"
            }]
        });
    });

});