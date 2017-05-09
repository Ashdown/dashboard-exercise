/*global describe, it, expect*/

import React from "react";
import {shallow} from "enzyme";
import TypeList from "../../../src/components/TypeList";

function setup() {

    const props = {};

    const enzymeWrapper = shallow(<TypeList {...props}/>);

    return {
        props,
        enzymeWrapper
    };
}

describe("TypeList Component", () => {

    it("should render self", () => {
        const {enzymeWrapper, props} = setup();
        // expect(enzymeWrapper.find(".type-list").hasClass("type-list")).toBe(true);
    });
});

