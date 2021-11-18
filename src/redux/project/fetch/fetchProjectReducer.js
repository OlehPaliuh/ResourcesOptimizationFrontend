import {FETCH_PROJECT_FAILURE, FETCH_PROJECT_SUCCESS, FETCH_PROJECTS_REQUEST} from "./fetchProjectTypes";

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
        default:
            return state
    }
};

export default projectReducer