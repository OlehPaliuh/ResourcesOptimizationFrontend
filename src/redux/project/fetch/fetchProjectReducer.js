import {
    FETCH_PROJECT_FAILURE,
    FETCH_PROJECT_SUCCESS,
    FETCH_PROJECTS_REQUEST,
    SUBMIT_PROJECT_FAILURE,
    SUBMIT_PROJECT_REQUEST,
    SUBMIT_PROJECT_SUCCESS
} from "./fetchProjectTypes";

const initialState = {loading: false, projects: [], error: null};

const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PROJECTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            };
        case FETCH_PROJECT_SUCCESS:
            return {
                loading: false,
                projects: action.payload,
                error: null
            };
        case FETCH_PROJECT_FAILURE:
            return {
                loading: false,
                projects: [],
                error: action.payload
            };
        case SUBMIT_PROJECT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case SUBMIT_PROJECT_SUCCESS:
            return {
                loading: false,
                projects: [...state.projects, action.payload],
                error: null
            };
        case SUBMIT_PROJECT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state
    }
};

export default projectReducer