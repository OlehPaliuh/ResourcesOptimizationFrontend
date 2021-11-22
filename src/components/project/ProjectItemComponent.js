import React from 'react'
import '@fontsource/roboto';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const ProjectItemComponent = ({project}) => {
    return (
        <Box margin={5}>
            <Grid container>
                <Grid item xs={3}>
                    <Typography variant="subtitle2">Name</Typography>
                    <Typography> {project.name}</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="subtitle2">Final Cost</Typography>
                    <Typography>{project.finalCost}</Typography>
                </Grid>
            </Grid>
        </Box>
    )
};

export default ProjectItemComponent;