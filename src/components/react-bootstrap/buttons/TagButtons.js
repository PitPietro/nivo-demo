import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import H3 from "../../utils/titles/h3";


export default function TagButtons() {
    return (
        <Container className="center-block text-center">
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
        </Container>
    );
}