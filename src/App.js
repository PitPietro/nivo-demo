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
import ReactBootstrapGetStarted from "./components/react-bootstrap/reactBootstrapGetStarted";
import Alerts from "./components/react-bootstrap/alerts/Alerts";
export default function App() {
    return (
        <div className="body-background">
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/react-bootstrap/get-started" component={ReactBootstrapGetStarted}/>
                <Route path="/react-bootstrap/alerts" component={Alerts}/>
                <Route path="/dismissible-alert-1" component={DismissibleAlert1}/>
                <Route path="/dismissible-alert-2" component={DismissibleAlert2}/>
                <Route path="/about" component={About}/>
                <Route path="/nivo-pie/" component={HomePie}/>
                <Route path="/nivo-radar/" component={HomeRadar}/>
                <Route component={PageNotFound}/>
            </Switch>
        </div>
    );
}
