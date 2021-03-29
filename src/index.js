import React from "react"
import ReactDOM from "react-dom"

//component file
import RouteMission2 from "./components/RouteMission2"
import Racine from "./components/Racine"
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.delete['Content-Type'] = 'application/json';
axios.defaults.baseURL = "http://127.0.0.1:8000/";

ReactDOM.render(
    <React.StrictMode>
        <Racine />
    </React.StrictMode>,
    document.getElementById("root")
)
