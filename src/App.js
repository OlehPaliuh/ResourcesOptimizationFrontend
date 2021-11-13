import './App.css';
import React from "react";
import TaskComponent from "./components/TaskComponent";
import {Provider} from "react-redux";
import store from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <TaskComponent/>
        </Provider>
    );
}

export default App;
