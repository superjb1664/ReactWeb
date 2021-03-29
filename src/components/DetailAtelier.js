import React, { useState, useEffect } from "react"
import {Link, useHistory, useParams} from 'react-router-dom'

import axios from "./AxiosInterceptor";

const DetailAtelier = ({atelier}) => {
        return (
            <li >
                <Link to={`/atelier/${atelier.id}`}>
                    {atelier.id} {atelier.titre}
                </Link>
            </li>
       )
}
export default DetailAtelier