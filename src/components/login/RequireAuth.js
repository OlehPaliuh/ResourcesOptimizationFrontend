import jwt_decode from "jwt-decode";
import {Navigate, useLocation} from "react-router-dom";
import React from "react";

const validateToken = (accessToken) => {
    let decodedToken = jwt_decode(accessToken);
    console.log("Decoded Token", decodedToken);
    let currentDate = new Date();

    if (decodedToken.exp * 1000 < currentDate.getTime()) {
        console.log("Token expired.");
    } else {
        console.log("Valid token");
        return true;
    }
};

const RequireAuth = ({children}) => {
    const accessToken = localStorage.getItem('accessToken')

    let location = useLocation();

    if (!accessToken || !validateToken(accessToken)) {
        return <Navigate to="/login" state={{from: location}}/>;
    } else {
        return children;
    }
};

export default RequireAuth;
