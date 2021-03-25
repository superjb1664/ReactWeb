import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import Table  from "react-bootstrap/Table";
import axios from "axios";
import Commentaire from "./Commentaire";

const Atelier = props => {
    const [atelier, setAtelier] = useState({}) // {} parce que l'on attend un seul objet !
    const { id } = useParams()


    useEffect(async () => {

         await axios.get( `http://127.0.0.1:8002/api/ateliers/${id}` )
            .then((response) => {
                console.log(response.data )
                setAtelier(response.data )
            }, (error) => {
                console.log(error)
            });
    }, []);
    const atelierOK = atelier.commentaires === null

    if(atelier )
        return (
            <div className="container">
                <h3>Atelier : {atelier.titre} </h3>
                <Table>
                    <tbody>
                    <tr>
                        <td>
                            Description
                        </td>
                        <td>
                            {atelier.description}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Unité d'intensité
                        </td>
                        <td>
                            {atelier.unitedintensite}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Unité de performance
                        </td>
                        <td>
                            {atelier.unitedeperformance}
                        </td>
                    </tr>
                    </tbody>
                </Table>
                <h3>Commentaires </h3>
                {atelier.commentaires === undefined ?
                    (
                        <>
                            Pas encore de commentaire
                        </>
                    ):
                    (
                        <>
                            {atelier.commentaires.map(commentaire => (
                                <Commentaire key={commentaire.id} commentaire={commentaire}/>
                            ))}
                        </>
                    )
                }
                <h4>Ajouter mon commentaire :</h4>
                <form>
                    Titre :

                </form>
            </div>
       )
    else
    {
        return  <div className="container">
            En chargement...
        </div>
    }
}
export default Atelier