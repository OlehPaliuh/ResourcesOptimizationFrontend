import axios from 'axios'
import {
    FETCH_PROJECT_FAILURE,
    FETCH_PROJECT_SUCCESS,
    FETCH_PROJECTS_REQUEST, SUBMIT_PROJECT_FAILURE,
    SUBMIT_PROJECT_REQUEST, SUBMIT_PROJECT_SUCCESS
} from "./fetchProjectTypes";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const fetchProjects = () => {

    const token = localStorage.getItem('accessToken');

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    return (dispatch) => {
        dispatch(fetchProjectsRequest());

        axios
            .get(SERVER_URL + '/user/projects')
            .then(response => {
                const projects = response.data;
                dispatch(fetchProjectsSuccess(projects))
            })
            .catch(error => {
                dispatch(fetchProjectsFailure(error.message))
            })
    }
};

const fetchProjectsRequest = () => {
    return {
        type: FETCH_PROJECTS_REQUEST
    }
};

const fetchProjectsFailure = error => {
    return {
        type: FETCH_PROJECT_FAILURE,
        payload: error
    }
};

const fetchProjectsSuccess = projects => {
    return {
        type: FETCH_PROJECT_SUCCESS,
        payload: projects
    }
};

const submitProject = ({formData}) => {
    return (dispatch) => {
        dispatch(submitTaskRequest(formData));

        axios
            .post(SERVER_URL + '/user/projects', formData)
            .then(response => {
                const project = response.data;
                dispatch(submitTaskSuccess(project))
            })
            .catch(error => {
                dispatch(submitTaskFailure(error.message))
            })
    }
};

const submitTaskRequest = () => {
    return {
        type: SUBMIT_PROJECT_REQUEST
    }
};

const submitTaskSuccess = project => {
    return {
        type: SUBMIT_PROJECT_SUCCESS,
        payload: project
    }
};

const submitTaskFailure = error => {
    return {
        type: SUBMIT_PROJECT_FAILURE,
        payload: error
    }
};

export {fetchProjects, fetchProjectsRequest, fetchProjectsFailure, fetchProjectsSuccess, submitProject}