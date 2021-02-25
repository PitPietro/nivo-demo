import React from "react"
import BaseRadar from "./baseRadar";
import Layout from "../../utils/layout";

export default function HomeRadar() {
    return (
        <>
            <Layout>
                <h1>Radar</h1>
                <h2>Base Radar</h2>
                <p>The 1st Radar example is focused on a benchmark about the <i>soft skills</i> of a team</p>
                <BaseRadar/>
            </Layout>
        </>
    )
}

// 'fluid' allow the Container to fill all of it's available horizontal space.
// It is equal to this CSS rule -> max-width: '100%'