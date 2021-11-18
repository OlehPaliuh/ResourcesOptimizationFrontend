import { combineReducers } from 'redux'
import taskReducer from "./task/fetch/fetchReducer";
import userReducer from "./user/userReducer";
import removeTaskReducer from "./task/remove/removeReducer";
import projectReducer from "./project/fetch/fetchProjectReducer";

const rootReducer = combineReducers({
    task: taskReducer,
    removedTask: removeTaskReducer,
    currentUser: userReducer,
    projects: projectReducer
});

export default rootReducer