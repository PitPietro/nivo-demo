import React, {useEffect, useState} from "react";
import {Button, Col, Container, Row, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import {ButtonGroup} from "@material-ui/core";
import H2 from "../../utils/titles/h2";
import H3 from "../../utils/titles/h3";

// https://react-bootstrap.netlify.app/components/buttons/
// https://stackoverflow.com/questions/5068951/what-do-lt-and-gt-stand-for#5068965

/*
with pt-3 the padding top is set to be the $spacer variable
with mx-3 set the both the left and right padding to $spacer
 */

function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
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

export default function Buttons() {
    return (
        <Container className="center-block text-center py-5">
            <H2 title="3. Buttons"/>
            <H3 title="3.1. Basic"/>
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

            <H3 title="3.2. Outline"/>
            <Row className="pt-3 mx-3">

                <p className="text-justify">
                    <code className="text-light">outline-*</code> variants with no background color: <code
                    className="text-light">&lt;Button
                    variant="outline-primary"&gt;</code>.
                </p>
            </Row>
            <Row className="pt-3 mx-3">
                <Col className="ml-lg-3 bg-light py-3">
                    <Button variant="outline-primary" className="py-2 px-5 my-2">Primary</Button>{' '}<br/>
                    <Button variant="outline-success" className="py-2 px-5 my-2">Success</Button>{' '}<br/>
                    <Button variant="outline-warning" className="py-2 px-5 my-2">Warning</Button>{' '}<br/>
                    <Button variant="outline-dark" className="py-2 px-5 my-2">Dark</Button>{' '}<br/>
                    <Button variant="outline-link" className="py-2 px-5 my-2">Link</Button><br/>
                </Col>
                <Col className="mr-lg-3 bg-dark py-3">
                    <Button variant="outline-secondary" className="py-2 px-5 my-2">Secondary</Button>{' '}<br/>
                    <Button variant="outline-info" className="py-2 px-5 my-2">Info</Button>{' '}<br/>
                    <Button variant="outline-danger" className="py-2 px-5 my-2">Danger</Button><br/>
                    <Button variant="outline-light" className="py-2 px-5 my-2">Light</Button><br/>
                    <Button variant="outline-link" className="py-2 px-5 my-2">Link</Button><br/>
                </Col>
            </Row>

            <H3 title="3.3. Button tags"/>
            <Row className="pt-3 mx-3">
                <p className="text-justify">
                    <code className="text-light">&lt;Button&gt;</code> components will render a HTML <code className="text-light">&lt;button&gt;</code> element.
                    However you can render whatever you'd like, adding a <code className="text-light">href</code> prop will automatically
                    render an <code className="text-light">&lt;a /&gt;</code> element. You can use the as prop to render whatever your heart
                    desires. React Bootstrap will take care of the proper ARIA roles for you.
                </p>
                <Col>
                    <Button href="#" className="px-3 mr-3">Link</Button>
                    <Button type="submit" className="px-3 mx-3 mx-3">Button</Button>{' '}
                    <Button as="input" type="button" value="Input" className="px-3 mx-3"/>{' '}
                    <Button as="input" type="submit" value="Submit" className="px-3 mx-3"/>{' '}
                    <Button as="input" type="reset" value="Reset" className="px-3 ml-3"/>
                </Col>
            </Row>

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
            <H3 title="3.5. Active & Disabled"/>
            <Row className="pt-3 mx-3">
                <p className="text-justify">
                    To set a button's active state simply set the component's <code>active</code> prop.<br/>
                    Make buttons look inactive by adding the <code>disabled</code> prop to.
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
            <Row className="pt-3 mx-3">
                <H3 title="3.6. Button loading state"/>
                <h2 className="pt-2 text-left">Button loading state</h2>
                <p className="text-justify">
                    When activating an asynchronous action from a button it is a good UX pattern to give the user
                    feedback as to the loading state, this can easily be done by updating your <code>&lt;Button
                    /&gt;</code>s props from a state change like below.
                </p>
                <Col>
                    <LoadingButton/>
                </Col>
            </Row>
            <Row className="pt-3 mx-3">
                <H3 title="3.7. Checkbox / Radio"/>
                <p className="text-justify">
                    Buttons can also be used to style <code>checkbox</code> and <code>radio</code> form elements. This
                    is helpful when you want a toggle button that works neatly inside an HTML form.
                </p>
                <Col>
                    <p className="text-justify">
                        This handles styling, but requires manually controlling the <code>checked</code> state for each
                        radio or checkbox in the group.
                    </p>
                    <ToggleButtonExample/>
                </Col>
            </Row>
            <Row className="pt-3 mx-3">
                <H3 title="3.8. Uncontrolled"/>
                <p className="text-justify">
                    For a nicer experience with checked state management use
                    the <code>&lt;ToggleButtonGroup&gt;</code> instead of a <code>&lt;ButtonGroup
                    toggle&gt;</code> component. The group behaves as a form component, where the <code>value</code> is
                    an array of the selected <code>value</code>s for a named checkbox group or the single
                    toggled <code>value</code> in a similarly named radio group.
                </p>
                <Col>
                    <ToggleButtonUncontrolled/>
                </Col>
            </Row>
            <Row className="pt-3 mx-3">
                <H3 title="3.9. Controlled"/>
                <Col>
                    <ToggleButtonControlled/>
                </Col>
            </Row>
        </Container>
    );
}
