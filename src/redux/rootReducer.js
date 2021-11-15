import { combineReducers } from 'redux'
import taskReducer from "./task/taskReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
    task: taskReducer,
    currentUser: userReducer
});

export default rootReducer