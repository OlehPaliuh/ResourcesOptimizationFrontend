import React from 'react'
import '@fontsource/roboto';
import {useDispatch, useSelector} from "react-redux";
import {removeTask} from "../../redux/task/remove/removeAction";
import {fetchTasks} from "../../redux/task/fetch/fetchAction";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const TaskItemComponent = ({task, index}) => {
    const dispatch = useDispatch();
    const {error, loading} = useSelector((state) => state.removedTask);

    const deleteTask = async () => {
        await dispatch(removeTask(index));

        if (!loading && !error) {
            dispatch(fetchTasks());
        }
    };

    return (
        <Box margin={5}>
            <Grid container>
                <Grid item xs={3}>
                    <Typography variant="subtitle2">Name</Typography>
                    <Typography> {task.name}</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="subtitle2">Type</Typography>
                    <Typography>{task.type}</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="subtitle2">Cost</Typography>
                    <Typography>{task.cost}</Typography>
                </Grid>
                <Grid item xs={1}>
                    <Button
                        fullWidth
                        variant="contained"
                        onClick={deleteTask}
                        color="secondary">
                        Remove
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
};

export default TaskItemComponent;