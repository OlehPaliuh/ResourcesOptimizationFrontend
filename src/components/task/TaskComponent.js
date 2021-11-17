import React, {useEffect} from 'react'
import {fetchTasks, submitTask} from "../../redux/task/fetch/fetchAction";
import {useDispatch, useSelector} from "react-redux";
import TaskItemComponent from "./TaskItemComponent";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {Controller, useForm} from "react-hook-form";
import TextField from "@material-ui/core/TextField";

const TaskComponent = () => {
    const dispatch = useDispatch();
    const {tasks, error, loading} = useSelector((state) => state.task);
    const {control, handleSubmit} = useForm();

    useEffect(() => {
        dispatch(fetchTasks())
    }, []);

    const deleteTaskFromArray = index => {
        tasks.splice(index, 1);
    };

    console.log('taskData ', tasks);

    const onSubmit = data => {
        const formData = {
            name: data.name,
            type: data.type,
            cost: data.cost
        };

        dispatch(submitTask({formData}));
    };

    return (
        <Box margin={2}>
            {loading ? (
                <Typography variant="subtitle2">Loading</Typography>
            ) : error ? (
                <Typography variant="subtitle2">{error}</Typography>
            ) : (
                <Box>
                    <Grid container>
                        <Grid item xs={4}>
                            <Typography variant="subtitle1">Task List</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="contained" color="primary" onClick={() => console.log('click')}>Create
                                Task </Button>
                        </Grid>
                    </Grid>
                    {tasks && tasks.length > 0 &&
                    tasks.map(task => <TaskItemComponent index={task.id} key={task.id} task={task} deleteTaskFromArray={deleteTaskFromArray}/>)
                    }
                </Box>
            )
            }

            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container>
                    <Grid item xs={3}>
                        <Controller
                            name="name"
                            control={control}
                            defaultValue=""
                            rules={{required: 'Name required'}}
                            render={({field: {onChange, value}, fieldState: {error}}) => (
                                <TextField
                                    label="Name"
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Controller
                            name="type"
                            control={control}
                            defaultValue=""
                            rules={{required: 'Type required'}}
                            render={({field: {onChange, value}, fieldState: {error}}) => (
                                <TextField
                                    label="Type"
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                />
                            )}
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <Controller
                            name="cost"
                            control={control}
                            defaultValue=""
                            rules={{required: 'Cost required'}}
                            render={({field: {onChange, value}, fieldState: {error}}) => (
                                <TextField
                                    label="Cost"
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Button type="submit" variant="contained" color="primary"> Submit</Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};
export default TaskComponent