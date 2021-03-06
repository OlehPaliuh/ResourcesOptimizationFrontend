import './App.css';
import React from "react";
import {Provider} from "react-redux";
import store from "./redux/store";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LoginPage} from "./components/login/LoginPage";
import HomeComponent from "./components/home/HomeComponent";
import {TaskComponent} from "./components/task/TaskComponent";
import RegisterComponent from "./components/register/RegisterPage";
import ProfileComponent from "./components/profile/ProfileComponent";
import DashboardComponent from "./components/dashboard/DashboardComponent";
import {ThemeProvider, useTheme} from '@mui/material/styles';
import ProjectPage from "./pages/project/ProjectPage";
import ProjectDetailsPage from "./pages/project/details/ProjectDetailsPage";
import TaskDetailsComponent from "./components/task/TaskDetails";
import AuthComponent from "./components/AuthComponent";
import SupportPage from "./pages/support/SupportPage";
import ProjectEditPage from "./pages/project/edit/ProjectEditPage";
import AdminProjectPage from "./pages/project/admin/AdminProjectPage";
import AdminUserPage from "./pages/users/AdminUserPage";

const App = () => {
    const theme = useTheme();

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomeComponent/>}/>
                        <Route path="/register" element={<RegisterComponent/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route
                            path="/dashboard"
                            element={<AuthComponent childComponent={<DashboardComponent/>}/>}
                        />
                        <Route
                            path="/tasks"
                            element={<AuthComponent childComponent={<TaskComponent/>}/>}
                        />
                        <Route
                            path="/tasks/:id"
                            element={<AuthComponent childComponent={<TaskDetailsComponent/>}/>}
                        />
                        <Route
                            path="/profile"
                            element={<AuthComponent childComponent={<ProfileComponent/>}/>}
                        />
                        <Route
                            path="/admin/projects"
                            element={<AuthComponent childComponent={<AdminProjectPage/>}/>}
                        />
                        <Route
                            path="/admin/users"
                            element={<AuthComponent childComponent={<AdminUserPage/>}/>}
                        />
                        <Route
                            path="/projects"
                            element={<AuthComponent childComponent={<ProjectPage/>}/>}
                        />
                        <Route
                            path="/projects/:id/edit"
                            element={<AuthComponent childComponent={<ProjectEditPage/>}/>}
                        />
                        <Route
                            path="/projects/:id"
                            element={<AuthComponent childComponent={<ProjectDetailsPage/>}/>}
                        />
                        <Route
                            path="/support"
                            element={<AuthComponent childComponent={<SupportPage/>}/>}
                        />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    );
};

export default App;
