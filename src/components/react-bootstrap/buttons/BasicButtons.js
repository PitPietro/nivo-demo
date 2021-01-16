import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import H2 from "../../utils/titles/h2";


export default function BasicButtons() {
    return (
        <Container className="center-block text-center py-5">
            <H2 title="Basic"/>
            <Row className="pt-3 mx-3">
                <p className="text-justify">
                    Just modify the <code className="text-light">variant</code> prop instead of adding the <code
                    className="text-light">className</code>:<br/>
                    <code className="text-light">&lt;Button variant="primary"&gt;</code> is better than <code
                    className="text-light"> &lt;Button
                    className="btn-primary"&gt;</code>
                </p>
            </Row>
            <Row className="pt-3">
                <Col className="ml-lg-3 bg-light py-3">
                    <Button variant="primary" className="py-2 px-5 my-2">Primary</Button>{' '}<br/>
                    <Button variant="success" className="py-2 px-5 my-2">Success</Button>{' '}<br/>
                    <Button variant="warning" className="py-2 px-5 my-2">Warning</Button>{' '}<br/>
                    <Button variant="dark" className="py-2 px-5 my-2">Dark</Button>{' '}<br/>
                    <Button variant="link" className="py-2 px-5 my-2">Link</Button><br/>
                </Col>
                <Col className="mr-lg-3 bg-dark py-3">
                    <Button variant="secondary" className="py-2 px-5 my-2">Secondary</Button>{' '}<br/>
                    <Button variant="info" className="py-2 px-5 my-2">Info</Button>{' '}<br/>
                    <Button variant="danger" className="py-2 px-5 my-2">Danger</Button><br/>
                    <Button variant="light" className="py-2 px-5 my-2">Light</Button><br/>
                    <Button variant="link" className="py-2 px-5 my-2">Link</Button><br/>
                </Col>
            </Row>
        </Container>
    );
}
