import axios from 'axios'
import {
    FETCH_PROJECT_BY_ID_FAILURE,
    FETCH_PROJECT_BY_ID_REQUEST,
    FETCH_PROJECT_BY_ID_SUCCESS,
    UPDATE_PROJECT_FAILURE,
    UPDATE_PROJECT_REQUEST,
    UPDATE_PROJECT_SUCCESS
} from "./fetchProjectByIdTypes";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const fetchProjectById = ({projectId}) => {

    const token = localStorage.getItem('accessToken');

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    return (dispatch) => {
        dispatch(fetchProjectByIdRequest(projectId));

        axios
            .get(SERVER_URL + `/user/projects/${projectId}`)
            .then(response => {
                const project = response.data;
                project.tasks = project.tasks.map(item => ({...item, taskId: item.id}));
                dispatch(fetchProjectByIdSuccess(project))
            })
            .catch(error => {
                dispatch(fetchProjectByIdFailure(error.response.data))
            })
    }
};

const fetchProjectByIdRequest = () => {
    return {
        type: FETCH_PROJECT_BY_ID_REQUEST
    }
};

const fetchProjectByIdFailure = error => {
    return {
        type: FETCH_PROJECT_BY_ID_FAILURE,
        payload: error
    }
};

const fetchProjectByIdSuccess = project => {
    return {
        type: FETCH_PROJECT_BY_ID_SUCCESS,
        payload: project
    }
};

const updateProject = ({projectId, formData}) => {
    return (dispatch) => {
        dispatch(updateProjectRequest(formData));

        axios
            .put(SERVER_URL + `/user/projects/${projectId}`, formData)
            .then(response => {
                const project = response.data;
                dispatch(updateProjectSuccess(project))
            })
            .catch(error => {
                dispatch(updateProjectFailure(error.message))
            })
    }
};

const updateProjectRequest = () => {
    return {
        type: UPDATE_PROJECT_REQUEST
    }
};

const updateProjectSuccess = project => {
    return {
        type: UPDATE_PROJECT_SUCCESS,
        payload: project
    }
};

const updateProjectFailure = error => {
    return {
        type: UPDATE_PROJECT_FAILURE,
        payload: error
    }
};

export {fetchProjectById, updateProject}