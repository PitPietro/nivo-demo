import React, {useState} from "react";
import {Alert, Button, Col, Row} from "react-bootstrap";
import Title from "../../utils/titles/title";
import Layout from "../../utils/layout";

export default function DismissibleAlert2() {
    const [show, setShow] = useState(true);

    return (
        <Layout>
            <Title title="Dismissible Alert 2" />
            <Row className="pt-3">
                <Col>
                    <Alert show={show} variant="success">
                        <Alert.Heading>How's it going?!</Alert.Heading>
                        <p className="text-justify">
                            I love green! I think it's a wonderful color since I like grass' smell and mountains in summer time.
                        </p>
                        <hr/>
                        <div className="d-flex justify-content-end">
                            <Button onClick={() => setShow(false)} variant="outline-success">
                                You can close me!
                            </Button>
                        </div>
                    </Alert>

                    {!show && <Button className="btn-success" onClick={() => setShow(true)}>Show Alert</Button>}
                </Col>
            </Row>
        </Layout>
    );
}