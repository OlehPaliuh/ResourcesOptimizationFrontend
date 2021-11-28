import axios from 'axios'
import React from "react";
import {FETCH_CURRENT_USER_FAILURE, FETCH_CURRENT_USER_REQUEST, FETCH_CURRENT_USER_SUCCESS} from "./userInfoTypes";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const fetchCurrentUser = () => {
    const token = localStorage.getItem('accessToken');
    const userId = localStorage.getItem('currentUserId');

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    return async (dispatch) => {
        dispatch(fetchCurrentUserRequest(userId));
        await axios
            .get(SERVER_URL + `/user/account/${userId}`)
            .then(response => {
                const currentUserInfo = response.data;

                dispatch(fetchCurrentUserSuccess(currentUserInfo));
            })
            .catch(error => {
                localStorage.clear();
                dispatch(fetchCurrentUserFailure(error.response.data))
            });
    }
};

const fetchCurrentUserRequest = () => {
    return {
        type: FETCH_CURRENT_USER_REQUEST
    }
};

const fetchCurrentUserSuccess = currentUserInfo => {
    return {
        type: FETCH_CURRENT_USER_SUCCESS,
        payload: currentUserInfo
    }
};

const fetchCurrentUserFailure = error => {
    return {
        type: FETCH_CURRENT_USER_FAILURE,
        payload: error
    }
};

export {fetchCurrentUser}