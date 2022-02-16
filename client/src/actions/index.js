import * as TYPES from "../const/reduxTypes";
import { BASEURL } from "../const/apis";
import axios from "axios";

/**
 * Returns Redux Thunk function that dispatches GOOGLE_SIGN_IN action
 *     ,signIn status, and user Instance
 * @function googleSignIn
 * @param {string} auth - google auth instance.
 * @returns {function} - Redux Thunk function.
*/
export const googleSignIn = (auth) => {
    if (!auth) {
        return ({
            type: TYPES.GOOGLE_SIGN_IN,
            payload: {
                authInstance: null,
                isSignedIn: false,
                user: null,
                authType: null,
            }
        });
    }

    var profile = auth.currentUser.get().getBasicProfile();

    var user = {
        ID: profile.getId(),
        FullName: profile.getName(),
        GivenName: profile.getGivenName(),
        FamilyName: profile.getFamilyName(),
        ImageURL: profile.getImageUrl(),
        Email: profile.getEmail()
    };

    sessionStorage.setItem("user", JSON.stringify(user));
    return ({
        type: TYPES.GOOGLE_SIGN_IN,
        payload: {
            authInstance: auth,
            isSignedIn: true,
            user: user,
            authType: TYPES.GOOGLE_SIGN_IN
        }
    });
};

/**
 * Returns Redux Thunk function that dispatches GOOGLE_SIGN_OUT action
 * @function googleSignOut
 * @returns {function} - Redux Thunk function.
*/
export const googleSignOut = () => {
    return ({
        type: TYPES.GOOGLE_SIGN_OUT
    });
};

/**
 * Returns Redux Thunk function that dispatches SIGN_IN action
 * @function signIn
 * @param {string} formValue - Email and Password.
 * @returns {function} - Redux Thunk function.
*/

export const signIn = (formValue) => {

    return async (dispatch) => {
        const { data } = await axios.get(`${BASEURL}/createUser`);
        var isSignedIn = false;
        var user = null;
        for (const key in data) {
            if (data[key].Email === formValue.signInEmail && data[key].Password === formValue.signInPassword) {
                isSignedIn = true;
                user = {
                    Email: data[key]?.Email,
                    Username: data[key]?.Username
                };
                sessionStorage.setItem("user", JSON.stringify(user));
                break;
            }
        }

        dispatch({
            type: TYPES.SIGN_IN,
            payload: {
                isSignedIn: isSignedIn,
                user: user,
                authType: TYPES.SIGN_IN,
                authInstance: null
            }
        });
    };
};
/**
 * Returns Redux Thunk function that dispatches SIGN_OUT action
 * @function signOut
 * @param {string} auth - redux auth object.
 * @returns {function} - Redux Thunk function.
*/
export const signOut = (auth) => {
    if (auth && auth.authType === TYPES.GOOGLE_SIGN_IN) {
        auth.authInstance.signOut();
    }
    sessionStorage.removeItem("user");
    return ({
        type: TYPES.SIGN_OUT
    });
};

/**
 * Returns Redux Thunk function that conditionaly 
 * dispatches CREATE_FAIL or CREATE_SUCESS action
 * @function createUser
 * @param {object} formValue - user infor.
 * @returns {function} - Redux Thunk function.
*/

export const createUser = (formValue) => {
    return async (dispatch) => {
        if (!formValue) {
            dispatch({
                type: TYPES.CREATE_FAIL,
                payload: false
            });
        }

        const registerValue = {
            Email: formValue.registerEmail,
            Password: formValue.registerPassword
        };
        const { status, statusText } = await axios.post(`${BASEURL}/createUser`, registerValue);



        const response = await axios.post("https://api.chatengine.io/users/", {
            "username": formValue.registerEmail,
            "first_name": "Adam",
            "last_name": "La Morre",
            "secret": formValue.registerEmail,
        }, {
            headers: { "PRIVATE-KEY": "b4d41842-0e56-4df5-9bec-5ebab5b3438d" }
        });

        console.log(response);

        if (status === 201 && statusText === "Created") {
            dispatch({
                type: TYPES.CREATE_SUCESS,
                payload: true
            });
        } else {
            dispatch({
                type: TYPES.CREATE_FAIL,
                payload: false
            });
        }
    };
};

/**
 * Return Redux Thunk function that conditionally 
 * dispatch SEARCH_SUCESS or SEARCH FAILED action
 * @function setSearch
 * @param {string} - search terms
 * @returns {function} - redux thunk function
 */

export const setSearch = (term) => {
    console.log(term);
    return ({
        type: TYPES.SET_SEARCH,
        payload: term
    });
};

/**
 * Return Redux Thunk function that conditionally 
 * dispatch SEARCH_SUCESS or SEARCH FAILED action
 * @function search
 * @param {string} - search terms
 * @returns {function} - redux thunk function
 */

export const search = (term) => {

    return async (dispatch) => {
        const response = await axios.get(`${BASEURL}/search`);
        if (response.status === 200) {
            dispatch({
                type: TYPES.SEARCH_SUCCESS,
                payload: {
                    success: true,
                    searchTerm: term,
                    data: response.data
                }
            });
        } else {
            dispatch({
                type: TYPES.SEARCH_FAIL,
                payload: {
                    success: false,
                    searchTerm: term,
                    data: []
                }
            });
        }

    };
};

export const fetchItem = (id) => {

    return async (dispatch) => {
        const response = await axios.get(`${BASEURL}/search`);
        if (response.status === 200) {

            const item = response.data.filter((object) => object.id == id)[0];
            // console.log(item);
            dispatch({
                type: TYPES.GET_ITEM_SUCCESS,
                payload: {
                    item: item,
                    success: true,
                }
            });
        } else {
            dispatch({
                type: TYPES.GET_ITEM_FAIL,
                payload: {
                    item: {},
                    success: false,
                }
            });
        }

    };
};