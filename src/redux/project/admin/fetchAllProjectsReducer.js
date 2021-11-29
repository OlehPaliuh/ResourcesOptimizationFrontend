import {
    FETCH_ALL_PROJECTS_FAILURE,
    FETCH_ALL_PROJECTS_REQUEST,
    FETCH_ALL_PROJECTS_SUCCESS
} from "./fetchAllProjectsTypes";

const initialState = {loading: false, adminProjects: [], error: null};

const adminProjectsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_PROJECTS_REQUEST:
            return {
                ...state,
                loading: true,
                adminProjects: [],
                error: false
            };
        case FETCH_ALL_PROJECTS_SUCCESS:
            return {
                loading: false,
                adminProjects: action.payload,
                error: null
            };
        case FETCH_ALL_PROJECTS_FAILURE:
            return {
                loading: false,
                adminProjects: [],
                error: action.payload
            };
        default:
            return state
    }
};

export default adminProjectsReducer