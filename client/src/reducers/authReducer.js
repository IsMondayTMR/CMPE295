import * as TYPES from "../const/reduxTypes";

const isSignedIn = sessionStorage.getItem("user") === null ? false : true;

const INITIAL_STATE = {
    isSignedIn,
    user: JSON.parse(sessionStorage.getItem("user")),
    authType: null,
    authInstance: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPES.SIGN_IN:
            return {
                ...state,
                isSignedIn: action.payload.isSignedIn,
                user: action.payload.user,
                authType: action.payload.authType
            };
        case TYPES.SIGN_OUT:
            return {
                ...state,
                isSignedIn: false,
                user: null,
                authInstance: null,
                authType: null
            };
        case TYPES.GOOGLE_SIGN_IN:
            return {
                ...state,
                isSignedIn: action.payload.isSignedIn,
                user: action.payload.user,
                authInstance: action.payload.authInstance,
                authType: action.payload.authType
            };
        default:
            return state;
    }
};

export default authReducer;