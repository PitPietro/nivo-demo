import React from "react"
import BaseRadar from "./baseRadar";
import {Col, Container, Row} from "react-bootstrap";

export default function HomeRadar() {
    return (
        <>
            <Container>
                <h1>Radar</h1>
                <h2>Base Radar</h2>
                <p>The 1st Radar example is focused on a benchmark about the <i>soft skills</i> of a team</p>
                <Row>
                    <Col>
                        <BaseRadar />
                    </Col>
                    <Col>
                        [the form will be placed here]
                    </Col>
                </Row>
            </Container>
        </>
    )
}