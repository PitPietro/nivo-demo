import React, {Component} from "react";
import Title from "../utils/titles/title";
import Layout from "../utils/layout";
import MediaQuery from 'react-responsive'
import H2 from "../utils/titles/h2";
import H3 from "../utils/titles/h3";

export default class ScreenDimension extends Component {

    render() {
        const laptopMinDeviceWidth = 1224;
        return (
            <Layout>
                <Title title="Screen Test"/>
                <div>
                    <MediaQuery minDeviceWidth={laptopMinDeviceWidth}>
                        <div className="p-5 m-5">
                            <H2 title="You are a desktop or laptop"/>
                        </div>
                    </MediaQuery>
                    <MediaQuery maxDeviceWidth={laptopMinDeviceWidth}>
                        <div className="p-5 m-5">
                            <H2 title="You are a tablet or mobile phone"/>
                        </div>
                    </MediaQuery>

                    <MediaQuery orientation='portrait'>
                        <div className="p-5 m-5">
                            <H3 title="You are portrait"/>
                        </div>
                    </MediaQuery>
                    <MediaQuery orientation='landscape'>
                        <div className="p-5 m-5">
                            <H3 title="You are landscape"/>
                        </div>
                    </MediaQuery>

                    <MediaQuery minResolution='2dppx'>
                        <div className="p-5 m-5">
                            You are retina
                        </div>
                    </MediaQuery>
                </div>
            </Layout>
        );
    }
}