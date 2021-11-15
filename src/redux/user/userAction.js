import axios from 'axios'
import {AUTHENTICATE_USER_FAILURE, AUTHENTICATE_USER_REQUEST, AUTHENTICATE_USER_SUCCESS} from "./userTypes";
import React from "react";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const authenticate = ({formData}) => {
    return (dispatch) => {
        dispatch(authenticateRequest(formData));
        axios
            .post(SERVER_URL + '/authenticate', formData, {headers: {authenticate: null}})
            .then(response => {
                const currentUser = response.data;

                console.log(currentUser);

                localStorage.setItem('accessToken', response.data.accessToken);
                localStorage.setItem('refreshToken', response.data.refreshToken);

                dispatch(authenticateSuccess(currentUser));
            })
            .catch(error => {
                localStorage.clear();
                dispatch(authenticateFailure(error.response.data))
            });
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


export {authenticate}