import {Component} from "react";

class H2 extends Component {
    render() {
        return (
            <h2 className="pt-3 text-center">{this.props.title}</h2>
        );
    }
}

export default H2;