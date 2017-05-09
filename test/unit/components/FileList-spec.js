/*global describe, it, expect*/

import React from "react";
import {shallow} from "enzyme";
import FileList from "../../../src/components/FileList";

function setup() {

    const props = {};

    const enzymeWrapper = shallow(<FileList {...props}/>);

    return {
        props,
        enzymeWrapper
    };
}

describe("TypeList Component", () => {

    it("should render self", () => {
        const {enzymeWrapper, props} = setup();
        // expect(enzymeWrapper.find(".file-list").hasClass("file-list")).toBe(true);
    });
});

