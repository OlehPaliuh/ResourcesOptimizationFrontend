import React from 'react'
import '@fontsource/roboto';
import {useNavigate} from "react-router";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

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