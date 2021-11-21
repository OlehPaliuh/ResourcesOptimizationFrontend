import {
    FETCH_PROJECT_BY_ID_FAILURE,
    FETCH_PROJECT_BY_ID_REQUEST,
    FETCH_PROJECT_BY_ID_SUCCESS,
    UPDATE_PROJECT_FAILURE,
    UPDATE_PROJECT_REQUEST,
    UPDATE_PROJECT_SUCCESS
} from "./fetchProjectByIdTypes";

const initialState = {loading: false, project: null, error: null};

const projectByIdReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PROJECT_BY_ID_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            };
        case FETCH_PROJECT_BY_ID_SUCCESS:
            return {
                loading: false,
                project: action.payload,
                error: null
            };
        case FETCH_PROJECT_BY_ID_FAILURE:
            return {
                loading: false,
                project: null,
                error: action.payload
            };
        case UPDATE_PROJECT_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            };
        case UPDATE_PROJECT_SUCCESS:
            return {
                loading: false,
                project: action.payload,
                error: null
            };
        case UPDATE_PROJECT_FAILURE:
            return {
                loading: false,
                project: null,
                error: action.payload
            };
        default:
            return state
    }
};

export default projectByIdReducer;