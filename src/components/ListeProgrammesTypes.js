import React, { useState, useEffect } from "react"
import axios from "./AxiosInterceptor";
import Sequence from "./Sequence";
import ListGroup from "react-bootstrap/ListGroup"
import ListGroupItem from "react-bootstrap/ListGroupItem"

const ListeProgrammesTypes = (props) => {

    const [listeSequences, setListeSequences] = useState([]) //[] parce que l'on attend un tableau d'objet
    useEffect(async () => {
        await axios.get('api/sequencetheoriques')
            .then((response) => {
                console.log(response )
                setListeSequences(response.data)
            }, (error) => {
                console.log(error)
            });
    },[props]  );

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
                                    <Sequence key={sequence.id}   sequence={sequence} style={{width: "100%"}}/>
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