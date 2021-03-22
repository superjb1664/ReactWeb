import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import Table  from "react-bootstrap/Table";
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
    }, []);

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
                            {atelier.description}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Unité de performance
                        </td>
                        <td>
                            {atelier.description}
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </div>
       )
}
export default Atelier