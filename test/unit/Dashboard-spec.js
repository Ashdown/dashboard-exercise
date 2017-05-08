/*global describe, it, expect*/

import React from "react";
import { shallow } from "enzyme";
import Dashboard from "../../src/containers/Dashboard";

function setup() {
    const enzymeWrapper = shallow(<Dashboard />);

    return {
        enzymeWrapper
    };
}

describe("Dashboard Component", () => {

    it("should render self and subcomponents", () => {
        const { enzymeWrapper } = setup();
        expect(enzymeWrapper.find(".dashboard").hasClass("dashboard")).toBe(true);
        expect(enzymeWrapper.find(".dashboard-title").text()).toBe("Dashboard");
    });
});

