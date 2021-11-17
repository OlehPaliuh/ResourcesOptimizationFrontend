import {REMOVE_TASK_FAILURE, REMOVE_TASK_REQUEST, REMOVE_TASK_SUCCESS,} from "./removeTypes";

const initialState = {loading: false, error: null};

const removeTaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case REMOVE_TASK_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case REMOVE_TASK_SUCCESS:
            return {
                loading: false,
                error: null,
            };
        case REMOVE_TASK_FAILURE:
            console.log('REMOVE_TASK_FAILURE error', action.payload);
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state
    }
};

export default removeTaskReducer