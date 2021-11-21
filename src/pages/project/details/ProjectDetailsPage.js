import React, {useEffect} from "react";
import Box from "@mui/material/Box";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {fetchProjectById} from "../../../redux/project/fetchSingleProject/fetchProjectByIdAction";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import TasksTableList from "../../../components/task/TasksTableList";
import Button from "@mui/material/Button";

const ProjectDetailsPage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {project, error, loading} = useSelector((state) => state.project);
    console.log('index ', id);
    console.log('project ', project);

    useEffect(() => {
        dispatch(fetchProjectById({projectId: id}))
    }, []);

    return (
        <Box margin={5}>
            <Box display="flex"
                 alignItems="center"
                 justifyContent="center">
                <Typography variant="h5">Project Details</Typography>
            </Box>

            <Grid container>
                <Grid item xs>
                    {error && <Alert severity="error">{error.message}</Alert>}
                </Grid>
            </Grid>
            {project &&
            <Grid>
                <Grid container
                      mt={4}
                      ml={1}
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center">
                    <Grid item xs={5}>
                        <Typography variant="subtitle2">Name</Typography>
                        <Typography>{project.name}</Typography>
                    </Grid>
                    <Grid item xs={5}>
                        <Typography variant="subtitle2">Final Cost</Typography>
                        <Typography>{project.finalCost}</Typography>
                    </Grid>
                    <Grid item alignItems="flex-end" alignContent="flex-end">
                            <Button variant="contained"
                                    color="primary"
                                    onClick={() => navigate(`edit`)}>Edit</Button>
                    </Grid>
                </Grid>

                <Grid mt={4}>
                    <TasksTableList tasks={project.tasks}/>
                </Grid>

            </Grid>
            }
        </Box>
    );
};

export default ProjectDetailsPage;