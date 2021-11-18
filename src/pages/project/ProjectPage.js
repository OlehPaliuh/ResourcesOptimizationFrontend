import React, {useEffect} from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {fetchProjects} from "../../redux/project/fetch/fetchProjectAction";
import Button from "@mui/material/Button";
import TaskItemComponent from "../../components/task/TaskItemComponent";
import ProjectItemComponent from "../../components/project/ProjectItemComponent";

const ProjectPage = () => {

    const dispatch = useDispatch();
    const {projects, error, loading} = useSelector((state) => state.projects);
    const {control, handleSubmit} = useForm();

    useEffect(() => {
        dispatch(fetchProjects())
    }, []);

    console.log('projects ', projects);

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
                            <Typography variant="subtitle1">Projects</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="contained" color="primary" onClick={() => console.log('click')}>Create
                                Task </Button>
                        </Grid>
                    </Grid>
                    {projects && projects.length > 0 &&
                    projects.map(project => <ProjectItemComponent index={project.id} key={project.id} project={project}/>)
                    }
                </Box>
            )
            }
        </Box>
    );

};

export default ProjectPage;