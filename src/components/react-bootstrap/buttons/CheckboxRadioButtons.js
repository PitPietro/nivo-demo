import React, {useState} from "react";
import {Col, Container, Row, ToggleButton} from "react-bootstrap";
import H2 from "../../utils/titles/h2";
import {ButtonGroup} from "@material-ui/core";

function ToggleButtonExample() {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        {name: 'Car', value: '1'},
        {name: 'Bike', value: '2'},
        {name: 'Plane', value: '3'},
    ];

    return (
        <>
            <ButtonGroup toggle className="mb-2">
                <ToggleButton
                    type="checkbox"
                    variant="secondary"
                    checked={checked}
                    value="1"
                    onChange={(e) => setChecked(e.currentTarget.checked)}
                >
                    Checked
                </ToggleButton>
            </ButtonGroup>
            <br/>
            <ButtonGroup toggle>
                {radios.map((radio, idx) => (
                    <ToggleButton
                        key={idx}
                        type="radio"
                        variant="secondary"
                        name="radio"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                    >
                        {radio.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
        </>
    );
}


export default function CheckboxRadioButtons() {
    return (
        <Container className="center-block text-center py-5">
            <H2 title="Checkbox / Radio"/>
            <Row className="pt-3 mx-3">

                <p className="text-justify">
                    Buttons can also be used to style <code className="text-light">checkbox</code> and <code className="text-light">radio</code> form elements. This
                    is helpful when you want a toggle button that works neatly inside an HTML form.
                </p>
                <Col>
                    <p className="text-justify">
                        This handles styling, but requires manually controlling the <code className="text-light">checked</code> state for each
                        radio or checkbox in the group.
                    </p>
                    <ToggleButtonExample/>
                </Col>
            </Row>
        </Container>
    );
}
