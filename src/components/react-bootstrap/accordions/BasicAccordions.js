import React from "react";
import {Accordion, Button, Card, Col, Container, Row} from "react-bootstrap";
import H2 from "../../utils/titles/h2";


export default function BasicAccordions() {
    return (
        <Container className="center-block text-center pb-5">
            <H2 title="Basic"/>
            <Row className="pt-3 mx-3">
                <Col>
                    <p className="text-justify">
                        Accordions use <code className="text-light">Card</code> components to provide styling of the <code className="text-light">Accordion</code> components. Use <code className="text-light">AccordionToggle</code> to provide a button that switches between each <code className="text-light">AccordionCollapse</code> component.
                    </p>
                    <Accordion defaultActiveKey="0">
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