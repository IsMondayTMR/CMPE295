import * as TYPES from '../const/reduxTypes'
import BASEAPI from '../apis/baseUrl'

/**
 * Returns Redux Thunk function that dispatches GOOGLE_SIGN_IN action
 *     ,signIn status, and user Instance
 * @function googleSignIn
 * @param {string} auth - google auth instance.
 * @returns {function} - Redux Thunk function.
*/
export const googleSignIn = (auth) => {
    if (!auth) {
        return {
            type: TYPES.GOOGLE_SIGN_IN,
            payload: {
                authInstance: null,
                isSignedIn: false,
                user: null,
                authType: null,
            }
            
        }
    }

    var profile = auth.currentUser.get().getBasicProfile()

    var user = {
        ID: profile.getId(),
        FullName: profile.getName(),
        GivenName: profile.getGivenName(),
        FamilyName: profile.getFamilyName(),
        ImageURL: profile.getImageUrl(),
        Email: profile.getEmail()
    }

    sessionStorage.setItem("user", JSON.stringify(user))
    return {
        type: TYPES.GOOGLE_SIGN_IN,
        payload: {
            authInstance: auth,
            isSignedIn: true,
            user: user,
            authType: TYPES.GOOGLE_SIGN_IN
        }
        
    }
}

/**
 * Returns Redux Thunk function that dispatches GOOGLE_SIGN_OUT action
 * @function googleSignOut
 * @returns {function} - Redux Thunk function.
*/
export const googleSignOut = () => {
    return {
        type: TYPES.GOOGLE_SIGN_OUT
    }
}

/**
 * Returns Redux Thunk function that dispatches SIGN_IN action
 * @function signIn
 * @param {string} formValue - Email and Password.
 * @returns {function} - Redux Thunk function.
*/

export const signIn = (formValue) => {
    
    return async (dispatch) => {
        const {data} = await BASEAPI.get('/createUser')
        
        var isSignedIn = false
        var user = null
        for (const key in data) {
            if (data[key].Email === formValue.signInEmail && data[key].Password === formValue.signInPassword) {
                isSignedIn = true
                user = {
                    Email:data[key].Email,
                }
                sessionStorage.setItem("user", JSON.stringify(user))
                break
            } 
        }
        
        dispatch ({
            type: TYPES.SIGN_IN, 
            payload: {
                isSignedIn: isSignedIn,
                user: user,
                authType: TYPES.SIGN_IN
            }})
    }   
}
/**
 * Returns Redux Thunk function that dispatches SIGN_OUT action
 * @function signOut
 * @param {string} auth - redux auth object.
 * @returns {function} - Redux Thunk function.
*/
export const signOut = (auth) => {

    
    if (auth && auth.authType === TYPES.GOOGLE_SIGN_IN) {
        auth.authInstance.signOut()
    }
    sessionStorage.removeItem("user")
    return {
        type: TYPES.SIGN_OUT
    }
}

/**
 * Returns Redux Thunk function that conditionaly 
 * dispatches CREATE_FAIL or CREATE_SUCESS action
 * @function signOut
 * @param {string} formValue - user infor.
 * @returns {function} - Redux Thunk function.
*/

export const createUser = (formValue) => {

    return async (dispatch) => {
        
        if (!formValue) {
            dispatch ({
                type: TYPES.CREATE_FAIL,
                payload: false
            })
        }

        const registerValue = {
            Email : formValue.registerEmail,
            Password: formValue.registerPassword
        }
        const {status, statusText} = await BASEAPI.post('/createUser', registerValue)

        if (status === 201 && statusText === "Created") {
            dispatch ({
                type: TYPES.CREATE_SUCESS,
                payload: true
            })
        } else {
            
            dispatch ({
                type: TYPES.CREATE_FAIL,
                payload: false
            })
        }
    }
}