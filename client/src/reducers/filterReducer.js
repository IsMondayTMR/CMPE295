import * as TYPES from "../const/reduxTypes";


const INITIAL_STATE = {
    category: null,
    subcategory: null,
};

const filterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPES.BOTH_CHANGED:
            return {
                ...state,
                category: action.payload.category,
                subcategory: action.payload.subcategory,
            };

        case TYPES.CATEGORY_CHANEGD:
            return {
                ...state,
                category: action.payload.category,
                subcategory: null,
            };

        case TYPES.SUBCATEG_CHANGED:
            return {
                ...state,
                category: action.payload.category,
                subcategory: action.payload.subcategory,
            };
        default:
            return state;
    }
};

export default filterReducer;