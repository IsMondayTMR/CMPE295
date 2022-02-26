import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import registerReducer from "./registerReducer";
import searchReducer from "./searchReducer";
import itemReducer from "./itemReducer";
import userReducer from "./userReducer";
export default combineReducers({
    user: userReducer,
    auth: authReducer,
    form: formReducer,
    register: registerReducer,
    search: searchReducer,
    item: itemReducer
});