import React from "react";
import {Container, Row, Col, Alert} from "react-bootstrap";
import {Link} from "react-router-dom";
import H3 from "../../utils/titles/h3";
import H2 from "../../utils/titles/h2";


// https://react-bootstrap.netlify.app/components/alerts/
export default function Alerts() {
    return (
        <Container className="center-block text-center">
            <H2 title="2. Alerts"/>
            <H3 title="2.1. Basic" />
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

            <H3 title="2.2. Link" />
            <Row className="pt-3">
                <Col>
                    <Alert variant='primary'>
                        Click <Alert.Link href="#">here</Alert.Link>
                    </Alert>
                </Col>
                <Col>
                    <Alert variant='secondary'>
                        Click <Alert.Link href="#">here</Alert.Link>
                    </Alert>
                </Col>
            </Row>
            <Row className="pt-3">
                <Col>
                    <Alert variant='success'>
                        Click <Alert.Link href="#">here</Alert.Link>
                    </Alert>
                </Col>
                <Col>
                    <Alert variant='danger'>
                        Click <Alert.Link href="#">here</Alert.Link>
                    </Alert>
                </Col>
            </Row>
            <Row className="pt-3">
                <Col>
                    <Alert variant='warning'>
                        Click <Alert.Link href="#">here</Alert.Link>
                    </Alert>
                </Col>
                <Col>
                    <Alert variant='info'>
                        Click <Alert.Link href="#">here</Alert.Link>
                    </Alert>
                </Col>
            </Row>
            <Row className="pt-3">
                <Col>
                    <Alert variant='dark'>
                        Click <Alert.Link href="#">here</Alert.Link>
                    </Alert>
                </Col>
                <Col>
                    <Alert variant='light'>
                        Click <Alert.Link href="#">here</Alert.Link>
                    </Alert>
                </Col>
            </Row>

            <H3 title="2.3. Additional Content" />
            <Row className="pt-3">
                <Col>
                    <Alert variant="success">
                        <Alert.Heading>I'm an Heading</Alert.Heading>
                        <p>
                            Alerts can contain whatever content you like. Headers, paragraphs, dividers, ...
                        </p>
                        <hr />
                        <p className="mb-0">
                            I'm another paragraph and I look cool.
                        </p>
                    </Alert>
                </Col>
            </Row>
            <Row className="pt-3">
                <Col>
                    <Alert variant="danger">
                        <Alert.Heading>Danger Heading</Alert.Heading>
                        <p>
                            Alerts can contain whatever content you like. Headers, paragraphs, dividers, ...
                        </p>
                        <hr />
                        <p className="mb-0">
                            I'm another danger paragraph and I look cool.
                        </p>
                    </Alert>
                </Col>
            </Row>

            <H3 title="2.4. Dismissing" />
            <p className="text-left">
                Add the <code className="text-light">dismissible</code> prop to add a functioning dismiss button to the Alert.
            </p>
            <p className="text-left p-3 bg-light">
                Click <Link target="_blank" to="/dismissible-alert-1">here</Link> for the dismissible alert!<br />
                Click <Link target="_blank" to="/dismissible-alert-2">here</Link> for another dismissible alert!
            </p>
        </Container>
    );
}