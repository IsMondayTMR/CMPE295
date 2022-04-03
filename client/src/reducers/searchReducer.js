import * as TYPES from "../const/reduxTypes";

const INITIAL_STATE = {
    success: null,
    category: null,
    key: null,
    data: []
};

const searchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPES.SEARCH_SUCCESS:
            return {
                ...state,
                success: action.payload.true,
                category: action.payload.category,
                key: action.payload.key,
                data: action.payload.data
            };
        case TYPES.SEARCH_FAIL:
            return {
                ...state,
                success: false,
                category: action.payload.category,
                key: action.payload.key,
                data: action.payload.data,
            };
        default:
            return state;
    }
};

export default searchReducer;