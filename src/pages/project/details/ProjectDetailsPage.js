import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {fetchProjectById} from "../../../redux/project/fetchSingleProject/fetchProjectByIdAction";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import TasksTableList from "../../../components/task/TasksTableList";
import Button from "@mui/material/Button";
import {
    fetchOptimizationByProjectId,
    optimizeProjectResources
} from "../../../redux/project/optimization/projectOptimizationAction";
import OptimizationResultComponent from "../../../components/project/optimization/OptimizationResultComponent";
import {ProjectChart} from "./ProjectChart";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import {prepareType} from "../../../components/task/TaskComponent";
import makeStyles from "@mui/styles/makeStyles";
import {PhaseChart} from "./PhaseChart";

const phaseTypes = [
    'ANALYSIS',
    'DESIGN',
    'DEVELOPMENT',
    'TESTING',
    'DEPLOYMENT',
    'MAINTENANCE'
];

const useStyles = makeStyles(() => ({
    formControl: {
        minWidth: 120,
    },
}));

const ProjectDetailsPage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showTasks, setShowTasks] = useState(false);
    const [graphPhase, setGraphPhase] = useState(phaseTypes[0]);
    const {project, error, loading} = useSelector((state) => state.project);
    const projectOptimizationData = useSelector((state) => state.projectOptimization);
    const classes = useStyles();

    useEffect(() => {
        dispatch(fetchProjectById({projectId: id}));
        dispatch(fetchOptimizationByProjectId({projectId: id}));
    }, []);

    const handleOptimizeResources = async () => {
        await dispatch(optimizeProjectResources({projectId: id}));
    };

    const handleShowTasks = () => {
        setShowTasks(!showTasks);
    };

    const handleGraphTypeChanged = (event) => {
        setGraphPhase(event.target.value);
    };

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
            <Grid pb={4}>
                <Grid container
                      mt={4}
                      ml={1}
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center">
                    <Grid item xs={4}>
                        <Typography variant="subtitle2">Name</Typography>
                        <Typography>{project.name}</Typography>
                    </Grid>
                    <Grid item xs={4}>
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
                    <Button variant="contained"
                            color="primary"
                            onClick={handleShowTasks}>{showTasks ? 'Hide tasks' : 'Show tasks'}</Button>
                    {showTasks &&
                    <Grid pt={4} pb={4}>
                        <TasksTableList tasks={project.tasks}/>
                    </Grid>
                    }
                </Grid>
            </Grid>
            }

            {projectOptimizationData?.projectOptimization && !projectOptimizationData.loading &&
            <OptimizationResultComponent projectOptimization={projectOptimizationData.projectOptimization}/>
            }

            {projectOptimizationData?.projectOptimization && !projectOptimizationData.loading &&
            <ProjectChart optimizationData={projectOptimizationData.projectOptimization}/>
            }


            {projectOptimizationData?.projectOptimization && !projectOptimizationData.loading &&
            <Box pt={2} pb={2}>
                <Box pt={2} pb={2}>
                    <Select
                        className={classes.formControl}
                        onChange={handleGraphTypeChanged}
                        defaultValue={graphPhase}
                        error={!!error}
                        helperText={error ? error.message : null}
                    >
                        {phaseTypes.map(item => <MenuItem key={item}
                                                          value={item}>{prepareType(item)}</MenuItem>)}
                    </Select>
                </Box>

                <PhaseChart optimizationData={projectOptimizationData.projectOptimization} graphPhase={graphPhase}/>
            </Box>
            }

            <Grid pt={4} pb={4}>
                <Button variant="contained"
                        color="primary"
                        onClick={handleOptimizeResources}>{!projectOptimizationData ? 'Optimize Resources' : 'Rebuild Optimization'}</Button>
            </Grid>

        </Box>
    );
};

export default ProjectDetailsPage;