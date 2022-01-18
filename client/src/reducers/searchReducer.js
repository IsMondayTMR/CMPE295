import * as TYPES from "../const/reduxTypes";

const INITIAL_STATE = {
    success: null,
    searchTerm: null,
    data: []
};

const searchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPES.SEARCH_SUCCESS:
            return {
                ...state,
                success: action.payload.success,
                searchTerm: action.payload.searchTerm,
                data: action.payload.data
            };
        case TYPES.SEARCH_FAIL:
            return {
                ...state,
                success: action.payload.success,
                searchTerm: action.payload.searchTerm,
                data: action.payload.data
            };
        default:
            return state;
    }
};

export default searchReducer;