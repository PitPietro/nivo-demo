import React from "react";
import {Accordion, Button, Card, Col, Container, Row} from "react-bootstrap";
import H2 from "../../utils/titles/h2";


export default function FullyCollapsedAccordions() {
    return (
        <Container className="center-block text-center pb-5">
            <H2 title="Fully Collapsed State"/>
            <Row className="pt-3 mx-3">
                <Col>
                    <p className="text-justify">
                        If you want your Accordion to start in a fully-collapsed state, then simply don't pass in a <code className="text-light">defaultActiveKey</code> prop to <code className="text-light">Accordion</code>.
                    </p>
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    Click me!
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>Hello! I'm the body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    Click me!
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>Hello! I'm another body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    );
}