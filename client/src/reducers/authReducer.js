import * as TYPES from "../const/reduxTypes";


const INITIAL_STATE = {
    user: sessionStorage.getItem("userObject"),
    error: null,
    authType: null,
    authInstance: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPES.SIGN_IN:
            return {
                ...state,
                user: action.payload.user,
                authType: action.payload.authType,
                authInstance: action.payload.authInstance
            };
        case TYPES.SIGN_OUT:
            return {
                ...state,
                user: null,
                error: action.payload.error,
                authInstance: null,
                authType: null
            };
        default:
            return state;
    }
};

export default authReducer;