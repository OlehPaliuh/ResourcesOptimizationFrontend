import React, {useEffect} from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {useDispatch, useSelector} from "react-redux";
import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {useNavigate} from "react-router-dom";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import {fetchAdminProjects} from "../../../redux/project/admin/fetchAllProjectsAction";

const AdminProjectPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {adminProjects, error, loading} = useSelector((state) => state.adminProjects);

    useEffect(() => {
        dispatch(fetchAdminProjects())
    }, []);

    console.log('adminProjects ', adminProjects);

    return (
        <Box margin={5}>
            {loading ? (
                <Typography variant="subtitle2">Loading</Typography>
            ) : error ? (
                <Typography variant="subtitle2">{error}</Typography>
            ) : (
                <Box>
                    <Box pb={4}
                         display="flex"
                         alignItems="center"
                         justifyContent="center">
                        <Typography variant="h5">All Projects</Typography>
                    </Box>
                    <Grid container>
                        <TableContainer component={Paper}>
                            <Table sx={{minWidth: 450}} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Number of Tasks</TableCell>
                                        <TableCell align="right">Owner</TableCell>
                                        <TableCell align="right">Final Cost</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {adminProjects.map(project => (
                                        <TableRow
                                            key={project.id}
                                            index={project.id}
                                            onClick={() => navigate(`/projects/${project.id}`)}
                                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                        >
                                            <TableCell component="th" scope="row">
                                                {project.name}
                                            </TableCell>
                                            <TableCell>{project.tasks.length}</TableCell>
                                            <TableCell align="right">{project.owner.username}</TableCell>
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

export default AdminProjectPage;