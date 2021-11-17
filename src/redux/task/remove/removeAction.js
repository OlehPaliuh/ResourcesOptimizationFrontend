import axios from 'axios'
import {REMOVE_TASK_FAILURE, REMOVE_TASK_REQUEST, REMOVE_TASK_SUCCESS} from "./removeTypes";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const removeTask = (index) => {
    return async (dispatch) => {
        dispatch(removeTaskRequest());

        await axios
            .delete(SERVER_URL + `/user/tasks/${index}`)
            .then(response => {
                dispatch(removeTaskSuccess())
            })
            .catch(error => {
                console.log('error.message ', error.message);
                dispatch(removeTaskFailure(error.message))
            })
    }
};

const removeTaskRequest = () => {
    return {
        type: REMOVE_TASK_REQUEST
    }
};

const removeTaskSuccess = () => {
    return {
        type: REMOVE_TASK_SUCCESS,
    }
};

const removeTaskFailure = error => {
    console.log('removeTaskFailure error ', error);
    return {
        type: REMOVE_TASK_FAILURE,
        payload: error
    }
};

export {removeTask}