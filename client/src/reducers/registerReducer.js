import * as TYPES from "../const/reduxTypes";

const INITIAL_STATE = {
    registerStatus: null
};

const registerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPES.CREATE_SUCESS:
            return { registerStatus: action.payload };
        case TYPES.CREATE_FAIL:
            return { registerStatus: action.payload };
        default:
            return state;
    }
};

export default registerReducer;