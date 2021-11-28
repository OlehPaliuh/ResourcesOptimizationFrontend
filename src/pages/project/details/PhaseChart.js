import React from 'react';
import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import {prepareType} from "../../../components/task/TaskComponent";

const PhaseChart = ({optimizationData, graphPhase}) => {

    const taskOptimizationItems = optimizationData?.phaseOptimizationItems?.filter(item => item.type === graphPhase)[0].optimizationItems;

    return (
        <Grid>
            <Typography>
                Optimization for {prepareType(graphPhase)}
            </Typography>
            <Paper
                sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                }}
            >
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={400}
                        data={taskOptimizationItems}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="task.name" tick={false}/>
                        <YAxis/>
                        <Tooltip/>
                        <Legend/>
                        <Bar dataKey="task.minimumImplementationCost" name="Minimum" fill="#5b7dff" />
                        <Bar dataKey="task.maximumImplementationCost" name="Maximum" fill="#804dde" />
                        <Bar dataKey="value" name="Optimized Value" fill="#77e998"/>
                    </BarChart>
                </ResponsiveContainer>
            </Paper>
        </Grid>
    );
};

export {PhaseChart};