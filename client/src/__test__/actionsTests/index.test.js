import moxios from "moxios"
import { storeFactory } from "../Utils/testUtils"
import { googleSignIn, signIn, signOut, createUser} from "../../actions"
import BASEAPI from '../../apis/mockup'
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
    
    test(`signIn`, async () => {
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
        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                data: {
                    0: {
                        Email: "test5@gmail.com",
                        Password: "Tmdsb!@213"
                    },
                    1: {
                        Email: "test5@gmail.com",
                        Password: "Tmdsb!@213"
                    }
                }
            })
        })

        return store.dispatch(signIn(formVallue))
        .then(() => {
            const auth = store.getState().auth
            expect(auth).toStrictEqual(expectedValue)
        })
    })
})