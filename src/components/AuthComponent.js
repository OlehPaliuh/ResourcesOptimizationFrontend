import RequireAuth from "./login/RequireAuth";
import MenuAppBar from "./nav-bar/MenuAppBar";
import Grid from "@mui/material/Grid";
import React from "react";
import MenuComponent from "./nav-bar/MenuComponent";

const AuthComponent = ({childComponent}) => {
    return <RequireAuth>
        <MenuAppBar/>
        <Grid container>
            <Grid item xs={2}>
                <MenuComponent/>
            </Grid>
            <Grid item xs={10}>
                {childComponent}
            </Grid>
        </Grid>
    </RequireAuth>
};

export default AuthComponent;