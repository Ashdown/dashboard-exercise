/*global describe, it, expect*/

import React from "react";
import {shallow} from "enzyme";
import {UserInformation} from "../../../src/components/UserInformation";
import nock from 'nock';
import configureStore from 'redux-mock-store';

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

    afterEach(() => {
        nock.cleanAll()
    });

    it("should render self", () => {
        const {enzymeWrapper, props} = setup();
        expect(enzymeWrapper.find(".user-information").hasClass("user-information")).toBe(true);
    });

    it("should request information data", () => {

        const store = mockStore({});

        nock('http://localhost:3001').get('/users')
                .reply(200, {body: [
                    {
                        "id": 1,
                        "givenName": "Peter",
                        "familyName": "Capaldi"
                    },
                    {
                        "id": 2,
                        "givenName": "Matt",
                        "familyName": "Smith"
                    }]});

        var component = new UserInformation({dispatch: {}, userlist: {}});
        component.fetchData();

        const actions = store.getActions();
        const expectedPayload = { type: 'ADD_USER_DATA' };
        // expect(actions).toEqual([expectedPayload]);


    })
});

