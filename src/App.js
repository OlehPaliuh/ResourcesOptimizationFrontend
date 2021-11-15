import './App.css';
import React from "react";
import {Provider} from "react-redux";
import store from "./redux/store";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginComponent from "./components/login/LoginComponent";
import HomeComponent from "./components/home/HomeComponent";
import TaskComponent from "./components/task/TaskComponent";
import RequireAuth from "./components/login/RequireAuth";
import NavBarComponent from "./components/nav-bar/NavBarComponent";
import RegisterComponent from "./components/register/RegisterComponent";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import createTheme from "@material-ui/core/styles/createTheme";
import ProfileComponent from "./components/profile/ProfileComponent";


const App = () => {
    const theme = createTheme();

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
                                    <NavBarComponent/>
                                    <TaskComponent/>
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="/profile"
                            element={
                                <RequireAuth>
                                    <NavBarComponent/>
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
