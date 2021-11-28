import React, {useEffect} from 'react'
import '@fontsource/roboto';
import {useNavigate} from "react-router";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {useDispatch, useSelector} from "react-redux";
import {fetchCurrentUser} from "../../redux/user/info/userInfoAction";
import Alert from "@mui/material/Alert";

const ProfileComponent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {currentUserInfo, error, loading} = useSelector((state) => state.currentUserInfo);

    console.log('currentUserInfo ', currentUserInfo);

    useEffect(() => {
        dispatch(fetchCurrentUser())
    }, []);

    return (
        <Box padding={5}>

            <Grid container>
                <Grid item xs>
                    {error && !loading && <Alert severity="error">{error.message}</Alert>}
                </Grid>
            </Grid>

            {currentUserInfo && !loading &&
            <Grid>
                <Grid container>
                    <Grid item xs={3}>
                        <Typography variant="subtitle2">First Name</Typography>
                        <Typography> {currentUserInfo.firstName}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="subtitle2">Last Name</Typography>
                        <Typography> {currentUserInfo.lastName}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="subtitle2">Username</Typography>
                        <Typography> {currentUserInfo.username}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="subtitle2">Email</Typography>
                        <Typography> {currentUserInfo.email}</Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={3}>
                        <Typography variant="subtitle2">Phone Number</Typography>
                        <Typography> {currentUserInfo.phoneNumber}</Typography>
                    </Grid>
                </Grid>
            </Grid>
            }
        </Box>
    );
};

export default ProfileComponent;