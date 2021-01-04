import React from "react"
import {Container, Nav, Navbar} from "react-bootstrap";

export default function Header() {
    return (
        <>
            <Container className="px-0" fluid>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/">Nivo Demo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/pie">Pie</Nav.Link>
                            <Nav.Link href="/radar">Radar</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </>
    )
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