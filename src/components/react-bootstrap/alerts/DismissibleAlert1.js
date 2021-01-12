import React, {useState} from "react";
import {Alert, Button, Col, Container, Row} from "react-bootstrap";
import Layout from "../../utils/layout";
import Title from "../../utils/titles/title";

export default function DismissibleAlert1() {
    const [show, setShow] = useState(true);
    const my_mail = 'pit.pietro@protonmail.com'
    const mailto = 'mailto:' + my_mail

    if (show) {
        return (
            <Layout>
                <Title title="Dismissible Alert 1" />
                <Row className="pt-3">
                    <Col>
                        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                            <Alert.Heading>Ops... Got an error!</Alert.Heading>
                            <p>
                                I suggest you to send a feedback to the following email address:
                            </p>
                            <hr/>
                            <p className="text-left">
                                Send me an email to <Alert.Link href={mailto}>{my_mail}</Alert.Link>
                            </p>
                        </Alert>
                    </Col>
                </Row>
            </Layout>
        );
    }

    return (
        <Container className="center-block text-center py-5">
            <h1 className="pt-3">Dismissible Alert 1</h1>
            <Button onClick={() => setShow(true)} className="btn-danger">
                Show Alert
            </Button>
        </Container>
    );
}