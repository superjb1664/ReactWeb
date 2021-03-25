import React, { useState, useEffect } from "react"
import {Link, useHistory, useParams} from 'react-router-dom'

import axios from "axios";
import Moment from 'moment'

import Card from "react-bootstrap/Card";

const Commentaire = ({commentaire}) => {
        return (
            <Card>
                <Card.Header>De <i>{commentaire.proprietaire === undefined ?  ( <> anonyme </> ) :( <> {commentaire.proprietaire.nomUtilisateur} { commentaire.proprietaire.prenomUtilisateur}</> ) } </i> le  {Moment(commentaire.date).format('DD/MM/YYYY à m:s')}
                </Card.Header>
                <Card.Body>
                    <Card.Title> {commentaire.titre} </Card.Title>
                    <Card.Text>
                        {commentaire.msg}
                    </Card.Text>
                </Card.Body>
            </Card>

)
}
export default Commentaire