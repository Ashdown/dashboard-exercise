/*global describe, it, expect*/

import reducer from "../../../src/reducers/filelist";
import * as types from "../../../src/constants/ActionTypes";

const sampleData = {
    "creationDateTime": "2015-02-04T14:42:25.086Z",
    "status": "Approved",
    "modifiedBy": 8,
    "type": "article",
    "uri": "/project/test/content/f94cee42-27b4-5195-90fe-f9abb816f668",
    "version": 3,
    "id": "f94cee42-27b4-5195-90fe-f9abb816f668",
    "fileId": "Pelwefura-acalase.",
    "scheduled": false,
    "title": "Pelwefura acalase.",
    "createdBy": 6,
    "modifiedDateTime": "2015-02-04T22:42:25.086Z",
    "live": true,
    "popularity": false
};

describe("userlist reducer", () => {
    it("should return the initial state", () => {
        expect(
            reducer(undefined, {})
        ).toEqual({
            "files": []
        });
    });

    it("should handle ADD_FILE_DATA", () => {
        expect(
            reducer(undefined, {
                type: types.ADD_FILE_DATA,
                data: sampleData
            })
        ).toEqual({
            "files": [{
                id: "f94cee42-27b4-5195-90fe-f9abb816f668",
                author_id: 8,
                date_modified: "2015-02-04T22:42:25.086Z",
                status: "Approved",
                title: "Pelwefura acalase.",
                type: "article"
            }]
        });
    });

    it("should add the correct number of files", () => {

        expect(
            reducer(undefined, {
                type: types.ADD_FILE_DATA,
                data: sampleData
            })["files"].length).toBe(1)

    })

});