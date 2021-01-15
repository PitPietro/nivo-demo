import React from "react";
import {Alert, Button, Col, Container, Row} from "react-bootstrap";
import H3 from "../../utils/titles/h3";


export default function OutlineAlerts() {
    return (
        <Container className="center-block text-center">
            <H3 title="3.2. Outline"/>
            <Row className="pt-3 mx-3">

                <p className="text-justify">
                    <code className="text-light">outline-*</code> variants with no background color: <code
                    className="text-light">&lt;Button
                    variant="outline-primary"&gt;</code>.
                </p>
            </Row>
            <Row className="pt-3 mx-3">
                <Col className="ml-lg-3 bg-light py-3">
                    <Button variant="outline-primary" className="py-2 px-5 my-2">Primary</Button>{' '}<br/>
                    <Button variant="outline-success" className="py-2 px-5 my-2">Success</Button>{' '}<br/>
                    <Button variant="outline-warning" className="py-2 px-5 my-2">Warning</Button>{' '}<br/>
                    <Button variant="outline-dark" className="py-2 px-5 my-2">Dark</Button>{' '}<br/>
                    <Button variant="outline-link" className="py-2 px-5 my-2">Link</Button><br/>
                </Col>
                <Col className="mr-lg-3 bg-dark py-3">
                    <Button variant="outline-secondary" className="py-2 px-5 my-2">Secondary</Button>{' '}<br/>
                    <Button variant="outline-info" className="py-2 px-5 my-2">Info</Button>{' '}<br/>
                    <Button variant="outline-danger" className="py-2 px-5 my-2">Danger</Button><br/>
                    <Button variant="outline-light" className="py-2 px-5 my-2">Light</Button><br/>
                    <Button variant="outline-link" className="py-2 px-5 my-2">Link</Button><br/>
                </Col>
            </Row>
        </Container>
    );
}