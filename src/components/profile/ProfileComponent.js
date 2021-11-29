import React, {useEffect} from 'react'
import '@fontsource/roboto';
import {useNavigate} from "react-router";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {useDispatch, useSelector} from "react-redux";
import {fetchCurrentUser} from "../../redux/user/info/userInfoAction";
import Alert from "@mui/material/Alert";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";

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
                <Paper elevation={3}>
                    <Grid padding={4}>
                        <Avatar />
                    </Grid>
                    <Grid container padding={4}>
                        <Grid item xs={4}>
                            <Typography variant="subtitle2">First Name</Typography>
                            <Typography> {currentUserInfo.firstName}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="subtitle2">Last Name</Typography>
                            <Typography> {currentUserInfo.lastName}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="subtitle2">Username</Typography>
                            <Typography> {currentUserInfo.username}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container padding={4}>
                        <Grid item xs={4}>
                            <Typography variant="subtitle2">Email</Typography>
                            <Typography> {currentUserInfo.email}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="subtitle2">Phone Number</Typography>
                            <Typography> {currentUserInfo.phoneNumber}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="subtitle2">Role</Typography>
                            <Typography> {currentUserInfo.role}</Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            }
        </Box>
    );
};

export default ProfileComponent;