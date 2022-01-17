import React from "react"
import Enzyme, { mount } from "enzyme"
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17"
import Card from "../../components/Card"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => { return mount(<BrowserRouter><Card location="test" title="test" /></BrowserRouter>) };

test(`component renders without error`, () => {
    const wrapper = setup();
    const card = wrapper.find('div[data-test="card"]');
    expect(card.length).toBe(1);
})

test(`content is rendered correctly`, () => {
    const wrapper = setup();
    const card = wrapper.find('div[data-test="card"]');
    expect(card.text()).toBe("test");
})

test(`content is rendered correctly`, () => {
    const wrapper = setup();
    const Link = wrapper.find('a');
    expect(Link.length).toBe(1);
    expect(Link.props().href).toBe("/search/test");
})
