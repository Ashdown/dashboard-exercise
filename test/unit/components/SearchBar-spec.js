/*global describe, it, expect*/

import React from "react";
import {shallow} from "enzyme";
import SearchBar from "../../../src/components/SearchBar";


describe("SearchBar Component", () => {

    describe('render', () => {

        function setup() {

            const props = {};

            const enzymeWrapper = shallow(<SearchBar {...props}/>);

            return {
                props,
                enzymeWrapper
            };
        }

        it("should render self", () => {
            const { enzymeWrapper, props } = setup();
            expect(enzymeWrapper.find(".search-bar").hasClass("search-bar")).toBe(true);
        });
    });

});

