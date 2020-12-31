import React from "react";
import './App.css';
import Layout from "./components/util/layout";
import {Route, Switch} from "react-router-dom";
import HomePage from "./components/pages/homepage";
import HomeRadar from "./components/nivo/radar/homeRadar";
import HomePie from "./components/nivo/pie/homePie";

export default function App() {
    return (
        <Layout>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/radar/" component={HomeRadar}/>
                <Route path="/pie/" component={HomePie}/>
            </Switch>
        </Layout>
    );
}
