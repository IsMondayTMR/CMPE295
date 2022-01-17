import React from "react"
import Enzyme, { shallow } from "enzyme"
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17"
import Category from "../../components/Category"
import "@testing-library/jest-dom"

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => { return shallow(<Category />) };

test(`category component renders without error`, () => {
    const wrapper = setup();
    const background = wrapper.find('[data-test="category-background"]');
    expect(background.length).toBe(1);
})
describe(`category component test`, () => {
    test(`header is rendered correctly`, () => {
        const wrapper = setup();
        const header = wrapper.find('[data-test="category-header"]');
        expect(header.render().text().includes("Category")).toBe(true);
    })

    test(`cards are rendered correctly`, () => {
        const wrapper = setup();
        const header = wrapper.find('[data-test="card"]');
        expect(header.length).toBe(9);
    })
})