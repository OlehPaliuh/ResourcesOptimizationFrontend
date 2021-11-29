import axios from 'axios'
import {
    FETCH_ALL_PROJECTS_FAILURE,
    FETCH_ALL_PROJECTS_REQUEST,
    FETCH_ALL_PROJECTS_SUCCESS
} from "./fetchAllProjectsTypes";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const fetchAdminProjects = () => {

    const token = localStorage.getItem('accessToken');

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    return (dispatch) => {
        dispatch(fetchAllProjectsRequest());

        axios
            .get(SERVER_URL + '/admin/projects')
            .then(response => {
                const adminProjects = response.data;
                dispatch(fetchAllProjectsSuccess(adminProjects))
            })
            .catch(error => {
                dispatch(fetchAllProjectsFailure(error.message))
            })
    }
};

const fetchAllProjectsRequest = () => {
    return {
        type: FETCH_ALL_PROJECTS_REQUEST
    }
};

const fetchAllProjectsFailure = error => {
    return {
        type: FETCH_ALL_PROJECTS_FAILURE,
        payload: error
    }
};

const fetchAllProjectsSuccess = adminProjects => {
    return {
        type: FETCH_ALL_PROJECTS_SUCCESS,
        payload: adminProjects
    }
};

export {fetchAdminProjects}