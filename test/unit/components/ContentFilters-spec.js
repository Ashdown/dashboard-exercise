/*global describe, it, expect*/

import React from "react";
import {mount} from "enzyme";
import ContentFilters from "../../../src/components/ContentFilters";


describe("FileItem Component", () => {

    function setup() {

        const props = {};

        const enzymeWrapper = mount(<ContentFilters {...props}/>);

        return {
            props,
            enzymeWrapper
        };
    }

    describe('render', () => {

        it("should render self and subcomponents", () => {
            const { enzymeWrapper, props } = setup();
            expect(enzymeWrapper.find(".content-filters").hasClass("content-filters")).toBe(true);
            expect(enzymeWrapper.find('FilterItem').length).toBe(3);
        });


    });

    describe('selectItem', () => {

        it('selectItem should update state.selectedFilter', () => {
            const { enzymeWrapper, props } = setup();
            expect(enzymeWrapper.state.selectedFilter = 'my-content');
            // const itemProps = enzymeWrapper.first('FilterItem').props();
            const filters = enzymeWrapper.find('FilterItem')

            expect(filters.get(0).props.isSelected).toBe(true);
            expect(filters.get(1).props.isSelected).toBe(false);

            enzymeWrapper.instance().selectItem('filter-item');
            enzymeWrapper.update();
            expect(filters.get(0).props.isSelected).toBe(false);
            // expect(filters.get(1).props.isSelected).toBe(true);

        });
    });

});

