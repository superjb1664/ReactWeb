/*Les bibliothèques liées à React*/
import React from "react"
import {v4 as uuidv4} from "uuid";
import {BrowserRouter, Route, Switch } from "react-router-dom"

/*Les composants*/
import Header from "./Header"
import Connexion from "./Connexion"

/*Les pages statiques*/
import About from "../pages/About"
import NotMatch from "../pages/NotMatch"
import Navbar from "./Navbar"

class RouteMission2 extends React.Component {
    state = {
        indiceNav: 1
    };


    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <div className="container">
                            <div className="inner">
                                <Header/>
                                />
                            </div>
                        </div>
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/connexion">
                        <Connexion />
                    </Route>
                    <Route path="*">
                        <NotMatch />
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default RouteMission2