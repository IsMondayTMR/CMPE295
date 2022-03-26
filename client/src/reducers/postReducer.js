import * as TYPES from "../const/reduxTypes";

const INITIAL_STATE = {
    message: "",
    status: null,
};

const postReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPES.POST_SUCCESS:
            return {
                massage: action.payload,
                status: true,
            };
        case TYPES.POST_FAIL:
            return {
                message: action.payload,
                success: false
            };
        default:
            return state;
    }
};

export default postReducer;