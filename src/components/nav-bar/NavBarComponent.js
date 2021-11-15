import React from 'react'
import {Grid} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import '@fontsource/roboto';
import {useNavigate} from "react-router";
import Button from "@material-ui/core/Button";

const NavBarComponent = () => {

    const navigate = useNavigate();

    const logOut = () => {
        localStorage.clear();
        navigate("/login");
    };

    return (
        <Box margin={5}>
            <Grid container>
                <Grid item xs={4}>
                    <Button color="secondary" variant="outlined" onClick={logOut}>
                        Log Out
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default NavBarComponent;