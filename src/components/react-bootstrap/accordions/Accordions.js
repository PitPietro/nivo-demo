import React from "react";
import Layout from "../../utils/layout";
import Title from "../../utils/titles/title";
import BasicAccordions from "./BasicAccordions";
import FullyCollapsedAccordions from "./FullyCollapsedAccordions";

export default function Accordions() {
    return (
        <Layout>
            <Title title="Accordion" />
            <BasicAccordions />
            <FullyCollapsedAccordions />
        </Layout>
    );
}