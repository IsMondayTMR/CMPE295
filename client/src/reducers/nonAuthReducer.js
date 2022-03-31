import * as TYPES from "../const/reduxTypes";

const INITIAL_STATE = {
    user: {},
    success: null,
};

const nonAuthReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPES.GET_NON_AUTH_SUCCESS:
            return {
                ...state,
                user: action.payload,
                success: true,
            };
        case TYPES.GET_NON_AUTH_FAIL:
            return {
                ...state,
                item: null,
                success: false
            };
        default:
            return state;
    }
};

export default nonAuthReducer;