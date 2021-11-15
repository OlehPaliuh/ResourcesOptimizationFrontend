import {
    AUTHENTICATE_USER_FAILURE,
    AUTHENTICATE_USER_REQUEST,
    AUTHENTICATE_USER_SUCCESS, REGISTER_USER_FAILURE,
    REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS
} from "./userTypes";

const initialState = {loading: false, currentUser: null, error: ''};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATE_USER_REQUEST:
            return {
                ...state,
                loading: true,
                currentUser: null
            };
        case AUTHENTICATE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                currentUser: action.payload,
                error: ''
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
                loading: true
            };
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: ''
            };
        case REGISTER_USER_FAILURE:
            return {
                ...state,
                loading: true,
                error: action.payload
            };
        default:
            return state
    }
};

export default reducer