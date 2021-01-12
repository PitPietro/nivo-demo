import React from "react"
import BasePie from "./basePie";
import Layout from "../../utils/layout";
import Title from "../../utils/titles/title";
import H2 from "../../utils/titles/h2";

export default function HomePie() {
    return (
        <Layout>
            <Title title="Pie" />
            <H2 title="Base Pie" />
            <BasePie/>
        </Layout>
    )
}