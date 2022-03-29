import * as TYPES from "../const/reduxTypes";
import { BASEURL, POST, RECOMMENDATION } from "../const/apis";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "../aws/UserPool";
import axios from "axios";
import data from "../const/cardData";

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

                        const user = formatUserAttributes(userAttributes);

                        sessionStorage.setItem("userInfo", JSON.stringify(user));
                        dispatch({
                            type: TYPES.GET_USER_SUCCESS,
                            payload: {
                                user: user,
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
 * @param {Object}formValue -user information
 * @param {String}imageUrl -string that point to user image
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
                Name: "preferred_username",
                Value: formValue?.username
            },
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
                Name: "custom:zipcode",
                Value: formValue?.zip
            },
            {
                Name: "custom:avatar_url",
                Value: avatarUrl
            }
        ];


        UserPool.signUp(formValue.registerEmail, formValue.registerPassword, attributes, null, (error) => {
            if (error) {
                console.log(error);
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
 * Returns Redux Thunk function that conditionaly 
 * dispatches UPDATE_FAIL or UPDATE_SUCCESS action
 * @function updateImage
 * @param {Object} formValue - an object that stored user information that need to be updated
 * @param {String} ImageUrl - image url that already upated to firebase.
 * @param {String} email - email that used to find correct user in the chat engine.
 * @returns {function} - Redux Thunk function.
*/

export const update = (formValue, ImageUrl, email) => {
    return async (dispatch) => {
        var chatUsers = await axios.get("https://api.chatengine.io/users/", {
            headers: { "PRIVATE-KEY": `${process.env.REACT_APP_CHAT_ENGIN_PRIVATE_KEY}` }
        });
        var updateAccountID = chatUsers.data?.filter(index => index.email == email);
        var extPhoneNumber = "+1" + formValue?.phone_number;
        const attributes = [
            {
                Name: "phone_number",
                Value: extPhoneNumber
            },
            {
                Name: "preferred_username",
                Value: formValue?.username
            },
            {
                Name: "custom:avatar_url",
                Value: ImageUrl
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
        ];
        return await new Promise((resolve, reject) => {
            const user = UserPool.getCurrentUser();

            if (!user || !updateAccountID) {
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

            user.getSession((err) => {
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

                    user.updateAttributes(attributes, (err, res) => {
                        if (err) {
                            console.log(err);
                            dispatch({
                                type: TYPES.UPDATE_FAIL,
                                payload: {
                                    status: false,
                                    exception: err.name,
                                    message: err.message,
                                }
                            });
                            return;
                        }
                        console.log(res);
                    }, null);

                    axios.patch(`https://api.chatengine.io/users/${updateAccountID[0]?.id}`, {
                        "first_name": "test",
                        "custom_json": JSON.stringify({ "avatar": ImageUrl }),
                    }, {
                        headers: { "PRIVATE-KEY": `${process.env.REACT_APP_CHAT_ENGIN_PRIVATE_KEY}` }
                    }).then(() => {
                        user.getUserAttributes((err, userAttributes) => {
                            if (err) {
                                dispatch({
                                    type: TYPES.UPDATE_FAIL,
                                    payload: {
                                        status: false,
                                        user_error: err,
                                        user: null,
                                    },
                                });
                                reject(err);
                            } else {
                                const user = formatUserAttributes(userAttributes);
                                sessionStorage.setItem("userInfo", JSON.stringify(user));
                                dispatch({
                                    type: TYPES.UPDATE_SUCESS,
                                    payload: {
                                        user: user,
                                        user_error: null,
                                    },
                                });
                                resolve(userAttributes);
                            }
                        });
                    }).catch(err => {
                        dispatch({
                            type: TYPES.UPDATE_FAIL,
                            payload: {
                                status: false,
                                user_error: err,
                                user: null,
                            },
                        });
                        reject(err);
                    });


                }
            });
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
        const response = await axios.get(`${POST}/${id}`);
        if (response.status === 200 && data?.errorMessage == null) {

            console.log(response);

            dispatch({
                type: TYPES.GET_ITEM_SUCCESS,
                payload: {
                    item: response.data,
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

/**
 * Return Redux Thunk function that conditionally 
 * dispatch SEARCH_SUCESS or SEARCH FAILED action
 * @function postNewItem
 * @param {Array} imageUrls - urls that images stored in the firebase
 * @param {Object} formValues - an object that contains item information
 * @returns {function} - redux thunk function
 */

export const postNewItem = (imageUrls, formValues, user) => {

    return async (dispatch) => {
        return new Promise((resolve, reject) => {
            const data = {
                "description": formValues.description,
                "email": user.email,
                "sub": user.sub,
                "donate": formValues.donate == "Yes" ? true : false,
                "username": user.username,
                "title": formValues.title,
                "category": formValues.category,
                "subcategory": formValues.subcategory,
                "brand": formValues.brand,
                "color": formValues.color,
                "material": formValues.material,
                "worncondition": formValues.worncondition,
                "urls": imageUrls,
            };
            axios.post(POST, data).then((response) => {
                if (response.status == 200 && response?.data.message === "post successfully created.") {
                    dispatch({
                        type: TYPES.POST_SUCCESS,
                        payload: response.data.message
                    });
                    resolve({
                        status: response.status,
                        message: response.data.message
                    });
                } else {
                    dispatch({
                        type: TYPES.POST_FAIL,
                        payload: response.data.message
                    });
                    reject({
                        error: response.data.message
                    });
                }
            });
        });
    };
};


/**
 * Return Redux Thunk function that conditionally 
 * dispatch GET_LISTING_FAIL or GET_LISTING_SUCCESS action
 * @function getListing
 * @param {String} sub - user id used for get all items belong that user
 * @returns {function} - redux thunk function
 */

export const getListing = (sub) => {
    return async (dispatch) => {
        return new Promise((resolve, reject) => {
            axios.get(`${POST}/?user_id=${sub}`).then((response) => {
                if (response.status == 200 && response?.data?.length >= 0) {
                    dispatch({
                        type: TYPES.GET_LISTING_SUCCESS,
                        payload: response.data
                    });
                    resolve({
                        status: true,
                    });
                } else {
                    dispatch({
                        type: TYPES.GET_LISTING_FAIL,
                        payload: response.data.errorMessage
                    });
                    reject({
                    });
                }
            });
        });
    };
};

/**
 * Return Redux Thunk function that conditionally 
 * dispatch GET_LISTING_FAIL or GET_LISTING_SUCCESS action
 * @function updateItem
 * @param {object} formValues - information need to be updated
 * @returns {function} - redux thunk function
 */
export const updateItem = (formValues) => {
    console.log(formValues);
};

/**
 * Return Redux Thunk function that conditionally 
 * dispatch GET_RECOM_FAIL or GET_RECOM_SUCCESS action
 * @function getRecommendation
 * @returns {function} - redux thunk function
 */

export const getRecommendation = () => {
    return async (dispatch) => {
        let { data } = await axios.get(RECOMMENDATION);

        if (data && data?.statusCode == 200) {

            dispatch({
                type: TYPES.GET_RECOM_SUCCESS,
                payload: data.body
            });
        } else {
            dispatch({
                type: TYPES.GET_RECOM_FAIL,
                payload: []
            });
        }
    };
};
// helper function
const formatUserAttributes = (userAttributes) => {
    let sub, address, email_verified, gender, phone_number_verified, preferred_username,
        state, city, zipcode, name, phone_number, email, avatar_url;
    userAttributes.forEach(element => {
        if (element.Name == "sub") sub = element.Value;
        if (element.Name == "address") address = element.Value;
        if (element.Name == "email_verified") email_verified = element.Value;
        if (element.Name == "gender") gender = element.Value;
        if (element.Name == "phone_number_verified") phone_number_verified = element.Value;
        if (element.Name == "preferred_username") preferred_username = element.Value;
        if (element.Name == "custom:state") state = element.Value;
        if (element.Name == "custom:city") city = element.Value;
        if (element.Name == "custom:zipcode") zipcode = element.Value;
        if (element.Name == "name") name = element.Value;
        if (element.Name == "phone_number") phone_number = element.Value.substring(2);
        if (element.Name == "email") email = element.Value;
        if (element.Name == "custom:avatar_url") avatar_url = element.Value;
    });
    const user = {
        sub,
        address,
        email_verified,
        gender,
        phone_number_verified,
        preferred_username,
        state,
        city,
        zipcode,
        name,
        phone_number,
        email,
        avatar_url,
    };
    return user;
};