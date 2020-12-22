import {combineReducers} from "redux";
import { userReducer } from "./user/userReducer";


let rootReducer = combineReducers({
    user : userReducer
});

export {rootReducer};