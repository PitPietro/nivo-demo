import React from "react";
import Layout from "../../utils/layout";
import Title from "../../utils/titles/title";
import BasicButtons from "./BasicButtons";
import OutlineAlerts from "./OutlineButtons";
import TagButtons from "./TagButtons";
import SizeButtons from "./SizeButtons";
import ActiveButtons from "./ActiveButtons";
import LoadingStateButtons from "./LoadingStateButtons";
import CheckboxRadioButtons from "./CheckboxRadioButtons";
import UncontrolledButtons from "./UncontrolledButtons";
import ControlledButtons from "./ControlledButtons";

export default function Buttons() {
    return (
        <Layout>
            <Title title="Buttons"/>
            <BasicButtons />
            <OutlineAlerts />
            <TagButtons />
            <SizeButtons />
            <ActiveButtons />
            <LoadingStateButtons />
            <CheckboxRadioButtons />
            <UncontrolledButtons />
            <ControlledButtons />
        </Layout>

    )
}