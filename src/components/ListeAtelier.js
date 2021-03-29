import React, { useState, useEffect } from "react"

import {v4 as uuidv4} from "uuid";

import Header from "./Header"
import { Link } from "react-router-dom";
import DetailAtelier from "./DetailAtelier";
import axios from "./AxiosInterceptor";



const ListeAtelier = props => {
    const [ateliers, setAteliers] = useState([]) //[] parce que l'on attend un tableau d'objet
    useEffect(async () => {
         await axios.get('api/ateliers'  )
            .then((response) => {
                console.log(response )
                setAteliers(response.data)
            }, (error) => {
                console.log(error)
            });
    }, []);
        //useEffect sert à suivre le cycle de vie de l'objet.
    // Qu'est-ce que le cycle de vie d'un objet ?
    // Chaque composent rect est crée, mise à jour en boucle puis est détruit.
    // les useEffect sont appelés à la création puis à la mise à jour puis à la destruction ! Tout ça avec la même méthode...
    // Comment s'en sortir ?



        return (


            <div className="container">
                <h1>Nos ateliers</h1>
                <ul  >

                    {ateliers.map(atelier => (
                        <DetailAtelier key={atelier.id} atelier={atelier}/>
                    ))}
                </ul>

            </div>

        )

}
export default ListeAtelier