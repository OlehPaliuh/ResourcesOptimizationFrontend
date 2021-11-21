import axios from 'axios'
import {
    FETCH_TASKS_FAILURE,
    FETCH_TASKS_REQUEST,
    FETCH_TASKS_SUCCESS,
    SUBMIT_TASK_FAILURE,
    SUBMIT_TASK_REQUEST,
    SUBMIT_TASK_SUCCESS
} from "./fetchTypes";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const fetchTasks = () => {

    const token = localStorage.getItem('accessToken');

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    return (dispatch) => {
        dispatch(fetchTasksRequest());

        axios
            .get(SERVER_URL + '/user/tasks')
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

        console.log('submitTask formData ', formData);
        dispatch(submitTaskRequest(formData));

        axios
            .post(SERVER_URL + '/user/tasks', formData)
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

const fetchTasksFailure = error => {
    return {
        type: FETCH_TASKS_FAILURE,
        payload: error
    }
};

const fetchTasksSuccess = tasks => {
    return {
        type: FETCH_TASKS_SUCCESS,
        payload: tasks
    }
};

const submitTaskRequest = () => {
    return {
        type: SUBMIT_TASK_REQUEST
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

export {fetchTasks, fetchTasksFailure, fetchTasksSuccess, fetchTasksRequest, submitTask}