import {Component} from "react";

class H3 extends Component {
    render() {
        return (
            <h3 className="pt-3 text-center">{this.props.title}</h3>
        );
    }
}

export default H3;