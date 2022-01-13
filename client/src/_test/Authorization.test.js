import React from 'react'
import Enzyme, { mount } from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import { Provider } from 'react-redux'
import Authroization from '../components/Authorization'
import { storeFactory, findByTestAttr } from './Utils/testUtils'

Enzyme.configure({adapter: new EnzymeAdapter()})

const setup = () => {
    const store = storeFactory();

    return mount (
        <Provider store={store}>
            <Authroization/>
        </Provider>
    )
}


test(`render authorization form without error`, () => {
    const wrapper = setup()
    const compnent = wrapper.find('div')
    const authComp = findByTestAttr(compnent,'auth-form')
    expect(authComp).toHaveLength(1)
})

describe(`render test`, () => {
 
    test(`test text feilds are rendered correctly`, () => {
        const wrapper = setup();
        const textFields = wrapper.find('p')

        expect(textFields).toHaveLength(2)
        
        var header = findByTestAttr(wrapper,'header').find('p')
        
        var connectText = findByTestAttr(wrapper,'connect-text').find('p')
        
        expect(header.text()).toEqual('Welcome To Mock')
        expect(connectText.text()).toEqual('Or connect with')
    })

    test(`test buttons are rendered correctly`, () => {
        const wrapper = setup();
        const buttons = wrapper.find('button')
        
        expect(buttons).toHaveLength(7)

        var registerButton = findByTestAttr(wrapper, 'register-btn').find('button')
        expect(registerButton).toHaveLength(0)
        
        const registerTabButton = findByTestAttr(wrapper, 'register-tab-btn').find('button')
        registerTabButton.simulate('click')

        registerButton = findByTestAttr(wrapper, 'register-btn').find('button')
        expect(registerButton).toHaveLength(1)
    })
}) 