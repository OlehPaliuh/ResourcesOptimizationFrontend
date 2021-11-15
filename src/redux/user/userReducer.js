import {AUTHENTICATE_USER_FAILURE, AUTHENTICATE_USER_REQUEST, AUTHENTICATE_USER_SUCCESS} from "./userTypes";

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
        default:
            return state
    }
};

export default reducer