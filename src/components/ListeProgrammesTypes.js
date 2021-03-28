import React, { useState, useEffect } from "react"
import axios from "axios";
import * as Constant from "./Constantes";
import Sequence from "./Sequence";
import ListGroup from "react-bootstrap/ListGroup"
import ListGroupItem from "react-bootstrap/ListGroupItem"

const ListeProgrammesTypes = props => {

    console.log("props.idSession " + props.idSession)
    const idSession =  props.idSession
    console.log("idSession " +idSession)
    const [listeSequences, setListeSequences] = useState([]) //[] parce que l'on attend un tableau d'objet
    useEffect(async () => {
    //    console.log("idSession " + props.idSession)
    //    console.log("idSession " +idSession)
        var headers = 'Bearer ' + props.idSession
        await axios.get(Constant.API_URL + 'api/sequencetheoriques'
      ,{  headers: {
                'Authorization': headers
            }
            }, )
            .then((response) => {
                console.log(response )
                setListeSequences(response.data)
            }, (error) => {
                console.log(error)
            });
    },[props] );

    var nbResult = listeSequences.length
    return (
        <div className="container">
            <h5>Vos programmes types</h5>
            <i>Des activités proposées à tous nos adhérents</i>
            {nbResult != 0 ?
                (
                    <>
                        <ListGroup as="ul" style={{width: "100%"}}>
                            {
                            listeSequences.map(sequence => (
                                <ListGroup.Item style={{width: "100%"}}>
                                    <Sequence key={sequence.id} idSession={props.idSession} sequence={sequence} style={{width: "100%"}}/>
                                </ListGroup.Item>
                            ))
                            }
                        </ListGroup>
                    </>
                ):
                (
                    <>
                        Pas encore de séquence
                    </>
                )

            }
        </div>
    )

}
export default ListeProgrammesTypes