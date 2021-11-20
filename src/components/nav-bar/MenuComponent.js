import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import {useNavigate} from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TaskIcon from '@mui/icons-material/Task';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SupportIcon from '@mui/icons-material/Support';

const MenuComponent = () => {
    const navigate = useNavigate();

    const menuItems = [
        {
            title: "Dashboard",
            path: "/dashboard",
            icon: <DashboardIcon/>
        },
        {
            title: "Projects",
            path: "/projects",
            icon: <InboxIcon/>
        },
        {
            title: "Tasks",
            path: "/tasks",
            icon: <TaskIcon/>
        }
    ];

    const settingsItems = [
        {
            title: "Support",
            path: "/support",
            icon: <SupportIcon/>
        }
    ];


    return (
        <Box margin={1}>
            <Paper sx={{width: 320, maxWidth: '100%'}}>
                <List>
                    {menuItems.map(item => (
                        <ListItem button key={item.path} onClick={() => navigate(item.path)}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.title}/>
                        </ListItem>
                    ))}
                </List>
                <Divider/>
                <List>
                    {settingsItems.map(item => (
                        <ListItem button key={item.path} onClick={() => navigate(item.path)}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.title}/>
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Box>
    );
};

export default MenuComponent;