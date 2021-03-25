import React, {useEffect, useState} from "react";

import Header from "./Header";

import axios from "axios";
import Alert from "react-bootstrap/Alert";

import {useHistory, useParams} from "react-router-dom";

const MesInfos = props => {

    //Liste des hooks : là où fait l'appel à des fonctions
    const [infosUser, setInfosUser] = useState({});

    console.log("props.idSession : " + props.idSession)
    let idSession = props.idSession

        useEffect(async () => {

            if(idSession != "-1" && idSession != ""  ) {
                var headers = 'Bearer ' + idSession
                await axios.get(`http://localhost:8002/getCurrentUser`,

                    {
                        headers: {
                            'Authorization': headers
                        }
                    })
                    .then((response) => {
                        console.log(response)
                        setInfosUser(response.data)
                    }, (error) => {
                        console.log(error)
                    });
            }
        }, [props.idSession]);


    const handleSubmit = e => {
        e.preventDefault();

    }


        //Ce qu'affiche cet objet
        return (
            <div className="container">

                    <h3>Mes informations</h3>
                    <table>
                        <tbody>
                        <tr>
                            <td>Identifiant</td>
                            <td>{infosUser.userName}

                            </td>
                        </tr>
                        <tr>
                            <td>Mail</td>
                            <td>
                                {infosUser.email}
                            </td>
                        </tr>


                        </tbody>
                    </table>
            </div>

        )

}
export default MesInfos