// import * as TYPES from "../const/reduxTypes";
import axios from "axios";
import { TWO_WAY_INVITATION, GET_ALL_INVITATIOSN_BY_ID, GET_THREE_WAY_MATCH, RESPOND_INVITATION } from "../const/apis";
import * as TYPES from "../const/reduxTypes";

export const send_2_way_invitation = (requestor_id, receiver_id, item_to_receive, item_to_provide) => {
    return async () => {
        return new Promise((resolve, reject) => {
            axios.post(TWO_WAY_INVITATION, {
                "requestor_id": requestor_id,
                "receiver_id": receiver_id,
                "item_to_receive": item_to_receive,
                "item_to_provide": item_to_provide
            })
                .then((res) => {
                    console.log(res);
                    resolve(res);
                })
                .catch(err => {
                    console.log(err);
                    reject(err);
                });
        });
    };

};

export const get_invitation_by_user = (user_id) => {
    return async (dispatch) => {

        let response = await axios.get(`${GET_ALL_INVITATIOSN_BY_ID}user_id=${user_id}`);

        console.log(response);
        if (response?.errorMessage != null || response?.data?.message != null) {
            let errorMessage;

            if (response?.data?.errorMessage != null) {
                errorMessage = response?.data?.errorMessage;
            }

            if (response?.data?.message != null) {
                errorMessage = response?.data?.message;
            }
            dispatch({
                type: TYPES.GET_INVITATION_FAIL,
                payload: {
                    error: errorMessage,
                }
            });
        } else if (response.status == 200) {
            dispatch({
                type: TYPES.GET_INVITATION_SUCCESS,
                payload: {
                    data: response.data,
                }
            });
        }
    };
};
// export const send_3_way_invitation = (user_a, user_b, user_c, item_a, item_b, item_c) => {
//     return new Promise((resolve, reject) => {
//         axios.post(THREE_WAY_INVITATION, {
//             "user_a": user_a,
//             "user_b": user_b,
//             "user_c": user_c,
//             "item_a": item_a,
//             "item_b": item_b,
//             "item_c": item_c
//         })
//             .then((res) => {
//                 resolve(res);
//             })
//             .catch(err => {
//                 reject(err);
//             });
//     });
// }

// export const response_to_invitation = (user_a, user_b, user_c, item_a, item_b, item_c) => {
//     return new Promise((resolve, reject) => {
//         axios.post(RESPOND_TO_INVITATION, {
//             "invitation_id": "xxx",
//             "response": "accept or reject 选一个"
//         })
//             .then((res) => {
//                 resolve(res);
//             })
//             .catch(err => {
//                 reject(err);
//             });
//     });
// }

export const three_way_match = (user_id, item_id) => {

    return async (dispatch) => {
        let response = await axios.get(`${GET_THREE_WAY_MATCH}user_id=${user_id}&post_id=${item_id}`);

        console.log(dispatch);
        console.log(response);
    };
};

export const respond_invitation = (invitation_id, action) => {

    return async (dispatch) => {
        console.log(invitation_id);
        console.log(action);
        let response = await axios.post(RESPOND_INVITATION, {
            "invitation_id": invitation_id,
            "response": action
        });
        console.log(dispatch);
        console.log(response);

    };
};