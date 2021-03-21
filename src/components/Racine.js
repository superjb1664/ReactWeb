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


    useEffect(() => {
        const idSessionTmp = String(localStorage.getItem("idSession") || -1)
        setIdSession(idSessionTmp)
    }, [])

    useEffect(() => {
        localStorage.setItem("idSession", idSession)
    }, [idSession])

    const gereChangementSession = (nvIdSessionTmp) => {
        const nvIdSession = nvIdSessionTmp
        setIdSession(idSession => nvIdSession)


        //navigate('/accueilConnexion', true, )
    }



    return (
        <>
            <RouteMission2
                gereChangementSession={gereChangementSession}
                idSession={idSession}/>
        </>
    );

}

export default Racine