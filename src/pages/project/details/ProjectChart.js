import React from 'react';
import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import {prepareType} from "../../../components/task/TaskComponent";


const ProjectChart = ({optimizationData}) => {
    const preparedData = optimizationData?.phaseOptimizationItems?.map(item => ({
       ...item,
        type: prepareType(item.type)
    }));

    return (
        <Grid>
            <Typography>
                Optimization by phases
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
                        data={preparedData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="type"/>
                        <YAxis/>
                        <Tooltip/>
                        <Legend/>
                        <Bar dataKey="minimumCost" name="Minimum" fill="#5b7dff" />
                        <Bar dataKey="maximumCost" name="Maximum" fill="#804dde" />
                        <Bar dataKey="value" name="Optimized Value" fill="#77e998"/>
                    </BarChart>
                </ResponsiveContainer>
            </Paper>
        </Grid>
    );
};

export {ProjectChart};