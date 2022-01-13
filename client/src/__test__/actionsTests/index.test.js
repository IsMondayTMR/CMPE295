import moxios from "moxios"
import axios from "axios"
import { storeFactory } from "../Utils/testUtils"
import { googleSignIn, signIn, signOut, createUser} from "../../actions"
jest.mock('axios')

describe(`actions tests`, () => {
    beforeEach(() => {
        moxios.install()
    })

    afterEach(() => {
        moxios.uninstall()
    })

    test(`googleSignIn withouth valid auth`, () => {
        const store = storeFactory()
        const expectedValue = {
            isSignedIn: false, 
            user: null, 
            authInstance: null, 
            authType: null
        } 
        const result = store.dispatch(googleSignIn(""))
        expect(result.payload).toStrictEqual(expectedValue)
    })

    /**
     * @todo update moxios to corretly intercept axios request
     *  */ 
    
    test(`signIn`, () => {
        const store = storeFactory()
        const formVallue = {
            signInEmail: "test1@gmail.com",
            signInPassword: "Plmoknijb!@213"
        }

        const expectedValue = {
            isSignedIn: true,
            user: {
                "Email": "test1@gmail.com",
            },
            authType: "SIGN_IN",
            authInstance: null,
        }

        axios.get.mockImplementationOnce(() =>
        Promise.resolve({
                data: 
                {
                    0: {
                        Email: "test1@gmail.com",
                        Password: "Plmoknijb!@213"
                    },
                    1: {
                        Email: "test1@gmail.com",
                        Password: "Plmoknijb!@213"
                    }
                }
                }));

        return store.dispatch(signIn(formVallue))
        .then(() => {
            const auth = store.getState().auth
            expect(auth).toStrictEqual(expectedValue)
        })
    })
})