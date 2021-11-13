import axios from 'axios'
import {
    FETCH_TASKS_FAILURE,
    FETCH_TASKS_REQUEST,
    FETCH_TASKS_SUCCESS, SUBMIT_TASK_FAILURE,
    SUBMIT_TASK_REQUEST,
    SUBMIT_TASK_SUCCESS
} from "./taskTypes";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const fetchTasks = () => {
    return (dispatch) => {
        dispatch(fetchTasksRequest());
        axios
            .get(SERVER_URL + '/tasks')
            .then(response => {
                const tasks = response.data;
                dispatch(fetchTasksSuccess(tasks))
            })
            .catch(error => {
                dispatch(fetchTasksFailure(error.message))
            })
    }
};

const submitTask = ({formData}) => {
    return (dispatch) => {
        dispatch(submitTaskRequest(formData));
        axios
            .post(SERVER_URL + '/tasks', formData)
            .then(response => {
                const tasks = response.data;
                dispatch(submitTaskSuccess(tasks))
            })
            .catch(error => {
                dispatch(submitTaskFailure(error.message))
            })
    }
};

const fetchTasksRequest = () => {
    return {
        type: FETCH_TASKS_REQUEST
    }
};

const submitTaskRequest = () => {
    return {
        type: SUBMIT_TASK_REQUEST
    }
};

const fetchTasksSuccess = tasks => {
    return {
        type: FETCH_TASKS_SUCCESS,
        payload: tasks
    }
};

const submitTaskSuccess = tasks => {
    return {
        type: SUBMIT_TASK_SUCCESS,
        payload: tasks
    }
};

const submitTaskFailure = error => {
    return {
        type: SUBMIT_TASK_FAILURE,
        payload: error
    }
};


const fetchTasksFailure = error => {
    return {
        type: FETCH_TASKS_FAILURE,
        payload: error
    }
};

export {fetchTasks, fetchTasksFailure, fetchTasksSuccess, fetchTasksRequest, submitTask}