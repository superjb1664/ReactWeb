import React, { useState, useEffect } from "react"

import ListeMesActivites from "./ListeMesActivites";
import ListeProgrammesTypes from "./ListeProgrammesTypes";
import ListeProgrammesPersos from "./ListeProgrammesPersos";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Seances = props => {
        return (
            <Container fluid >
                <Row lg={1}>
                    <Col>
                        <h1>Séances</h1>
                    </Col>
                </Row>
                <Row lg={2}>
                    <Col>
                        <ListeMesActivites token={props.token}/>
                    </Col>
                    <Col>

                        <Container fluid >
                            <Row lg={1}>
                                <Col style={{textAlign: "center"}}>
                                    <h3>Programmes disponibles</h3>
                                </Col>
                            </Row>
                            <Row lg={1}>

                                    <ListeProgrammesTypes  />

                            </Row>
                            <Row lg={1}>

                                    <ListeProgrammesPersos   />


                            </Row>
                        </Container>
                    </Col>
                </Row>

            </Container>
        )
}
export default Seances