import React, {useEffect, useState} from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import H2 from "../../utils/titles/h2";

function simulateNetworkRequest() {
    const timeout = 2000
    return new Promise((resolve) => setTimeout(resolve, timeout));
}

function LoadingButton() {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setLoading(false);
            });
        }
    }, [isLoading]);

    const handleClick = () => setLoading(true);

    return (
        <Button
            variant="primary"
            disabled={isLoading}
            onClick={!isLoading ? handleClick : null}
        >
            {isLoading ? 'Loading…' : 'Click to load'}
        </Button>
    );
}


export default function LoadingStateButtons() {
    return (
        <Container className="center-block text-center">
            <H2 title="Button loading state"/>
            <Row className="pt-3 mx-3">
                <h2 className="pt-2 text-left">Button loading state</h2>
                <p className="text-justify">
                    When activating an asynchronous action from a button it is a good UX pattern to give the user
                    feedback as to the loading state, this can easily be done by updating your <code className="text-light">&lt;Button
                    /&gt;</code>s props from a state change like below.
                </p>
                <Col>
                    <LoadingButton/>
                </Col>
            </Row>
        </Container>
    );
}