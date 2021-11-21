import React, {useEffect} from "react";
import Box from "@mui/material/Box";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router";
import {fetchProjectById, updateProject} from "../../../redux/project/fetchSingleProject/fetchProjectByIdAction";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {Controller, useFieldArray, useForm} from "react-hook-form";
import TextField from "@mui/material/TextField";
import {fetchTasks} from "../../../redux";
import {SelectTaskComponent} from "../../../components/project/CreateProjectComponent";

const ProjectEditPage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const allTasksData = useSelector((state) => state.task);
    const {project, error, loading} = useSelector((state) => state.project);

    const {control, handleSubmit, reset} = useForm({
        defaultValues: {
            name: null,
            finalCost: null,
            tasks: []
        }
    });

    const {fields: tasks, append: appendTask, remove: removeTask} = useFieldArray({
        control,
        name: "tasks",
    });

    const onSubmit = async formData => {
        await dispatch(updateProject({formData, projectId: id}));

        if(!error && !loading) {
            navigate(`/projects/${id}`);
        }
    };

    useEffect(() => {
        let defaultValues = {
            name: project?.name,
            finalCost: project?.finalCost,
            tasks: project?.tasks
        };
        reset(defaultValues);
    }, [project]);

    useEffect(() => {
        dispatch(fetchTasks());
        dispatch(fetchProjectById({projectId: id}))
    }, []);


    return (
        <Box padding={5}>
            <Box display="flex"
                 alignItems="center"
                 justifyContent="center">
                <Typography variant="h5">Project Details</Typography>
            </Box>
            <Box padding={5}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container
                          direction="row"
                          spacing={4}
                          justifyContent="center"
                          alignItems="center">
                        <Grid item xs={3}>
                            <Typography>Name</Typography>
                            <Controller
                                name="name"
                                control={control}
                                rules={{required: 'Name required'}}
                                render={({field: {onChange, value}, fieldState: {error}}) => (
                                    <TextField
                                        value={value}
                                        onChange={onChange}
                                        error={!!error}
                                        helperText={error ? error.message : null}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Typography>Final Cost</Typography>
                            <Controller
                                name="finalCost"
                                control={control}
                                rules={{required: 'Final Cost required'}}
                                render={({field: {onChange, value}, fieldState: {error}}) => (
                                    <TextField
                                        value={value}
                                        onChange={onChange}
                                        error={!!error}
                                        helperText={error ? error.message : null}
                                    />
                                )}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            {allTasksData?.tasks?.map(task => <SelectTaskComponent
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
        </Box>
    );
};

export default ProjectEditPage;