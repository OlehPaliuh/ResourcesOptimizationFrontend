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


const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeComponent/>}/>
                    <Route path="/login" element={<LoginComponent />}/>
                    <Route
                        path="/dashboard"
                        element={
                            <RequireAuth>
                                <NavBarComponent/>
                                <TaskComponent/>
                            </RequireAuth>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
