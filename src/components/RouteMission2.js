/*Les bibliothèques liées à React*/
import React, { useState } from "react"

import {v4 as uuidv4} from "uuid";
import {BrowserRouter, Route, Switch } from "react-router-dom"

/*Les composants*/
import Header from "./Header"
import Connexion from "./Connexion"

/*Les pages statiques*/
import About from "../pages/About"
import NotMatch from "../pages/NotMatch"
import BarDeNavigation from "./BarDeNavigation"

const RouteMission2 = () => {
    const [idSession, setIdSession] = useState(0);

    const [etatNavigation, setEtatNavigation] = useState(-1); //-1 Non connecté

    const [ateliers, setAteliers] = useState([]);


    const gereChangementSession = (nvIdSession) => {
        setIdSession(nvIdSession)
    }

        return (
            <BrowserRouter>
                <BarDeNavigation etatNavigation={etatNavigation}/>
                <Switch>
                    <Route exact path="/">
                        <div className="container">
                            <div className="inner">
                                <Header/>

                            </div>
                        </div>
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/connexion" gereChangementSession={gereChangementSession}>
                        <Connexion />
                    </Route>
                    <Route path="*">
                        <NotMatch />
                    </Route>
                </Switch>
            </BrowserRouter>
        )

}

export default RouteMission2