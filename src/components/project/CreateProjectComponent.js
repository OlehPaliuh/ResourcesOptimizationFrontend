import React, {useEffect} from 'react'
import '@fontsource/roboto';
import Grid from "@mui/material/Grid";
import {Controller, useFieldArray, useForm} from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import {fetchTasks} from "../../redux";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import {submitProject} from "../../redux/project/fetch/fetchProjectAction";

const SelectTaskComponent = ({checked, index, task, appendTask, removeTask}) => {
    const handleCheckboxChanged = (event, value) => {
        if (value) {
            appendTask({...task, taskId: task.id});
        } else {
            removeTask(index);
        }
    };

    return (
        <MenuItem key={task.id} index={task.id} value={task}>
            <Checkbox checked={checked} onChange={handleCheckboxChanged}/>
            <ListItemText primary={task.name}/>
        </MenuItem>
    );
};

const CreateProjectComponent = () => {
    const dispatch = useDispatch();
    const {control, handleSubmit} = useForm();
    const {tasks: tasksForProject } = useSelector((state) => state.task);
    const {fields: tasks, append: appendTask, remove: removeTask} = useFieldArray({
        control,
        name: "tasks",
    });

    const onSubmit = formData => {
        dispatch(submitProject({formData}));
    };

    useEffect(() => {
        dispatch(fetchTasks())
    }, []);

    return (
        <Box margin={3}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={4}>
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
                            name="finalCost"
                            control={control}
                            defaultValue=""
                            rules={{required: 'Final Cost required'}}
                            render={({field: {onChange, value}, fieldState: {error}}) => (
                                <TextField
                                    label="Final Cost"
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                />
                            )}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        {tasksForProject && tasksForProject.map(task => <SelectTaskComponent
                            key={task.id}
                            index={tasks.findIndex(item => item.id === task.id)}
                            task={task}
                            control={control}
                            appendTask={appendTask}
                            removeTask={removeTask}
                            checked={tasks.some(item => item.id === task.id)}/>)}
                    </Grid>

                    <Grid item xs={2}>
                        <Button type="submit" variant="contained" color="primary">Submit</Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    )
};

export default CreateProjectComponent;