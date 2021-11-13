import {
    FETCH_TASKS_FAILURE,
    FETCH_TASKS_REQUEST,
    FETCH_TASKS_SUCCESS, SUBMIT_TASK_FAILURE,
    SUBMIT_TASK_REQUEST,
    SUBMIT_TASK_SUCCESS
} from "./taskTypes";

const initialState = {loading: false, tasks: [], error: ''};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TASKS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case SUBMIT_TASK_REQUEST:
            return {
                ...state,
                loading: true
            };
        case SUBMIT_TASK_SUCCESS:
            return {
                loading: false,
                tasks: [ ...state.tasks, action.payload ],
                error: ''
            };
        case SUBMIT_TASK_FAILURE:
            return {
                ...state,
                loading: true,
                error: action.payload
            };
        case FETCH_TASKS_SUCCESS:
            return {
                loading: false,
                tasks: action.payload,
                error: ''
            };
        case FETCH_TASKS_FAILURE:
            return {
                loading: false,
                tasks: [],
                error: action.payload
            };
        default:
            return state
    }
};

export default reducer