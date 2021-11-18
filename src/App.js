import './App.css';
import React from "react";
import {Provider} from "react-redux";
import store from "./redux/store";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LoginComponent} from "./components/login/LoginComponent";
import HomeComponent from "./components/home/HomeComponent";
import TaskComponent from "./components/task/TaskComponent";
import RequireAuth from "./components/login/RequireAuth";
import RegisterComponent from "./components/register/RegisterComponent";
import ProfileComponent from "./components/profile/ProfileComponent";
import DashboardComponent from "./components/dashboard/DashboardComponent";
import MenuAppBar from "./components/nav-bar/MenuAppBar";
import { useTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles'

const App = () => {
    const theme = useTheme();

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomeComponent/>}/>
                        <Route path="/register" element={<RegisterComponent/>}/>
                        <Route path="/login" element={<LoginComponent/>}/>
                        <Route
                            path="/dashboard"
                            element={
                                <RequireAuth>
                                    <MenuAppBar/>
                                    <DashboardComponent/>
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="/tasks"
                            element={
                                <RequireAuth>
                                    <MenuAppBar/>
                                    <TaskComponent/>
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="/profile"
                            element={
                                <RequireAuth>
                                    <MenuAppBar/>
                                    <ProfileComponent/>
                                </RequireAuth>
                            }
                        />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    );
};

export default App;
