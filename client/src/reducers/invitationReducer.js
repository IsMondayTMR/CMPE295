import * as TYPES from "../const/reduxTypes";


const INITIAL_STATE = {
    invitations: [],
    error: null,
    success: null
};

const invitationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPES.GET_INVITATION_SUCCESS:
            return {
                ...state,
                invitations: action.payload.data,
                error: null,
                success: true
            };
        case TYPES.GET_INVITATION_FAIL:
            return {
                ...state,
                invitations: [],
                error: action.payload.error,
                success: false
            };

        default:
            return state;
    }
};

export default invitationReducer;