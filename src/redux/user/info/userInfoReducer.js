import {FETCH_CURRENT_USER_FAILURE, FETCH_CURRENT_USER_REQUEST, FETCH_CURRENT_USER_SUCCESS} from "./userInfoTypes";

const initialState = {loading: false, currentUserInfo: null, error: null};
const userInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CURRENT_USER_REQUEST:
            return {
                ...state,
                loading: true,
                currentUserInfo: null,
                error: null
            };
        case FETCH_CURRENT_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                currentUserInfo: action.payload,
                error: null
            };
        case FETCH_CURRENT_USER_FAILURE:
            return {
                ...state,
                loading: true,
                currentUserInfo: null,
                error: action.payload
            };
        default:
            return state
    }
};

export default userInfoReducer