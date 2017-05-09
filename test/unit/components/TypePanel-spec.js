/*global describe, it, expect*/

import React from "react";
import {shallow} from "enzyme";
import {TypePanel} from "../../../src/components/TypePanel";
import fetchMock from 'fetch-mock';
import * as typeActions from "../../../src/actions/typeActions";

describe("TypeList Component", () => {

    describe("render", () => {

        function setup() {

            const props = {
                typelist: {
                    types: []
                }
            };

            const enzymeWrapper = shallow(<TypePanel {...props}/>);

            return {
                props,
                enzymeWrapper
            };
        }

        it("should render self", () => {
            const {enzymeWrapper, props} = setup();
            expect(enzymeWrapper.find(".type-panel").hasClass("type-panel")).toBe(true);
        });
    });

    describe('fetchData', () => {

        const mockDispatch = jest.fn();
        const component = new TypePanel({dispatch: mockDispatch, typelist: {}});

        afterEach(() => {
            fetchMock.restore();
        });

        it("should call dispatch with correct user actions", () => {

            fetchMock.get('http://localhost:3001/types', [
                {
                    "creationDateTime": "2016-08-17T13:07:19.800Z",
                    "id": "article",
                    "documentsCount": 5,
                    "description": "Articles about the programme",
                    "name": "Article Page",
                    "colourId": "golden"
                },
                {
                    "creationDateTime": "2016-08-13T15:00:44.200Z",
                    "id": "profile",
                    "documentsCount": 6,
                    "description": "Actor/Actress profiles",
                    "name": "Profile Page",
                    "colourId": "spray"
                }
            ]);


            return component.fetchData().then(data => {
                    expect(mockDispatch).toBeCalledWith(typeActions.addTypeData({
                        "creationDateTime": "2016-08-17T13:07:19.800Z",
                        "id": "article",
                        "documentsCount": 5,
                        "description": "Articles about the programme",
                        "name": "Article Page",
                        "colourId": "golden"
                    },));
                    expect(mockDispatch).toBeCalledWith(typeActions.addTypeData({
                        "creationDateTime": "2016-08-13T15:00:44.200Z",
                        "id": "profile",
                        "documentsCount": 6,
                        "description": "Actor/Actress profiles",
                        "name": "Profile Page",
                        "colourId": "spray"
                    },));

                }
            );

        });

    })




});

