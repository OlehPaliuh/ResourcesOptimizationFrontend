import React from 'react'
import '@fontsource/roboto';
import {useDispatch, useSelector} from "react-redux";
import {removeTask} from "../../redux/task/remove/removeAction";
import {fetchTasks} from "../../redux/task/fetch/fetchAction";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {useNavigate} from 'react-router-dom';
import {prepareType} from "./TaskComponent";

const TaskItemComponent = ({task, index}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {error, loading} = useSelector((state) => state.removedTask);

    const deleteTask = async () => {
        await dispatch(removeTask(index));

        if (!loading && !error) {
            dispatch(fetchTasks());
        }
    };

    return (
        <Box margin={5}>
            <Grid container justifyContent="space-between">
                <Grid item xs={2}>
                    <Typography variant="subtitle2">Name</Typography>
                    <Typography> {task.name}</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="subtitle2">Type</Typography>
                    <Typography>{prepareType(task.type)}</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="subtitle2">Min Cost</Typography>
                    <Typography>{task.minimumImplementationCost}</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="subtitle2">Max Cost</Typography>
                    <Typography>{task.maximumImplementationCost}</Typography>
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

                <Grid item xs={1}>
                    <Button
                        fullWidth
                        variant="contained"
                        onClick={() => navigate(`/tasks/${index}`)}
                        color="primary">
                        Details
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
};

export default TaskItemComponent;