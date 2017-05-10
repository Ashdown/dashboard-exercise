/*global describe, it, expect*/

import React from "react";
import {shallow} from "enzyme";
import FileItem from "../../../src/components/FileItem";


describe("FileItem Component", () => {

    describe('render', () => {

        function setup() {

            const props = {
                title: 'Lorem',
                author: 'Ipsum',
                status: 'In progress',
                type: 'Article',
                date: '2015-10-24T15:38:58.467Z'
                };

            const enzymeWrapper = shallow(<FileItem {...props}/>);

            return {
                props,
                enzymeWrapper
            };
        }

        it("should render self", () => {
            const { enzymeWrapper, props } = setup();
            expect(enzymeWrapper.find(".file-item").hasClass("file-item")).toBe(true);
            expect(enzymeWrapper.find(".file-title").text()).toBe('Lorem');
            expect(enzymeWrapper.find(".file-item").text()).toContain('Ipsum');
        });
    });

});

