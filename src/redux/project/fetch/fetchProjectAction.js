import axios from 'axios'
import {FETCH_PROJECT_FAILURE, FETCH_PROJECT_SUCCESS, FETCH_PROJECTS_REQUEST} from "./fetchProjectTypes";

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

export {fetchProjects, fetchProjectsRequest, fetchProjectsFailure, fetchProjectsSuccess}