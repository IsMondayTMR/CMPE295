import * as TYPES from "../const/reduxTypes";

const INITIAL_STATE = {
    item: [],
    success: null,
};

const favReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPES.GET_FAV_SUCCESS:
            return {
                ...state,
                item: action.payload,
                success: true
            };
        case TYPES.GET_FAV_FAIL:
            return {
                ...state,
                item: null,
                success: false
            };
        default:
            return state;
    }
};

export default favReducer;