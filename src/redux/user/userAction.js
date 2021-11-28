import axios from 'axios'
import {
    AUTHENTICATE_USER_FAILURE,
    AUTHENTICATE_USER_REQUEST,
    AUTHENTICATE_USER_SUCCESS,
    REGISTER_USER_FAILURE,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS
} from "./userTypes";
import React from "react";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const authenticate = ({formData}) => {
    return async (dispatch) => {
        dispatch(authenticateRequest(formData));
        await axios
            .post(SERVER_URL + '/authenticate', formData, {headers: {Authorization: null}})
            .then(response => {
                const currentUser = response.data;

                localStorage.setItem('accessToken', response.data.accessToken);
                localStorage.setItem('refreshToken', response.data.refreshToken);
                localStorage.setItem('currentUserId', response.data.id);
                localStorage.setItem('currentUserName', response.data.username);

                dispatch(authenticateSuccess(currentUser));
            })
            .catch(error => {
                localStorage.clear();
                dispatch(authenticateFailure(error.response.data))
            });
    }
};

const register = ({formData}) => {
    return async dispatch => {
        dispatch(registerRequest(formData));
        try {
            await axios
                .post(SERVER_URL + '/register', formData, {headers: {Authorization: null}})
                .then(response => {
                    dispatch(registerSuccess());
                })
                .catch(error => {
                    dispatch(registerFailure(error))
                });
        } catch
            (error) {
            dispatch(registerFailure(error))
        }
    }
};

const authenticateRequest = () => {
    return {
        type: AUTHENTICATE_USER_REQUEST
    }
};

const authenticateSuccess = currentUser => {
    return {
        type: AUTHENTICATE_USER_SUCCESS,
        payload: currentUser
    }
};

const authenticateFailure = error => {
    return {
        type: AUTHENTICATE_USER_FAILURE,
        payload: error
    }
};

const registerRequest = () => {
    return {
        type: REGISTER_USER_REQUEST
    }
};

const registerSuccess = () => {
    return {
        type: REGISTER_USER_SUCCESS,
    }
};

const registerFailure = error => {
    return {
        type: REGISTER_USER_FAILURE,
        payload: error
    }
};


export {authenticate, register}