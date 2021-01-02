import React from "react"
import BaseRadar from "./baseRadar";
import {Container} from "react-bootstrap";
import ClassComponentForm from "./classComponentForm";

export default function HomeRadar() {
    return (
        <>
            <Container>
                <h1>Radar</h1>
                <h2>Base Radar</h2>
                <p>The 1st Radar example is focused on a benchmark about the <i>soft skills</i> of a team</p>
                <BaseRadar/>
                <ClassComponentForm />
            </Container>
        </>
    )
}