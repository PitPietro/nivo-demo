import React from "react";
import {Col, Container, Row, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import H2 from "../../utils/titles/h2";


function ToggleButtonUncontrolled() {
    return (
        <>
            <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2">
                <ToggleButton value={1}>Checkbox 1 (pre-checked)</ToggleButton>
                <ToggleButton value={2}>Checkbox 2</ToggleButton>
                <ToggleButton value={3}>Checkbox 3 (pre-checked)</ToggleButton>
            </ToggleButtonGroup>
            <br/>
            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                <ToggleButton value={1}>Radio 1 (pre-checked)</ToggleButton>
                <ToggleButton value={2}>Radio 2</ToggleButton>
                <ToggleButton value={3}>Radio 3</ToggleButton>
            </ToggleButtonGroup>
        </>
    );
}


export default function UncontrolledButtons() {
    return (
        <Container className="center-block text-center">
            <H2 title="Uncontrolled"/>
            <Row className="pt-3 mx-3">

                <p className="text-justify">
                    For a nicer experience with checked state management use
                    the <code className="text-light">&lt;ToggleButtonGroup&gt;</code> instead of a <code className="text-light">&lt;ButtonGroup
                    toggle&gt;</code> component. The group behaves as a form component, where the <code className="text-light">value</code> is
                    an array of the selected <code className="text-light">value</code>s for a named checkbox group or the single
                    toggled <code className="text-light">value</code> in a similarly named radio group.
                </p>
                <Col>
                    <ToggleButtonUncontrolled/>
                </Col>
            </Row>
        </Container>
    );
}