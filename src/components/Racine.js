/*Les bibliothèques liées à React*/
import React, { useState, useEffect } from "react"

import {v4 as uuidv4} from "uuid";
import {useHistory, BrowserRouter, Route, Switch } from "react-router-dom"

import {useRoutes, navigate} from 'hookrouter';

/*Les composants*/
import RouteMission2 from "./RouteMission2"
import Connexion from "./Connexion"
import ListeAtelier from "./ListeAtelier"
import Atelier from "./Atelier"
import AccueilConnexion from "./AccueilConnexion";
import Deconnexion from "./Deconnexion";
//import { useHistory } from "react-router-dom";

/*Les pages statiques*/
import About from "../pages/About"
import NotMatch from "../pages/NotMatch"
import BarDeNavigation from "./BarDeNavigation"
import axios from "axios";

const Racine = () => {
    const [idSession, setIdSession] = useState( "" );
    const [login, setlogin] = useState( "" );


    useEffect(() => {
        const idSessionTmp = String(localStorage.getItem("idSession") || -1)
        const loginTmp = String(localStorage.getItem("login") || -1)
        setIdSession(idSessionTmp)
        setlogin(loginTmp)
    }, [])

    useEffect(() => {
        localStorage.setItem("idSession", idSession)
    }, [idSession])

    useEffect(() => {
        localStorage.setItem("login", login)
    }, [login])

    const gereChangementSession = (nvIdSessionTmp,login) => {
        console.log("nvIdSessionTmp " + nvIdSessionTmp)
        console.log("login " +  login)
        const nvIdSession = nvIdSessionTmp
        setIdSession(idSession => nvIdSession)
        const nvLogin = login
        setlogin(login => nvLogin)
        //navigate('/accueilConnexion', true, )
    }



    return (
        <>
            <RouteMission2
                gereChangementSession={gereChangementSession}
                idSession={idSession} login={login}/>
        </>
    );

}

export default Racine