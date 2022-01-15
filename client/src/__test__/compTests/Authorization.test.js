import React from "react"
import Enzyme, { mount } from "enzyme"
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17"
import { Provider } from "react-redux"
import Authroization from "../../components/Authorization"
import { storeFactory, findByTestAttr } from "../Utils/testUtils"
import "@testing-library/jest-dom"


Enzyme.configure({ adapter: new EnzymeAdapter() })

let props = {
    closeHelper: jest.fn()
}

const setup = () => {
    const store = storeFactory();

    return mount(
        <Provider store={store}>
            <Authroization closeHelper={props.closeHelper} hide={false} />
        </Provider>
    )
}

const switchForm = (wrapper) => {
    const registerTabButton = findByTestAttr(wrapper, 'register-tab-btn').find('button')
    expect(registerTabButton).toHaveLength(1)
    registerTabButton.simulate('click')
}

test(`render authorization form without error`, () => {
    const wrapper = setup()
    const compnent = wrapper.find('div')
    const authComp = findByTestAttr(compnent, 'auth-form')
    expect(authComp).toHaveLength(1)
})

describe(`render test`, () => {

    test(`text feilds are rendered correctly`, () => {
        const wrapper = setup()
        const textFields = wrapper.find('p')

        expect(textFields).toHaveLength(2)

        var header = findByTestAttr(wrapper, 'header').find('p')

        var connectText = findByTestAttr(wrapper, 'connect-text').find('p')

        expect(header.text()).toEqual('Welcome To Mock')
        expect(connectText.text()).toEqual('Or connect with')
    })

    test(`buttons are rendered correctly`, () => {
        const wrapper = setup()
        const buttons = wrapper.find('button')

        expect(buttons).toHaveLength(7)

        var registerButton = findByTestAttr(wrapper, 'register-btn').find('button')
        expect(registerButton).toHaveLength(0)

        switchForm(wrapper)

        registerButton = findByTestAttr(wrapper, 'register-btn').find('button')
        expect(registerButton).toHaveLength(1)
    })

    test(`forms are renderd correctly`, () => {
        const wrapper = setup()
        var signInForm = findByTestAttr(wrapper, 'sign-in-form').find('form')
        expect(signInForm).toHaveLength(1)

        var registerForm = findByTestAttr(wrapper, 'register-form').find('form')
        expect(registerForm).toHaveLength(0)

        switchForm(wrapper)

        signInForm = findByTestAttr(wrapper, 'sign-in-form').find('form')
        expect(signInForm).toHaveLength(0)

        registerForm = findByTestAttr(wrapper, 'register-form').find('form')
        expect(registerForm).toHaveLength(1)
    })

    test(`inputs field are rendered correctly`, () => {
        const wrapper = setup()
        const signInInputFields = wrapper.find('input')
        var emailInput = findByTestAttr(wrapper, 'sign-in-email-input').find('input')
        var passwordInput = findByTestAttr(wrapper, 'sign-in-password-input').find('input')
        expect(signInInputFields).toHaveLength(2)
        expect(emailInput).toHaveLength(1)
        expect(passwordInput).toHaveLength(1)

        emailInput = findByTestAttr(wrapper, 'register-email-input').find('input')
        passwordInput = findByTestAttr(wrapper, 'register-password-input').find('input')

        expect(emailInput).toHaveLength(0)
        expect(passwordInput).toHaveLength(0)

        switchForm(wrapper)

        emailInput = findByTestAttr(wrapper, 'register-email-input').find('input')
        passwordInput = findByTestAttr(wrapper, 'register-password-input').find('input')

        expect(emailInput).toHaveLength(1)
        expect(passwordInput).toHaveLength(1)

        emailInput = findByTestAttr(wrapper, 'sign-in-email-input').find('input')
        passwordInput = findByTestAttr(wrapper, 'sign-in-password-input').find('input')

        expect(emailInput).toHaveLength(0)
        expect(passwordInput).toHaveLength(0)
    })

    test(`close button`, () => {
        const wrapper = setup()
        const div = wrapper.find('div')
        const form = findByTestAttr(div, 'auth-form')
        expect(form).toHaveLength(1)
        expect(form.exists()).toBeTruthy()


        const closeButton = findByTestAttr(wrapper, 'close-btn').find('button')
        expect(closeButton).toHaveLength(1)
        closeButton.simulate('click')
        expect(props.closeHelper).toHaveBeenCalled()
    })

    test(`button is diabled after rendering`, () => {
        const wrapper = setup()
        const buttons = wrapper.find('button')

        expect(buttons).toHaveLength(7)

        var signInButton = findByTestAttr(wrapper, 'sign-in-btn').find('button')
        expect(signInButton).toHaveLength(1)

        expect(signInButton.is('[disabled]')).toBe(true)

        switchForm(wrapper)

        var registerButton = findByTestAttr(wrapper, 'register-btn').find('button')
        expect(registerButton).toHaveLength(1)
        expect(registerButton.is('[disabled]')).toBe(true)
    })

    /**
     * @todo update test with correct procedure to enable button
     */
    test(`button is enabled after user input`, () => {
        // const wrapper = setup()
        // const emailInput = findByTestAttr(wrapper, 'sign-in-email-input').find('Field').at(0).find('input')
        // const passwordInput = findByTestAttr(wrapper, 'sign-in-password-input').find('Field').at(0).find('input')
        // expect(emailInput).toHaveLength(1)
        // expect(passwordInput).toHaveLength(1)

        // // emailInput.props().value = 'hello'
        // // passwordInput.props().value = 'hello'
        // // emailInput.props().onChange((e) => e.target.value = 'hello')
        // // passwordInput.props().onChange((e) => e.target.value = 'hello')
        // // console.log(emailInput.at(0).find('input').props())

        // const buttons = wrapper.find('button')
        // console.log(wrapper.debug())
        // expect(buttons).toHaveLength(7)

        // var signInButton = findByTestAttr(wrapper, 'sign-in-btn').find('button')
        // expect(signInButton).toHaveLength(1)
        // // console.log(signInButton.props())
        // expect(signInButton.is('[disabled]')).toBe(false)

    })

}) 
