import axios from 'axios'
import {
    OPTIMIZATION_BY_PROJECT_ID_FAILURE,
    OPTIMIZATION_BY_PROJECT_ID_REQUEST, OPTIMIZATION_BY_PROJECT_ID_SUCCESS,
    OPTIMIZE_PROJECT_FAILURE,
    OPTIMIZE_PROJECT_REQUEST,
    OPTIMIZE_PROJECT_SUCCESS
} from "./projectOptimizationTypes";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const optimizeProjectResources = ({projectId}) => {

    const token = localStorage.getItem('accessToken');

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    return (dispatch) => {
        dispatch(optimizeProjectRequest(projectId));

        axios
            .post(SERVER_URL + `/user/projects/${projectId}/optimize`)
            .then(response => {
                const projectOptimization = response.data;
                dispatch(optimizeProjectSuccess(projectOptimization))
            })
            .catch(error => {
                dispatch(optimizeProjectFailure(error.response.data))
            })
    }
};

const optimizeProjectRequest = () => {
    return {
        type: OPTIMIZE_PROJECT_REQUEST
    }
};

const optimizeProjectSuccess = optimizeProject => {
    return {
        type: OPTIMIZE_PROJECT_SUCCESS,
        payload: optimizeProject
    }
};

const optimizeProjectFailure = error => {
    return {
        type: OPTIMIZE_PROJECT_FAILURE,
        payload: error
    }
};

const fetchOptimizationByProjectId = ({projectId}) => {

    const token = localStorage.getItem('accessToken');

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    return (dispatch) => {
        dispatch(fetchOptimizationByProjectIdRequest(projectId));

        axios
            .get(SERVER_URL + `/user/projects/${projectId}/optimizations`)
            .then(response => {
                const projectOptimization = response.data;
                dispatch(fetchOptimizationByProjectIdSuccess(projectOptimization))
            })
            .catch(error => {
                dispatch(fetchOptimizationByProjectIdFailure(error.response.data))
            })
    }
};

const fetchOptimizationByProjectIdRequest = () => {
    return {
        type: OPTIMIZATION_BY_PROJECT_ID_REQUEST
    }
};

const fetchOptimizationByProjectIdSuccess = optimizeProject => {
    return {
        type: OPTIMIZATION_BY_PROJECT_ID_SUCCESS,
        payload: optimizeProject
    }
};

const fetchOptimizationByProjectIdFailure = error => {
    return {
        type: OPTIMIZATION_BY_PROJECT_ID_FAILURE,
        payload: error
    }
};

export {optimizeProjectResources, fetchOptimizationByProjectId}