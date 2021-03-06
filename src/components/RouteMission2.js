/*Les bibliothèques liées à React*/
import React, { useState, useEffect } from "react"

import {v4 as uuidv4} from "uuid";
import {useHistory, BrowserRouter, Route, Switch } from "react-router-dom"

import {useRoutes, navigate} from 'hookrouter';

/*Les composants*/
import Header from "./Header"
import Connexion from "./Connexion"
import ListeAtelier from "./ListeAtelier"
import Atelier from "./Atelier"
import AccueilConnexion from "./AccueilConnexion";
import Deconnexion from "./Deconnexion";
import MesInfos from "./MesInfos"
//import { useHistory } from "react-router-dom";

/*Les pages statiques*/
import About from "../pages/About"
import NotMatch from "../pages/NotMatch"
import BarreDeNavigation from "./BarreDeNavigation"
import Seances from "./Seances";
import axios from "./AxiosInterceptor";

const RouteMission2 = props => {
    console.log("RM2 token" + props.token)
        return (
        <BrowserRouter>
            <BarreDeNavigation token={props.token} login={props.login}/>
            <Switch>
                <Route exact path="/">
                    <div className="container">
                        <div className="inner">
                            <Header/>

                        </div>
                    </div>
                </Route>
                <Route path="/atelier/:id" >
                    <Atelier  token={props.token} login={props.login}/>
                </Route>

                <Route path="/ateliers" >
                    <ListeAtelier  />
                </Route>

                <Route path="/about">
                    <About />
                </Route>



                <Route path="/connexion">
                    <Connexion gereChangementSession={props.gereChangementSession}/>
                </Route>
                <Route path="/accueilConnexion">
                    <AccueilConnexion/>
                </Route>
                <Route path="/deconnexion" >
                    <Deconnexion gereChangementSession={props.gereChangementSession}/>
                </Route>
                <Route path="/mesinfos" >
                    <MesInfos token={props.token}/>
                </Route>
                <Route path="/seances">
                    <Seances token={props.token}/>
                </Route>

                <Route path="*">
                    <NotMatch />
                </Route>

            </Switch>
        </BrowserRouter>
    );

}

export default RouteMission2