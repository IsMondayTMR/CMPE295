import * as TYPES from "../const/reduxTypes";

const INITIAL_STATE = {
    item: {},
    success: null,
};

const itemReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPES.GET_ITEM_SUCCESS:
            return {
                ...state,
                item: action.payload.item,
                success: action.payload.success
            };
        case TYPES.GET_ITEM_FAIL:
            return {
                ...state,
                item: null,
                success: false
            };
        default:
            return state;
    }
};

export default itemReducer;