import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import registerReducer from "./registerReducer";
import searchReducer from "./searchReducer";
export default combineReducers({
    auth: authReducer,
    form: formReducer,
    register: registerReducer,
    search: searchReducer
});