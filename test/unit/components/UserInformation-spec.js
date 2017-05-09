/*global describe, it, expect*/

import React from "react";
import {shallow} from "enzyme";
import UserInformation from "../../../src/components/UserInformation";

function setup() {

    const props = {};

    const enzymeWrapper = shallow(<UserInformation {...props}/>);

    return {
        props,
        enzymeWrapper
    };
}

describe("UserInformation Component", () => {

    it("should render self", () => {
        const {enzymeWrapper, props} = setup();
        // expect(enzymeWrapper.find(".user-information").hasClass("user-information")).toBe(true);
    });
});

