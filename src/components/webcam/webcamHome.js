import React, {Component} from "react";
import Title from "../utils/titles/title";
import Layout from "../utils/layout";
import Webcam from "react-webcam";
import MediaQuery from 'react-responsive';

export default class WebcamHome extends Component {

    render() {
        const laptopMinDeviceWidth = 1224;

        return (
            <Layout>
                <Title title="Webcam Test"/>
                <div>
                    <MediaQuery minDeviceWidth={laptopMinDeviceWidth}>
                        <div className="m-5">
                            <Webcam className="container" />
                        </div>
                    </MediaQuery>
                    <MediaQuery maxDeviceWidth={laptopMinDeviceWidth}>
                        <p>Comming soon</p>
                    </MediaQuery>

                    <MediaQuery orientation='portrait'>
                        <div>You are portrait</div>
                    </MediaQuery>
                    <MediaQuery orientation='landscape'>
                        <div>You are landscape</div>
                    </MediaQuery>

                    <MediaQuery minResolution='2dppx'>
                        <div>You are retina</div>
                    </MediaQuery>
                </div>
            </Layout>
        );
    }
}

/*

 */