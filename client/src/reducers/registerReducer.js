import * as TYPES from "../const/reduxTypes";

const INITIAL_STATE = {
    status: null,
    message: null,
    exception: null,
};

const registerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPES.CREATE_SUCESS:
            return {
                status: action?.payload?.status,
                message: null,
                exception: null,
            };
        case TYPES.CREATE_FAIL:
            return {
                status: action?.payload?.status,
                message: action?.payload?.message,
                exception: action?.payload?.exception,
            };
        default:
            return state;
    }
};

export default registerReducer;