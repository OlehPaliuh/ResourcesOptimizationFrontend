import React from 'react'
import {Grid, Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import '@fontsource/roboto';

const TaskItemComponent = ({task}) => {

    return (
        <Box margin={5}>
            <Grid container>
                <Grid item xs={4}>
                    <Typography variant="subtitle2">Name</Typography>
                    <Typography> {task.type}</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="subtitle2">Type</Typography>
                    <Typography>{task.type}</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="subtitle2">Cost</Typography>
                    <Typography>{task.cost}</Typography>
                </Grid>
            </Grid>
        </Box>
    )
};

export default TaskItemComponent;