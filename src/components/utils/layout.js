import React from "react"
import {Container} from "react-bootstrap";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
    console.log('Children = ' + children)
    return (
        <>
            <Container className="center-block text-center pt-5 mb-0 body-background" fluid>
                <Header/>
                {children}
            </Container>
            <Container className="text-center p-0 m-0 body-background" fluid>
                <Footer />
            </Container>
        </>

    )
}