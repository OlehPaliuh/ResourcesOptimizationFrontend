import {
    OPTIMIZATION_BY_PROJECT_ID_FAILURE,
    OPTIMIZATION_BY_PROJECT_ID_REQUEST,
    OPTIMIZATION_BY_PROJECT_ID_SUCCESS,
    OPTIMIZE_PROJECT_FAILURE,
    OPTIMIZE_PROJECT_REQUEST,
    OPTIMIZE_PROJECT_SUCCESS
} from "./projectOptimizationTypes";

const initialState = {loading: false, projectOptimization: null, error: null};

const projectOptimizationReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPTIMIZE_PROJECT_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            };
        case OPTIMIZE_PROJECT_SUCCESS:
            return {
                loading: false,
                projectOptimization: action.payload,
                error: null
            };
        case OPTIMIZE_PROJECT_FAILURE:
            return {
                loading: false,
                projectOptimization: null,
                error: action.payload
            };
        case OPTIMIZATION_BY_PROJECT_ID_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            };
        case OPTIMIZATION_BY_PROJECT_ID_SUCCESS:
            return {
                loading: false,
                projectOptimization: action.payload,
                error: null
            };
        case OPTIMIZATION_BY_PROJECT_ID_FAILURE:
            return {
                loading: false,
                projectOptimization: null,
                error: action.payload
            };
        default:
            return state
    }
};

export default projectOptimizationReducer;