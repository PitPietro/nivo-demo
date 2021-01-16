import React from "react";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import H2 from "../../utils/titles/h2";


export default function DismissibleAlerts() {
    return (
        <Container className="center-block text-center">
            <H2 title="Dismissing"/>
            <p className="text-left">
                Add the <code className="text-light">dismissible</code> prop to add a functioning dismiss button to the
                Alert.
            </p>
            <p className="text-left p-3 bg-light">
                Click <Link target="_blank" to="/dismissible-alert-1">here</Link> for the dismissible alert!<br/>
                Click <Link target="_blank" to="/dismissible-alert-2">here</Link> for another dismissible alert!
            </p>
        </Container>
    );
}