import * as TYPES from "../const/reduxTypes";


const INITIAL_STATE = {
    matches: [],
    success: null,
    error: null,
};

const threeWayMatchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPES.GET_MATCH_SUCCESS:
            return {
                ...state,
                matches: action.payload.maches,
                success: true,
                error: null
            };

        case TYPES.CATEGORY_CHANEGD:
            return {
                ...state,
                matches: [],
                success: false,
                error: action.payload.error,
            };
        default:
            return state;
    }
};

export default threeWayMatchReducer;