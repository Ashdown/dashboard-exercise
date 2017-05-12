/*global describe, it, expect*/

import React from "react";
import {shallow} from "enzyme";
import FilterItem from "../../../src/components/FilterItem";


describe("FitlerItem Component", () => {

    describe('render', () => {

        function setup() {

            const props = {
                id: 1,
                text: 'Lorem',
                isSelected: true,
                selectItem: jest.fn()
            };

            const enzymeWrapper = shallow(<FilterItem {...props}/>);

            return {
                props,
                enzymeWrapper
            };
        }

        it("should render self", () => {
            const { enzymeWrapper, props } = setup();
            expect(enzymeWrapper.find(".filter-item").hasClass("filter-item")).toBe(true);
        });

        it('should call selectItem', () => {
            const { enzymeWrapper, props } = setup();
            const link = enzymeWrapper.find('.blue-link');
            link.simulate('click', { preventDefault() {} });
            expect(props.selectItem.mock.calls.length).toBe(1);
        })
    });

});

