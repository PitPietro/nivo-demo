import React, {useState} from "react";
import {Col, Container, Row, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import H2 from "../../utils/titles/h2";


function ToggleButtonControlled() {
    const [value, setValue] = useState([1, 3]);

    /*
    The second argument that will be passed to
    `handleChange` from `ToggleButtonGroup`
    is the SyntheticEvent object, but we are
    not using it in this example so we will omit it.
   */
    const handleChange = (val) => setValue(val);
    return (
        <>
            <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
                <ToggleButton value={1}>Option 1</ToggleButton>
                <ToggleButton value={2}>Option 2</ToggleButton>
                <ToggleButton value={3}>Option 3</ToggleButton>
            </ToggleButtonGroup>
        </>
    );
}


export default function ControlledButtons() {
    return (
        <Container className="center-block text-center pb-5">
            <H2 title="Controlled"/>
            <Row className="pt-3 mx-3">
                <Col>
                    <ToggleButtonControlled/>
                </Col>
            </Row>
        </Container>
    );
}