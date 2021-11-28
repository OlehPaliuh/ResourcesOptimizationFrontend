import React, {useEffect, useState} from 'react'
import {fetchTasks, submitTask} from "../../redux/task/fetch/fetchAction";
import {useDispatch, useSelector} from "react-redux";
import TaskItemComponent from "./TaskItemComponent";
import {Controller, useForm} from "react-hook-form";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import makeStyles from "@mui/styles/makeStyles";
import {fetchProjects} from "../../redux/project/fetch/fetchProjectAction";

const phaseTypes = [
    'ANALYSIS',
    'DESIGN',
    'DEVELOPMENT',
    'TESTING',
    'DEPLOYMENT',
    'MAINTENANCE'
];

const prepareType = (s) => {
    if (typeof s !== 'string') return '';
    s = s.toLowerCase();
    return s.charAt(0).toUpperCase() + s.slice(1)
};

const useStyles = makeStyles(() => ({
    formControl: {
        minWidth: 120,
    },
}));

const TaskComponent = () => {
    const dispatch = useDispatch();
    const {tasks, error, loading} = useSelector((state) => state.task);
    const {control, handleSubmit} = useForm();
    const [isCreateForm, setIsCreateForm] = useState(false);

    useEffect(() => {
        dispatch(fetchProjects())
    }, []);

    const handleCreateTaskClicked = () => {
        setIsCreateForm(!isCreateForm);
    };

    const classes = useStyles();

    useEffect(() => {
        dispatch(fetchTasks())
    }, []);

    const deleteTaskFromArray = index => {
        tasks.splice(index, 1);
    };

    const onSubmit = formData => {
        formData = {
            ...formData,
            type: formData.type.toUpperCase()
        };

        dispatch(submitTask({formData}));
    };

    return (
        <Box padding={3}>
            <Box pb={2}
                 display="flex"
                 alignItems="center"
                 justifyContent="center">
                <Typography variant="h5">Tasks</Typography>
            </Box>

            <Box pl={2} pr={2}>
                <Box pb={2}>
                    <Grid container>
                        {!isCreateForm ? (
                            <Grid item xs={4} pb={5}>
                                <Button variant="contained" color="primary" onClick={handleCreateTaskClicked}>
                                    Create Task Form
                                </Button>
                            </Grid>) : (
                            <Grid item xs={4}>
                                <Button variant="contained" color="primary" onClick={handleCreateTaskClicked}>
                                    Hide Form
                                </Button>
                            </Grid>)
                        }
                    </Grid>
                </Box>

                {isCreateForm &&
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={4}>
                        <Grid item xs={2}>
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

                        <Grid item xs={2}>
                            <FormControl name='type' fullWidth>
                                <InputLabel id="type-label">Type</InputLabel>
                                <Controller
                                    name="type"
                                    control={control}
                                    defaultValue={phaseTypes[0]}
                                    rules={{required: 'Type required'}}
                                    render={({field: {onChange, value}, fieldState: {error}}) => (
                                        <Select
                                            label='Type'
                                            value={value}
                                            onChange={onChange}
                                            className={classes.formControl}
                                            error={!!error}
                                            helperText={error ? error.message : null}
                                        >
                                            {phaseTypes.map(item => <MenuItem key={item}
                                                                              value={item}>{prepareType(item)}</MenuItem>)}
                                        </Select>
                                    )}
                                />
                            </FormControl>
                        </Grid>

                        <Grid item xs={2}>
                            <Controller
                                name="minimumImplementationCost"
                                control={control}
                                defaultValue=""
                                rules={{required: 'Cost required'}}
                                render={({field: {onChange, value}, fieldState: {error}}) => (
                                    <TextField
                                        label="Min Cost"
                                        value={value}
                                        onChange={onChange}
                                        error={!!error}
                                        helperText={error ? error.message : null}
                                    />
                                )}
                            />
                        </Grid>

                        <Grid item xs={2}>
                            <Controller
                                name="maximumImplementationCost"
                                control={control}
                                defaultValue=""
                                rules={{required: 'Cost required'}}
                                render={({field: {onChange, value}, fieldState: {error}}) => (
                                    <TextField
                                        label="Max Cost"
                                        value={value}
                                        onChange={onChange}
                                        error={!!error}
                                        helperText={error ? error.message : null}
                                    />
                                )}
                            />
                        </Grid>

                        <Grid item xs={2}>
                            <Button type="submit" variant="contained" color="primary"> Submit</Button>
                        </Grid>
                    </Grid>
                </form>
                }
            </Box>

            {loading ? (
                <Typography variant="subtitle2">Loading</Typography>
            ) : error ? (
                <Typography variant="subtitle2">{error}</Typography>
            ) : (
                <Box>
                    {tasks && tasks.length > 0 &&
                    tasks.map(task => <TaskItemComponent index={task.id} key={task.id} task={task}
                                                         deleteTaskFromArray={deleteTaskFromArray}/>)
                    }
                </Box>
            )
            }
        </Box>
    );
};
export {TaskComponent, prepareType, phaseTypes}