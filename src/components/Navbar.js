import React from "react"
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
const Navbar = () => {
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

    return (
        <nav className="navBar">
            <ul>
                {links.map(link => {
                    return (
                        <li key={link.id}>
                            <NavLink to={link.path} activeClassName="active-link" exact>
                                {link.text}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
export default Navbar