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
import {fetchAdminUsers} from "../../redux/user/admin/fetchAllUsersAction";

const AdminUserPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {adminUsers, error, loading} = useSelector((state) => state.adminUsers);

    useEffect(() => {
        dispatch(fetchAdminUsers())
    }, []);

    console.log('adminUsers ', adminUsers);

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
                        <Typography variant="h5">All Users</Typography>
                    </Box>
                    <Grid container>
                        <TableContainer component={Paper}>
                            <Table sx={{minWidth: 450}} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Username</TableCell>
                                        <TableCell>Email</TableCell>
                                        <TableCell align="right">First Name</TableCell>
                                        <TableCell align="right">Last Name</TableCell>
                                        <TableCell align="right">Role</TableCell>
                                        <TableCell align="right">Locked</TableCell>
                                        <TableCell align="right">Disabled</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {adminUsers.map(user => (
                                        <TableRow
                                            key={user.id}
                                            index={user.id}
                                            onClick={() => navigate(`/admin/users/${user.id}`)}
                                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                        >
                                            <TableCell component="th" scope="row">
                                                {user.username}
                                            </TableCell>
                                            <TableCell>{user.email}</TableCell>
                                            <TableCell align="right">{user.firstName}</TableCell>
                                            <TableCell align="right">{user.lastName}</TableCell>
                                            <TableCell align="right">{user.role}</TableCell>
                                            <TableCell align="right">{user.locked ? 'Yes' : 'No'}</TableCell>
                                            <TableCell align="right">{user.disabled ? 'Yes' : 'No'}</TableCell>
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

export default AdminUserPage;