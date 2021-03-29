import React, {useState, useEffect} from "react"
import {useHistory, useParams} from 'react-router-dom'
import Table from "react-bootstrap/Table";
import axios from "axios";
import Commentaire from "./Commentaire";
import Card from "react-bootstrap/Card";
import Moment from "moment";
import Alert from "react-bootstrap/Alert";

import * as Constant from "./Constantes"

const Atelier = props => {
    const [atelier, setAtelier] = useState({}) // {} parce que l'on attend un seul objet !
    const {id} = useParams()
    const idSession = props.idSession

    useEffect(async () => {
        await axios.get('api/ateliers/' + id)
            .then((response) => {
                console.log(response.data)
                setAtelier(response.data)
            }, (error) => {
                console.log(error)
            });
    }, [props]);
    const atelierOK = atelier.commentaires === null

    const [titre, setTitre] = useState("");
    const [message, setMessage] = useState("");

    /*
    Gère l'ajout de commentaire : Anonyme ou connecté
     */
    const handleAjoutcommentaire = e => {
        e.preventDefault(); //Cette instruction empeche la propagation de la chaîne d'évènements (interface du bouton, -> action handle -> puis submit)
        var headers = 'Bearer ' + idSession
        if (idSession != -1 && idSession != "-1") {
            //S'il n'y a pas de connexion c'est un post anonyme
            axios.post('api/commentaire/atelier/' + id,
                {
                    titre: titre,
                    message: message
                },
                {
                    headers: {
                        'Authorization': headers
                    }
                },
            )
                .then((response) => {
                    console.log(response.data);
                    atelier.commentaires.push(response.data)
                    setAtelier(atelier)
                    setTitre("");
                    setMessage("");
                }, (error) => {
                    console.log(error);
                });

        } else {
            //quelqu'un est connecté, le post n'est pas anonyme
            axios.post('api/commentaire/atelier/' + id,
                {
                    titre: titre,
                    message: message
                },
            )
                .then((response) => {
                    console.log(response);
                    atelier.commentaires.push(response)
                    setAtelier(atelier)
                }, (error) => {
                    console.log(error);
                });
        }
    }

    /*
    Gère la suppression d'un post de l'utilisateur conncté
     */
    const handleSupprimerCommentaire = idCommentaire => {
        var headers = 'Bearer ' + idSession

        axios.delete('api/commentaire_ateliers/' + idCommentaire,
            {
                headers: {
                    'Authorization': headers
                }
            },
        )
            .then((response) => {
                setAtelier(
                    {
                        ...atelier,
                        commentaires: atelier.commentaires.filter(
                            commentaire => {
                                return commentaire.id !== idCommentaire;
                            }
                        )
                    })
            }, (error) => {
                console.log(error);
            });


    }

    if (atelier)
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
                    ) :
                    (
                        <>
                            {atelier.commentaires.map(commentaire => (
                                <Commentaire key={commentaire.id} commentaire={commentaire} login={props.login}
                                             handleSupprimerCommentaire={handleSupprimerCommentaire}/>
                            ))}
                        </>
                    )
                }
                <h4>Ajouter mon commentaire :</h4>
                <form onSubmit={handleAjoutcommentaire}>
                    <Card>
                        <Card.Header>Nouveau commentaire
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>
                                <input type="text"
                                       placeholder="Titre de mon commentaire"
                                       name="Titre"
                                       value={titre}
                                       onChange={e => {
                                           setTitre(e.target.value)
                                       }
                                       }/>
                            </Card.Title>
                            <Card.Text>
                                <textarea
                                    placeholder="Mon commentaire"
                                    name="Message"
                                    value={message}
                                    cols="50"
                                    raw="25"
                                    onChange={e => {
                                        setMessage(e.target.value)
                                    }
                                    }/>
                            </Card.Text>
                            <Card.Footer>
                                <button className="input-submit">Ajouter</button>
                            </Card.Footer>
                        </Card.Body>
                    </Card>


                </form>
            </div>
        )
    else {
        return <div className="container">
            En chargement...
        </div>
    }

}
export default Atelier