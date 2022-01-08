import * as TYPES from '../const/reduxTypes' 

const isSignedIn = sessionStorage.getItem("user") === null ? false : true
  
const INITIAL_STATE = {
    isSignedIn,
    user: JSON.parse(sessionStorage.getItem("user")),
    authType: null,
    authInstance: null,
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPES.SIGN_IN:
            return {...state, isSignedIn: action.payload, user: JSON.parse(sessionStorage.getItem("user")), authType: TYPES.SIGN_IN}
        case TYPES.SIGN_OUT:
            return {...state, isSignedIn: false, user: null, authInstance: null, authType: null}
        case TYPES.GOOGLE_SIGN_IN:
            return {...state, isSignedIn: true, user: action.payload, authInstance: action.authInstance, authType: TYPES.GOOGLE_SIGN_IN}
        default:
            return state
    }
}

export default authReducer