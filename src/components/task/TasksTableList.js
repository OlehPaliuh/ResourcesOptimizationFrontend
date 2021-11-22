import React from 'react'
import '@fontsource/roboto';
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import {prepareType} from "./TaskComponent";

const TasksTableList = ({tasks}) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Type</TableCell>
                        <TableCell align="right">Min Cost</TableCell>
                        <TableCell align="right">Max Cost</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tasks.map((task) => (
                        <TableRow
                            key={task.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {task.name}
                            </TableCell>
                            <TableCell align="right">{prepareType(task.type)}</TableCell>
                            <TableCell align="right">{task.minimumImplementationCost}</TableCell>
                            <TableCell align="right">{task.maximumImplementationCost}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
};

export default TasksTableList;