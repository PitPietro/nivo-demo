import React from "react";
import './App.css';
import {Route, Switch} from "react-router-dom";
import HomePage from "./components/homepage/homePage";
import HomeRadar from "./components/nivo/radar/homeRadar";
import HomePie from "./components/nivo/pie/homePie";
import PageNotFound from "./PageNotFound";
import About from "./components/About";
import DismissibleAlert2 from "./components/react-bootstrap/alerts/DismissibleAlert2";
import DismissibleAlert1 from "./components/react-bootstrap/alerts/DismissibleAlert1";
import GetStarted from "./components/react-bootstrap/GetStarted";
import Alerts from "./components/react-bootstrap/alerts/Alerts";
import Buttons from "./components/react-bootstrap/buttons/Buttons";
import Accordions from "./components/react-bootstrap/accordions/Accordions";
import WebcamHome from "./components/webcam/webcamHome";
import ScreenDimension from "./components/tests/screenDimension";
import reduxHome from "./components/redux/reduxHome";

export default function App() {
    return (
        <div className="body-background">
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/react-bootstrap/get-started" component={GetStarted}/>
                <Route path="/react-bootstrap/alerts" component={Alerts}/>
                <Route path="/react-bootstrap/accordions" component={Accordions}/>
                <Route path="/react-bootstrap/buttons" component={Buttons}/>
                <Route path="/dismissible-alert-1" component={DismissibleAlert1}/>
                <Route path="/dismissible-alert-2" component={DismissibleAlert2}/>
                <Route path="/webcam/" component={WebcamHome}/>
                <Route path="/test/screen/" component={ScreenDimension}/>
                <Route path="/about" component={About}/>
                <Route path="/nivo-pie/" component={HomePie}/>
                <Route path="/nivo-radar/" component={HomeRadar}/>
                <Route path="/redux-home" component={reduxHome}/>
                <Route component={PageNotFound}/>
            </Switch>
        </div>
    );
}
