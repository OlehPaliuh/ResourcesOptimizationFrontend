import {
    AUTHENTICATE_USER_FAILURE,
    AUTHENTICATE_USER_REQUEST,
    AUTHENTICATE_USER_SUCCESS, REGISTER_USER_FAILURE,
    REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS
} from "./userTypes";

const initialState = {loading: false, currentUser: null, error: null};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATE_USER_REQUEST:
            return {
                ...state,
                loading: true,
                currentUser: null,
                error: null
            };
        case AUTHENTICATE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                currentUser: action.payload,
                error: null
            };
        case AUTHENTICATE_USER_FAILURE:
            return {
                ...state,
                loading: true,
                currentUser: null,
                error: action.payload
            };
        case REGISTER_USER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null
            };
        case REGISTER_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state
    }
};

export default reducer