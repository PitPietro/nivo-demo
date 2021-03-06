import React from "react";
import {Alert, Col, Container, Row} from "react-bootstrap";
import H2 from "../../utils/titles/h2";


export default function BasicAlerts() {
    return (
        <Container className="center-block text-center">
            <H2 title="Basic"/>
            <Row className="pt-3">
                <Col>
                    <Alert variant='primary'>Primary!</Alert>
                </Col>
                <Col>
                    <Alert variant='secondary'>Secondary!</Alert>
                </Col>
            </Row>
            <Row className="pt-3">
                <Col>
                    <Alert variant='success'>Success!</Alert>
                </Col>
                <Col>
                    <Alert variant='danger'>Danger!</Alert>
                </Col>
            </Row>
            <Row className="pt-3">
                <Col>
                    <Alert variant='warning'>Warning!</Alert>
                </Col>
                <Col>
                    <Alert variant='info'>Info!</Alert>
                </Col>
            </Row>
            <Row className="pt-3">
                <Col>
                    <Alert variant='dark'>Dark!</Alert>
                </Col>
                <Col>
                    <Alert variant='light'>Light!</Alert>
                </Col>
            </Row>
        </Container>
    );
}