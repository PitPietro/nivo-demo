import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import H2 from "../../utils/titles/h2";


export default function ActiveButtons() {
    return (
        <Container className="center-block text-center">
            <H2 title="Active & Disabled"/>
            <Row className="pt-3 mx-3">
                <p className="text-justify">
                    To set a button's active state simply set the component's <code className="text-light">active</code> prop.<br/>
                    Make buttons look inactive by adding the <code className="text-light">disabled</code> prop to.
                </p>
            </Row>
            <Row className="pt-3 mx-3">
                <Col>
                    <Button variant="primary" active>
                        Primary button
                    </Button>{' '}
                </Col>
                <Col>
                    <Button variant="secondary" disabled>
                        Disabled button
                    </Button>{' '}
                </Col>
            </Row>
        </Container>
    );
}