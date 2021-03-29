import React, { useState, useEffect } from "react"
import axios from "./AxiosInterceptor";
import Commentaire from "./Commentaire";
import Sequence from "./Sequence"

const ListeProgrammesPersos = (props) => {


    const [listeSequences, setListeSequences] = useState([]) //[] parce que l'on attend un tableau d'objet
    useEffect(async () => {
        await axios.get('api/sequencetheoriques' ,
            /*{
                headers: {
                    'Authorization': headers
                }
            },*/ )
            .then((response) => {
                console.log(response )
                setListeSequences(response.data)
            }, (error) => {
                console.log(error)
            });
    }, [props]);

        return (
            <div className="container">
                <h5>Vos programmes</h5>
                <i>Vos programmes créés selon vos envies</i>
                {listeSequences.map(sequence => (
                    <Sequence key={sequence.id}   sequence={sequence}/>
                ))}
            </div>
        )
}
export default ListeProgrammesPersos