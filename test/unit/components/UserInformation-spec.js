/*global describe, it, expect*/

import React from "react";
import {shallow} from "enzyme";
import {UserInformation} from "../../../src/components/UserInformation";
import configureStore from 'redux-mock-store';
import fetchMock from 'fetch-mock'

import * as userActions from "../../../src/actions/userActions";

const mockStore = configureStore([])

function setup() {

    const props = {
        userlist: {
            users: []
        }
    };

    const enzymeWrapper = shallow(<UserInformation {...props}/>);

    return {
        props,
        enzymeWrapper
    };
}

describe("UserInformation Component", () => {

    it("should render self", () => {
        const {enzymeWrapper, props} = setup();
        expect(enzymeWrapper.find(".user-information").hasClass("user-information")).toBe(true);
    });

    it("should request information data", () => {

        const mockDispatch = jest.fn();
        const component = new UserInformation({dispatch: mockDispatch, userlist: {}});

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

    })
});

