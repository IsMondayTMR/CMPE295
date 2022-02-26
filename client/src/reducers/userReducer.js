import * as TYPES from "../const/reduxTypes";

// const isSignedIn = sessionStorage.getItem("user") === null ? false : true;

const INITIAL_STATE = {
    status: sessionStorage.getItem("userInfo") === null ? false : true,
    user: JSON.parse(sessionStorage.getItem("userInfo")),
    error: null,
    session: JSON.parse(sessionStorage.getItem("session"))
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPES.GET_SESSION_SUCCESS:
            return {
                ...state,
                status: false,
                session_error: null,
                session: action.payload.session
            };
        case TYPES.GET_SESSION_FAIL:
            return {
                ...state,
                status: false,
                user: null,
                session_error: action.payload.session_error,
                session: null
            };
        case TYPES.GET_USER_FAIL:
            return {
                ...state,
                status: false,
                user: null,
                user_error: action.payload.user_error,
                session: null
            };
        case TYPES.GET_USER_SUCCESS:
            return {
                ...state,
                status: true,
                user: action.payload.user,
                user_error: null,
            };
        default:
            return state;
    }
};

export default userReducer;