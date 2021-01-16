import React, {Component} from "react";
import PitImg from "../../imgs/pit_logo.png";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";

export default class Header extends Component {
    y_value = 50
    state = {
        bg: "transparent"
    };

    listenScrollEvent = e => {
        if(window.scrollY > this.y_value) {
            this.setState({bg: "dark"});
        } else {
            this.setState({bg: "transparent"});
        }
    };

    componentDidMount() {
        window.addEventListener("scroll", this.listenScrollEvent);
    }

    render ()
    {
        return (
            <div>
                <Navbar fixed="top" expand="lg" variant="dark" bg={this.state.bg}>
                    <Navbar.Brand href="/">
                        <img alt="" src={PitImg} width="30" height="30" className="d-inline-block align-top"/>
                        {' '}
                        Pietro Poluzzi
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <NavDropdown title="React Bootstrap" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/react-bootstrap/get-started">Get started</NavDropdown.Item>
                                <NavDropdown.Item href="/react-bootstrap/alerts">Alerts</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="NiVo" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/nivo-pie">Pie</NavDropdown.Item>
                                <NavDropdown.Item href="/nivo-radar">Radar</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/learn-css/">Learn CSS</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

/*
> Margin
The space outside the border. It separates a block from other blocks.
It is transparent, but does not include background images or background colors applied to the element.
Using bootstrap you can specify:
~ m[type]-[screen_type]-[number]
~ mx-[number] for the horizontal margin
~ mx-lg-[number] for the horizontal margin in the large screens
~ my-[number] for the vertical margin
~ ...

> Padding
The space kept between the content and the border. It separates the content of a block from its edge.
It is transparent and includes the background image or background color of the element.
Using bootstrap you can specify:
~ p[type]-[screen_type]-[number]
~ px-[number] for the horizontal padding
~ px-lg-[number] for the horizontal padding in the large screens
~ py-[number] for the vertical padding
~ ...

Note that [type] can be:
~ none: all the directions (i.e. p-0)
~ u up
~ d down
~ y up & down
~ l left
~ r right
~ x left & right

Note that [screen_type] can be:
1. lg for large screens
2. md for middle-width screens
3. sm for small screens

Note that [number] can be from 0 to 3.
 */