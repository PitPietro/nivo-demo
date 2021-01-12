import logo from "../logo.svg";
import React from "react";
import Layout from "./utils/layout";

function About() {
    return (
        <Layout>
            <h1 className="pt-3">About me</h1>
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
                Hello, I'm Pit
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
            <div>
            </div>
        </Layout>
    );
}

export default About;