import { combineReducers } from 'redux'
import taskReducer from "./task/fetch/fetchReducer";
import userReducer from "./user/userReducer";
import removeTaskReducer from "./task/remove/removeReducer";

const rootReducer = combineReducers({
    task: taskReducer,
    removedTask: removeTaskReducer,
    currentUser: userReducer
});

export default rootReducer