import React from "react"
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/cjs/NavDropdown";

const BarDeNavigation = props => {

    let nav
    if(props.etatNavigation <0)
        nav = <Navbar.Brand href="connexion">Connexion</Navbar.Brand>

    return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Muscu</Navbar.Brand>
                <Navbar.Brand href="ateliers">Ateliers</Navbar.Brand>
                {nav}
            </Navbar>
    )
}
export default BarDeNavigation