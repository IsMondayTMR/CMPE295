import * as TYPES from "../const/reduxTypes";

const INITIAL_STATE = {
    item: [],
    success: null,
};

const listingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPES.GET_LISTING_SUCCESS:
            return {
                ...state,
                item: action.payload,
                success: true
            };
        case TYPES.GET_LISTING_FAIL:
            return {
                ...state,
                item: null,
                success: false
            };
        default:
            return state;
    }
};

export default listingReducer;