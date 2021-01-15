import React from "react";
import {Alert, Col, Container, Row} from "react-bootstrap";
import H3 from "../../utils/titles/h3";


export default function LinkAlerts() {
    return (
        <Container className="center-block text-center">
            <H3 title="2.2. Link"/>
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
        </Container>
    );
}