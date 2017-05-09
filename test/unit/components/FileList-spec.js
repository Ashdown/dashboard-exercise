/*global describe, it, expect*/

import React from "react";
import {shallow} from "enzyme";
import { FileList } from "../../../src/components/FileList";
import fetchMock from 'fetch-mock';
import * as fileActions from "../../../src/actions/fileActions";


describe("TypeList Component", () => {

    describe('render', () => {

        function setup() {

            const props = {
                store: {
                    filelist: {
                        files: []
                    },
                    userlist: {
                        users: []
                    }
                }
            };

            const enzymeWrapper = shallow(<FileList {...props}/>);

            return {
                props,
                enzymeWrapper
            };
        }

        it("should render self", () => {
            const { enzymeWrapper, props } = setup();
            expect(enzymeWrapper.find(".file-list").hasClass("file-list")).toBe(true);
        });
    });

    describe('fetchData', () => {
        const mockDispatch = jest.fn();
        const component = new FileList({dispatch: mockDispatch, filelist: {}});

        afterEach(() => {
            fetchMock.restore();
        });

        it("should call dispatch with correct user actions", () => {

            fetchMock.get('http://localhost:3001/files', [
                {
                    "creationDateTime": "2015-10-24T15:38:58.467Z",
                    "status": "Scheduled",
                    "modifiedBy": 2,
                    "type": "article",
                    "uri": "/project/test/content/0f35d0fc-d406-503a-9efa-69736e8129e7",
                    "version": 4,
                    "id": "0f35d0fc-d406-503a-9efa-69736e8129e7",
                    "fileId": "Iwiboku-pinu.",
                    "scheduled": true,
                    "title": "Iwiboku pinu.",
                    "createdBy": 5,
                    "modifiedDateTime": "2015-10-24T20:38:58.467Z",
                    "live": true,
                    "popularity": false
                },
                {
                    "creationDateTime": "2015-10-02T08:24:03.837Z",
                    "status": "In progress",
                    "modifiedBy": 6,
                    "type": "profile",
                    "uri": "/project/test/content/883685b8-2450-504f-bb8d-d86de5684dd6",
                    "version": 4,
                    "id": "883685b8-2450-504f-bb8d-d86de5684dd6",
                    "fileId": "Liiw-abotacmec.",
                    "scheduled": false,
                    "title": "Liiw abotacmec.",
                    "createdBy": 2,
                    "modifiedDateTime": "2015-10-02T15:24:03.837Z",
                    "live": true,
                    "popularity": false
                },
            ]);


            return component.fetchData().then(data => {
                    expect(mockDispatch).toBeCalledWith(fileActions.addFileData({
                        "creationDateTime": "2015-10-24T15:38:58.467Z",
                        "status": "Scheduled",
                        "modifiedBy": 2,
                        "type": "article",
                        "uri": "/project/test/content/0f35d0fc-d406-503a-9efa-69736e8129e7",
                        "version": 4,
                        "id": "0f35d0fc-d406-503a-9efa-69736e8129e7",
                        "fileId": "Iwiboku-pinu.",
                        "scheduled": true,
                        "title": "Iwiboku pinu.",
                        "createdBy": 5,
                        "modifiedDateTime": "2015-10-24T20:38:58.467Z",
                        "live": true,
                        "popularity": false
                    },));
                    expect(mockDispatch).toBeCalledWith(fileActions.addFileData({
                        "creationDateTime": "2015-10-02T08:24:03.837Z",
                        "status": "In progress",
                        "modifiedBy": 6,
                        "type": "profile",
                        "uri": "/project/test/content/883685b8-2450-504f-bb8d-d86de5684dd6",
                        "version": 4,
                        "id": "883685b8-2450-504f-bb8d-d86de5684dd6",
                        "fileId": "Liiw-abotacmec.",
                        "scheduled": false,
                        "title": "Liiw abotacmec.",
                        "createdBy": 2,
                        "modifiedDateTime": "2015-10-02T15:24:03.837Z",
                        "live": true,
                        "popularity": false
                    },));

                }
            );

        });
    })


});

