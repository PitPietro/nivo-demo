import React, {Component} from "react";
import Title from "../utils/titles/title";
import Layout from "../utils/layout";
import Webcam from "react-webcam";

export default class WebcamHome extends Component {
    render() {
        return (
            <Layout>
                <Title title="Webcam Test"/>
                <div className="m-5">
                    <Webcam className="container" />
                </div>
            </Layout>
        );
    }
}