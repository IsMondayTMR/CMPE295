import * as TYPES from "../const/reduxTypes";
import { BASEURL } from "../const/apis";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "../aws/UserPool";
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

        return await new Promise((resolve, reject) => {
            const user = new CognitoUser({
                Username: formValue.signInEmail,
                Pool: UserPool,
            });

            const authDetails = new AuthenticationDetails({
                Username: formValue.signInEmail,
                Password: formValue.signInPassword
            });

            user.authenticateUser(authDetails, {
                onSuccess: (data) => {
                    sessionStorage.setItem("userObject", user);
                    dispatch({
                        type: TYPES.SIGN_IN,
                        payload: {
                            user: user,
                            authType: "cognito",
                            authInstance: data
                        }
                    });

                    resolve(data);
                },
                onFailure: (err) => {
                    console.error("onFailure: ", err);
                    dispatch({
                        type: TYPES.SIGN_IN,
                        payload: {
                            user: null,
                            error: {
                                code: err.code,
                                message: err.message,
                                name: err.name
                            },
                            authType: null,
                            authInstance: null
                        }
                    });
                    reject(err);
                },
                newPasswordRequired: (data) => {
                    console.log("newPasswordRequired: ", data);
                    resolve(data);
                }
            });
        });

    };
};

/**
 * Returns Redux Thunk function that dispatches GET_SESSION action
 * @function signIn
 * @param {string} props - Email and Password.
 * @returns {function} - Redux Thunk function.
*/

export const getUser = () => {

    return async (dispatch) => {
        return await new Promise((resolve, reject) => {
            const user = UserPool.getCurrentUser();
            if (user) {
                user.getSession((err, session) => {
                    if (err) {
                        dispatch({
                            type: TYPES.GET_SESSION_FAIL,
                            payload: {
                                status: false,
                                session: null,
                                session_error: err,
                                user: null,
                            },
                        });
                        reject(err);
                    } else {

                        sessionStorage.setItem("session", JSON.stringify(session));
                        dispatch({
                            type: TYPES.GET_SESSION_SUCCESS,
                            payload: {
                                session,
                                session_error: null,
                            },
                        });

                        resolve(session);
                    }
                });

                user.getUserAttributes((err, userAttributes) => {
                    if (err) {
                        dispatch({
                            type: TYPES.GET_USER_FAIL,
                            payload: {
                                status: false,
                                user_error: err,
                                user: null,
                            },
                        });
                        reject(err);
                    } else {
                        sessionStorage.setItem("userInfo", JSON.stringify(userAttributes));
                        dispatch({
                            type: TYPES.GET_USER_SUCCESS,
                            payload: {
                                user: userAttributes,
                                user_error: null,
                            },
                        });

                        resolve(userAttributes);
                    }
                });

            } else {

                dispatch({
                    type: TYPES.GET_SESSION_FAIL,
                    payload: {
                        status: false,
                        session: null,
                        error: {
                            message: "no user exist",
                        },
                        user: null,
                    },
                });
                reject();
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
export const signOut = () => {
    return async (dispatch) => {

        const user = UserPool.getCurrentUser();

        if (user) {
            user.signOut();
            sessionStorage.removeItem("userObject");
            sessionStorage.removeItem("userInfo");
            sessionStorage.removeItem("session");
            dispatch({
                type: TYPES.SIGN_OUT,
                payload: {
                    status: false,
                    session: null,
                    error: null,
                    user: null,
                },
            });
        }
    };
};

/**
 * Returns Redux Thunk function that conditionaly 
 * dispatches CREATE_FAIL or CREATE_SUCESS action
 * @function createUser
 * @param {object} formValue - user infor.
 * @returns {function} - Redux Thunk function.
*/

export const createUser = (formValue, avatarUrl) => {
    return async (dispatch) => {
        if (!formValue) {
            dispatch({
                type: TYPES.CREATE_FAIL,
                payload: false
            });
        }
        const phone_number = "+1" + formValue?.phone_number;
        const attributes = [
            {
                Name: "name",
                Value: formValue?.name
            },
            {
                Name: "gender",
                Value: formValue?.gender
            },
            {
                Name: "phone_number",
                Value: phone_number
            },
            {
                Name: "address",
                Value: formValue?.street
            },
            {
                Name: "custom:city",
                Value: formValue?.city
            },
            {
                Name: "custom:state",
                Value: formValue?.state
            },
            {
                Name: "custom:avatar_url",
                Value: avatarUrl
            }
        ];


        UserPool.signUp(formValue.registerEmail, formValue.registerPassword, attributes, null, (error, res) => {
            if (error) {
                dispatch({
                    type: TYPES.CREATE_FAIL,
                    payload: {
                        status: false,
                        exception: error.name,
                        message: error.message,
                    }
                });
                return;
            }
            console.log(res);
            axios.post("https://api.chatengine.io/users/", {
                "username": formValue.username,
                "first_name": formValue?.name,
                "last_name": "La Morre",
                "email": formValue.registerEmail,
                "secret": formValue.registerEmail,
                "custom_json": JSON.stringify({ "avatar": avatarUrl }),
            }, {
                headers: { "PRIVATE-KEY": `${process.env.REACT_APP_CHAT_ENGIN_PRIVATE_KEY}` }
            }).then(res => {
                console.log(res);
            }).catch(error => {
                console.log(error);
                dispatch({
                    type: TYPES.CREATE_FAIL,
                    payload: {
                        status: false,
                        exception: "user create exception",
                        message: "chat engine user create failed",
                    }
                });
                return;
            });
        });

        dispatch({
            type: TYPES.CREATE_SUCESS,
            payload: {
                status: true,
                exception: null,
                message: null,
            }
        });
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