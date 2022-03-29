import * as TYPES from "../const/reduxTypes";
const INITIAL_STATE = {
    success: null,
    items: [],
};


const recommendReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPES.GET_RECOM_SUCCESS:
            return {
                success: true,
                items: action.payload,
            };

        case TYPES.GET_RECOM_FAIL:
            return {
                success: false,
                items: action.payload,
            };

        default:
            return state;
    }
};

export default recommendReducer;