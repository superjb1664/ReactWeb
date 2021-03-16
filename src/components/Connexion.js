import React from "react"

import Header from "./Header"

import axios from "axios";

const Connexion = props => {





    const handleSubmit = e => {
        e.preventDefault(); //Cette instruction empeche la propagation de la chaîne d'évènements (interface du bouton, -> action handle -> puis submit)
        alert("gaergerg")
        axios.get('/login', {
            firstName: 'Finn',
            lastName: 'Williams'
        })
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });
    };


        return (
            <div className="container">
                <form onSubmit={handleSubmit} className="form-container">
                    <h3>Connexion</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>Identifiant</td>
                                <td>
                                    <input
                                        type="text"
                                        placeholder="Votre identifiant : mail"
                                        name="identifiant"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Mot de passe</td>
                                <td>
                                    <input
                                        type="password"
                                        placeholder="Votre mot de passe"
                                        name="identifiant"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <button className="input-submit">Me connecter</button>
                </form>
            </div>

        )

}
export default Connexion