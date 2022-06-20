import { combineReducers } from "redux";
import employee from "./employee";
import user from "./user";

const rootReducers = combineReducers({
    employee,
    user
})

export default rootReducers;