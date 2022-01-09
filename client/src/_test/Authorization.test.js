import React from "react"
import { Provider } from "react-redux"
import renderer from "react-test-renderer"
import { render, screen } from "@testing-library/react"
import configureStore from "redux-mock-store"
import { reducer as formReducer } from 'redux-form'

import Authorization from "../components/Authorization"

const mockStore = configureStore([])
// const isSignedIn = sessionStorage.getItem("user") === null ? false : true
// const INITIAL_STATE = {
//     isSignedIn,
//     user: JSON.parse(sessionStorage.getItem("user")),
//     authType: null,
//     authInstance: null,
// }


describe(`render Auth form`, () => {
    let store 
    let component

    beforeEach(() => {
        store = mockStore({form: formReducer})

        component = renderer.create(
            <Provider store = {store}>
                <Authorization/>
            </Provider>)
    })
    it(`first render`, () => {
        screen.debug()
    })
})
