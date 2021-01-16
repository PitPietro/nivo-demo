import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import H3 from "../../utils/titles/h3";


export default function SizeButtons() {
    return (
        <Container className="center-block text-center">
            <H3 title="3.4. Size"/>
            <Row className="pt-3 mx-3">
                <p className="text-justify">
                    Fancy larger or smaller buttons? Add <code className="text-light">size="lg"</code>, <code className="text-light">size="sm"</code> for additional
                    sizes.<br/>
                    Create block level buttons—those that span the full width of a parent—by adding <code className="text-light">block</code>
                </p>
            </Row>
            <Row className="pt-3 mx-3">
                <Col>
                    <div className="mb-2">
                        <Button variant="primary" size="lg">
                            Large button
                        </Button>{' '}
                    </div>
                    <div>
                        <Button variant="primary" size="sm">
                            Small button
                        </Button>{' '}
                    </div>
                </Col>
                <Col>
                    <Button variant="primary" size="lg" block>
                        Block level button
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}