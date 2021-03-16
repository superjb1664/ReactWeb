import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'

import axios from "axios";

const Atelier = props => {



    const [atelier, setAtelier] = useState({}) // {} parce que l'on attend un seul objet !
    const { id } = useParams()


    useEffect(async () => {

         await axios.get( `http://localhost:8000/api/ateliers/${id}` )
            .then((response) => {
                console.log(response.data )
                setAtelier(response.data )
            }, (error) => {
                console.log(error)
            });
    }, atelier);



        return (
            <div className="container">
                <h3>Atelier : {atelier.titre} </h3>
            </div>
       )

}
export default Atelier