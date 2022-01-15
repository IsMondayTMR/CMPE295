import * as actionTypes from "../../const/reduxTypes";
import authReducer from "../../reducers/authReducer"

const INITIAL_STATE = {
    isSignedIn: false,
    user: JSON.parse(sessionStorage.getItem("user")),
    authType: null,
    authInstance: null,
};

const PREVIOUS_STATE = {
    isSignedIn: true,
    user: JSON.parse(sessionStorage.getItem("user")),
    authType: "test",
    authInstance: "test",
};

const GOOGLE_SIGN_IN_PAYLOAD = {
    isSignedIn: true,
    user: "test",
    authType: actionTypes.GOOGLE_SIGN_IN,
    authInstance: actionTypes.GOOGLE_SIGN_IN,
}

const GOOGLE_SIGN_IN_EXPECTED = {
    isSignedIn: true,
    user: "test",
    authType: actionTypes.GOOGLE_SIGN_IN,
    authInstance: actionTypes.GOOGLE_SIGN_IN,
}

const SIGN_IN_PAYLOAD = {
    isSignedIn: true,
    user: "test",
    authType: actionTypes.SIGN_IN,
    authInstance: null
}

const SIGN_IN_EXPECTED = {
    isSignedIn: true,
    user: "test",
    authType: actionTypes.SIGN_IN,
    authInstance: null
}

test(`when previous state is undefined, return initial state`, () => {
    const newState = authReducer(undefined, {});
    expect(newState).toStrictEqual(INITIAL_STATE);
});

test(`return previous state when action type is unknown`, () => {
    const newState = authReducer(PREVIOUS_STATE, { type: "unknown" });
    expect(newState).toStrictEqual(PREVIOUS_STATE);
});

test(`return new state when action type is defined type`, () => {
    const newState = authReducer(PREVIOUS_STATE, {
        type: actionTypes.GOOGLE_SIGN_IN,
        payload: SIGN_IN_PAYLOAD
    });
    expect(newState).toStrictEqual(SIGN_IN_EXPECTED);
});