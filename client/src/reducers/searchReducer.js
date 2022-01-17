import * as TYPES from "../const/reduxTypes";

const INITIAL_STATE = {
    searchTerm: null,
    data: null
};

const searchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPES.SEARCH_SUCCESS:
            return {
                ...state,
                searchTerm: action.payload.searchTerm,
                data: action.payload.data
            };
        default:
            return state;
    }
};

export default searchReducer;