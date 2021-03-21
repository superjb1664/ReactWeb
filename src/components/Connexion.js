import React, {useState} from "react";

import Header from "./Header";

import axios from "axios";
import Alert from "react-bootstrap/Alert";

import {useHistory} from "react-router-dom";

const Connexion = props => {

    //Liste des hooks : là où fait l'appel à des fonctions
    const [identifiant, setIdentifiant] = useState("");
    const [motDePasse, setMotDePasse] = useState("");
    const [msg, setMsg]= useState("");
    let history = useHistory();

    //Fonction qui gère le clic sur submit
    const handleSubmit = e => {
        e.preventDefault(); //Cette instruction empeche la propagation de la chaîne d'évènements (interface du bouton, -> action handle -> puis submit)


        axios.post('http://localhost:8001/authentication_token', {
            login: identifiant,
            password:  motDePasse
            }
        )
            .then((response) => {
             //   console.log("ici");
                setMsg(<Alert variant='success'> Indentification réussie </Alert>)
                console.log(response.data);
                props.gereChangementSession(response.data.token)

                history.push("/accueilConnexion");

            }, (error) => {
                //console.log("la");
                switch (error.response.status)
                {
                    case 401 :
                        setMsg(<Alert variant='danger'> Identification non valide </Alert>)
                        break
                    default:
                        setMsg(<Alert variant='danger'> Erreur inconnue </Alert>)
                }

            });
    };



    //Ce qu'affiche cet objet
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
                                        value={identifiant}
                                        onChange={e => {
                                            setIdentifiant(e.target.value)
                                        }
                                        }
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Mot de passe</td>
                                <td>
                                    <input
                                        type="password"
                                        placeholder="Votre mot de passe"
                                        name="password"
                                        value={motDePasse}
                                        onChange={e => {
                                            setMotDePasse(e.target.value)
                                            }
                                        }
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <button className="input-submit">Me connecter</button>
                </form>
                {msg}
            </div>

        )

}
export default Connexion