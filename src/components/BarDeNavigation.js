import React from "react"
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/cjs/NavDropdown";

const BarDeNavigation = props => {
    const links = [
        {
            id: 1,
            path: "/",
            text: "Home",
        },
        {
            id: 2,
            path: "/about",
            text: "A propos",
        },
        {
            id: 3,
            path: "/connexion",
            text: "Connexion",
        },
    ]
    let nav
    if(props.etatNavigation <0)
        nav = <Navbar.Brand href="connexion">Connexion</Navbar.Brand>

    return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Muscu</Navbar.Brand>
                <Navbar.Brand href="#home">Atelier</Navbar.Brand>
                {nav}
            </Navbar>
    )
}
export default BarDeNavigation