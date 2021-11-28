import React from 'react'
import '@fontsource/roboto';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {prepareType} from "../../task/TaskComponent";

const reducer = (accumulator, curr) => accumulator + curr;

const getSumOptimizedTasks = phaseOptimizationItem => Math.round((phaseOptimizationItem?.optimizationItems?.map(item => item.value).reduce(reducer, 0)) * 100) / 100;

const OptimizationResultRow = (props) => {
    const {phaseOptimizationItem} = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{'& > *': {borderBottom: 'unset'}}}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {prepareType(phaseOptimizationItem.type)}
                </TableCell>
                <TableCell align="right">{phaseOptimizationItem.minimumCost}</TableCell>
                <TableCell align="right">{phaseOptimizationItem.maximumCost}</TableCell>
                <TableCell align="right">{phaseOptimizationItem.value}</TableCell>
                <TableCell align="right">{getSumOptimizedTasks(phaseOptimizationItem)}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{margin: 1}}>
                            <Typography variant="h6" gutterBottom component="div">
                                Tasks Optimization
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Task name</TableCell>
                                        <TableCell>Min Value</TableCell>
                                        <TableCell align="right">Max Value</TableCell>
                                        <TableCell align="right">Optimization ($)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {phaseOptimizationItem.optimizationItems.map(optimizationItem => (
                                        <TableRow key={optimizationItem.id}>
                                            <TableCell component="th" scope="row">
                                                {optimizationItem.task.name}
                                            </TableCell>
                                            <TableCell>{optimizationItem.task.minimumImplementationCost}</TableCell>
                                            <TableCell
                                                align="right">{optimizationItem.task.maximumImplementationCost}</TableCell>
                                            <TableCell align="right">{optimizationItem.value}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
};

const OptimizationResultComponent = ({projectOptimization}) => {
    return (
        <Box pt={4} pb={4}>

            <Box>
                <Box display="flex"
                     alignItems="center"
                     justifyContent="center">
                    <Typography variant="h5">Optimization Result</Typography>
                </Box>

                <Grid container pt={4}>
                    <TableContainer component={Paper}>
                        <Table aria-label="collapsible table">
                            <TableHead>
                                <TableRow>
                                    <TableCell/>
                                    <TableCell>Phase name</TableCell>
                                    <TableCell align="right">Min value</TableCell>
                                    <TableCell align="right">Max Value</TableCell>
                                    <TableCell align="right">Optimized Value</TableCell>
                                    <TableCell align="right">Sum Optimized Tasks</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {projectOptimization.phaseOptimizationItems.map(phaseOptimizationItem => (
                                    <OptimizationResultRow key={phaseOptimizationItem.type} phaseOptimizationItem={phaseOptimizationItem}/>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Box>
        </Box>
    )
};

export default OptimizationResultComponent;