/*global describe, it, expect*/

import React from "react";
import {shallow} from "enzyme";
import {ProgrammeInformation} from "../../../src/components/ProgrammeInformation";
import fetchMock from 'fetch-mock'
import * as userActions from "../../../src/actions/userActions";

describe("ProgrammeInformation Component", () => {

    describe('render', () => {

        function setup() {

            const props = {
                userlist: {
                    users: []
                }
            };

            const enzymeWrapper = shallow(<ProgrammeInformation {...props}/>);

            return {
                props,
                enzymeWrapper
            };
        }

        it("should render self", () => {
            const {enzymeWrapper, props} = setup();
            expect(enzymeWrapper.find(".programme-information").hasClass("programme-information")).toBe(true);
        });

        it("should render title", () => {
            const {enzymeWrapper, props} = setup();
            expect(enzymeWrapper.find(".programme-title").text()).toBe("Programmes - Dr Who");
        });
    })

    describe('fetchMock', () => {

        const mockDispatch = jest.fn();
        const component = new ProgrammeInformation({dispatch: mockDispatch, userlist: {}});

        afterEach(() => {
            fetchMock.restore();
        });

        it("should call dispatch with correct user actions", () => {

            fetchMock.get('http://localhost:3001/users', [{
                    "id": 1,
                    "givenName": "Peter",
                    "familyName": "Capaldi"
                },
                {
                    "id": 2,
                    "givenName": "Matt",
                    "familyName": "Smith"
                }]);


            return component.fetchData().then(data => {
                    expect(mockDispatch).toBeCalledWith(userActions.addUserData({
                        "id": 1,
                        "givenName": "Peter",
                        "familyName": "Capaldi"
                    },));
                    expect(mockDispatch).toBeCalledWith(userActions.addUserData({
                        "id": 2,
                        "givenName": "Matt",
                        "familyName": "Smith"
                    },));

                }
            );

        });

        it("should try 3 times to make another request if the first one fails", () => {

            fetchMock.get('http://localhost:3001/users', 500);

            return component.fetchData().then(data => {
                    expect(fetchMock.calls().matched.length).toBe(3);
                }
            );

        });

    })



});

