import React, {Component} from "react";
import logo from "../../logo.svg";

export default class HomeHeader extends Component {
    render () {
        return (
            <>
            <h1 className="pt-3">{this.props.name}</h1>
            <img src={logo} className="App-logo" alt="logo"/>
            </>
        );
    }
}

/*
> Simple Component
React components implement a render() method that takes input data and returns what to display. This example uses an
XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.
JSX is optional and not required to use React.
 */