import React from "react";
import './App.css';
import Layout from "./components/util/layout";
import {Route, Switch} from "react-router-dom";
import HomePage from "./components/pages/homepage";

export default function App() {
  return (
    <Layout>
      <Switch>
          <Route exact path="/" component={HomePage} />
      </Switch>
    </Layout>
  );
}
