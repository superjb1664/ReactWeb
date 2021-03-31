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
import BarreDeNavigation from "./BarreDeNavigation"
import axios from "./AxiosInterceptor";

const Racine = () => {
    const [token, setToken] = useState( "" );
    const [refresh_token, setRefresh_token] = useState( "" );
    const [login, setlogin] = useState( "" );


    useEffect(() => {
        const tokenTmp = String(localStorage.getItem("token") || -1)
        const refresh_tokenTmp = String(localStorage.getItem("token") || -1)
        const loginTmp = String(localStorage.getItem("login") || -1)
        setToken(tokenTmp)
        setlogin(loginTmp)
        setRefresh_token(refresh_tokenTmp)
    }, [])

    useEffect(() => {
        localStorage.setItem("token", token)
    }, [token])

    useEffect(() => {
        localStorage.setItem("login", login)
    }, [login])

    useEffect(() => {
        localStorage.setItem("refresh_tokenTmp", refresh_token)
    }, [refresh_token])

    const gereChangementSession = (token_param,Refresh_token_param,login_param ) => {
        setToken(token => token_param)
        setRefresh_token(refresh_token => Refresh_token_param)
        setlogin(login => login_param)
    }

    return (
        <>
            <RouteMission2
                gereChangementSession={gereChangementSession}
                token={token} login={login}/>
        </>
    );

}

export default Racine