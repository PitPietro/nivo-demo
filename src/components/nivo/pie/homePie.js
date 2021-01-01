import React from "react"
import BasePie from "./basePie";
import {Container} from "react-bootstrap";

export default function HomePie() {
    return (
        <>
            <Container>
                <h1>Pie</h1>
                <h2>Base Pie</h2>
                <BasePie />
            </Container>
        </>
    )
}