import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import registerReducer from "./registerReducer";
import searchReducer from "./searchReducer";
import itemReducer from "./itemReducer";
import userReducer from "./userReducer";
import postReducer from "./postReducer";
import listingReducer from "./listingReducer";
import recommendReducer from "./recommendReducer";
export default combineReducers({
    user: userReducer,
    auth: authReducer,
    form: formReducer,
    register: registerReducer,
    search: searchReducer,
    item: itemReducer,
    post: postReducer,
    listing: listingReducer,
    recommendation: recommendReducer,
});