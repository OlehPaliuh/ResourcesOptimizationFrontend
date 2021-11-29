import {FETCH_ALL_USERS_FAILURE, FETCH_ALL_USERS_REQUEST, FETCH_ALL_USERS_SUCCESS} from "./fetchAllUsersTypes";

const initialState = {loading: false, adminUsers: [], error: null};

const adminUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_USERS_REQUEST:
            return {
                ...state,
                loading: true,
                adminUsers: [],
                error: false
            };
        case FETCH_ALL_USERS_SUCCESS:
            return {
                loading: false,
                adminUsers: action.payload,
                error: null
            };
        case FETCH_ALL_USERS_FAILURE:
            return {
                loading: false,
                adminUsers: [],
                error: action.payload
            };
        default:
            return state
    }
};

export default adminUsersReducer