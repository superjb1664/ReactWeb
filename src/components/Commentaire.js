import React, { useState, useEffect } from "react"
import {Link, useHistory, useParams} from 'react-router-dom'

import axios from "./AxiosInterceptor";
import Moment from 'moment'

import Card from "react-bootstrap/Card";

const Commentaire = ({commentaire, login, handleSupprimerCommentaire}) => {

        return (
            <Card>
                <Card.Header>De <i>
                    {commentaire.proprietaire === null ?
                        ( <> anonyme </> )
                        :( <> {commentaire.proprietaire.nomUtilisateur} { commentaire.proprietaire.prenomUtilisateur} </> ) }
                </i> le  {Moment(commentaire.date).format('DD/MM/YYYY à HH:mm')}

                    {commentaire.proprietaire === null ?
                        ( <>  </> )
                        :( <> {commentaire.proprietaire.login === login ?
                            (
                                <>
                                    <button
                                        className="input-submit"
                                        onClick={e => {
                                            handleSupprimerCommentaire(  commentaire.id)
                                        } }>
                                        Supprimer
                                    </button>
                                </>
                            ) :(<></>)
                        }
                        </> ) }




                </Card.Header>
                <Card.Body>
                    <Card.Title> {commentaire.titre} </Card.Title>
                    <Card.Text>
                        {commentaire.message}
                    </Card.Text>
                </Card.Body>
            </Card>

)
}
export default Commentaire