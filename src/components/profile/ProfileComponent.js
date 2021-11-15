import React from 'react'
import {Grid, Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import '@fontsource/roboto';
import {useNavigate} from "react-router";
import Button from "@material-ui/core/Button";

const ProfileComponent = () => {
    const navigate = useNavigate();

    return (
        <Box margin={5}>
            <Grid container>
                <Grid item xs={3}>
                    <Typography variant="subtitle2">Home</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Button onClick={() => navigate("/dashboard")}>
                        Tasks
                    </Button>
                </Grid>

            </Grid>
        </Box>
    );
};

export default ProfileComponent;