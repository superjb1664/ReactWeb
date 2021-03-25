import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import Table  from "react-bootstrap/Table";
import axios from "axios";
import Commentaire from "./Commentaire";
import Card from "react-bootstrap/Card";
import Moment from "moment";
import Alert from "react-bootstrap/Alert";

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

    const [titre, setTitre] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = e => {
        e.preventDefault(); //Cette instruction empeche la propagation de la chaîne d'évènements (interface du bouton, -> action handle -> puis submit)

        axios.post('http://127.0.0.1:8002/api/commentaire/atelier/{id}', {
            titre: titre,
            message:  message
            }
        )
            .then((response) => {
                //   console.log("ici");
                atelier.commentaires.push(response)

            }, (error) => {
                console.log(error);
            });
    };

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
                <form onSubmit={handleSubmit}>
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
                            <Card.Footer >
                                <button className="input-submit">Me connecter</button>
                            </Card.Footer>
                        </Card.Body>
                    </Card>


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