import { combineReducers } from 'redux'
import taskReducer from "./task/fetch/fetchReducer";
import userReducer from "./user/userReducer";
import removeTaskReducer from "./task/remove/removeReducer";
import projectReducer from "./project/fetch/fetchProjectReducer";
import projectByIdReducer from "./project/fetchSingleProject/fetchProjectByIdReducer";

const rootReducer = combineReducers({
    task: taskReducer,
    removedTask: removeTaskReducer,
    currentUser: userReducer,
    projects: projectReducer,
    project: projectByIdReducer
});

export default rootReducer