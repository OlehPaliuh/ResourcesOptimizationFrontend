import axios from 'axios'
import {FETCH_ALL_USERS_FAILURE, FETCH_ALL_USERS_REQUEST, FETCH_ALL_USERS_SUCCESS} from "./fetchAllUsersTypes";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const fetchAdminUsers = () => {

    const token = localStorage.getItem('accessToken');

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    return (dispatch) => {
        dispatch(fetchAllUsersRequest());

        axios
            .get(SERVER_URL + '/admin/users')
            .then(response => {
                const adminUsers = response.data;
                dispatch(fetchAllUsersSuccess(adminUsers))
            })
            .catch(error => {
                dispatch(fetchAllUsersFailure(error.message))
            })
    }
};

const fetchAllUsersRequest = () => {
    return {
        type: FETCH_ALL_USERS_REQUEST
    }
};

const fetchAllUsersFailure = error => {
    return {
        type: FETCH_ALL_USERS_FAILURE,
        payload: error
    }
};

const fetchAllUsersSuccess = adminUsers => {
    return {
        type: FETCH_ALL_USERS_SUCCESS,
        payload: adminUsers
    }
};

export {fetchAdminUsers}