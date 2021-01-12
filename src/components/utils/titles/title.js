import {Component} from "react";

class Title extends Component {
    render() {
        return (
            <h1 className="pt-3 text-center">{this.props.title}</h1>
        );
    }
}

export default Title;