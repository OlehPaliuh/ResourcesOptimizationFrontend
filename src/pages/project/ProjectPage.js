import React, {useEffect, useState} from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {useDispatch, useSelector} from "react-redux";
import {fetchProjects} from "../../redux/project/fetch/fetchProjectAction";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {useNavigate} from "react-router-dom";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import CreateProjectComponent from "../../components/project/CreateProjectComponent";

const ProjectPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {projects, error, loading} = useSelector((state) => state.projects);
    const [createForm, setCreateForm] = useState(false);

    useEffect(() => {
        dispatch(fetchProjects())
    }, []);

    const handleCreateProjectClicked = () => {
        setCreateForm(!createForm);
    };

    return (
        <Box margin={5}>
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
                        {!createForm ? (
                            <Grid item xs={4}>
                                <Button variant="contained" color="primary" onClick={handleCreateProjectClicked}>
                                    Create Project
                                </Button>
                            </Grid>) : (
                            <Grid item xs={4}>
                                <Button variant="contained" color="primary" onClick={handleCreateProjectClicked}>
                                    Hide Form
                                </Button>
                            </Grid>)
                        }
                    </Grid>

                    {createForm &&
                    <Grid container>
                        <CreateProjectComponent/>
                    </Grid>
                    }

                    <Grid container>
                        <TableContainer component={Paper}>
                            <Table sx={{minWidth: 450}} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell align="right">Final Cost</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {projects.map(project => (
                                        <TableRow
                                            key={project.id}
                                            index={project.id}
                                            onClick={() => navigate(`/projects/${project.id}`)}
                                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                        >
                                            <TableCell component="th" scope="row">
                                                {project.name}
                                            </TableCell>
                                            <TableCell align="right">{project.finalCost}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Box>
            )}
        </Box>
    );
};

export default ProjectPage;