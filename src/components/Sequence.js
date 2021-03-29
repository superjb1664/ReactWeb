import React, { useState, useEffect } from "react"


const Sequence = props => {
        const src="/Lvl"+props.sequence.niveau+".png"
        return (
            <>
                    <img src={"/Lvl"+props.sequence.niveau+".png"} width="30" height="30"/>
{props.sequence.titre}

                </>
        )
}
export default Sequence