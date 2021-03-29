import React, {useEffect, useState} from "react";

import Header from "./Header";

import axios from "./AxiosInterceptor";
import Alert from "react-bootstrap/Alert";

import {useHistory, useParams} from "react-router-dom";
import Table from "react-bootstrap/Table"
const MesInfos = props => {

    //Liste des hooks : là où fait l'appel à des fonctions
    const [infosUser, setInfosUser] = useState({});

    console.log("props.token : " + props.token)
    let token = props.token

        useEffect(async () => {

            if(token != "-1" && token != ""  ) {
                var headers = 'Bearer ' + token
                await axios.get('getCurrentUser',
                   /* {
                        headers: {
                            'Authorization': headers
                        }
                    }*/)
                    .then((response) => {
                        console.log(response)
                        setInfosUser(response.data)
                    }, (error) => {
                        console.log(error)
                    });
            }
        }, [props.token]);


    const handleSubmit = e => {
        e.preventDefault();

    }


        //Ce qu'affiche cet objet
        return (
            <div className="container">
                    <h3>Mes informations</h3>
                    <Table>
                        <tbody>
                            <tr>
                                <td>Identifiant</td>
                                <td>{infosUser.login}</td>
                            </tr>
                            <tr>
                                <td>Nom</td>
                                <td>{infosUser.nomUtilisateur}</td>
                            </tr>
                            <tr>
                                <td>Prénom</td>
                                <td>{infosUser.prenomUtilisateur}</td>
                            </tr>
                            <tr>
                                <td>E-mail</td>
                                <td>
                                    {infosUser.email}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
            </div>

        )

}
export default MesInfos