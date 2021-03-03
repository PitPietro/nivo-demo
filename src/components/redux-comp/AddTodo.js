import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../../redux/actions";
import {Button} from "react-bootstrap";



class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { input: "" };

        this.keyEnter = this.keyEnter.bind(this);
    }

    updateInput = input => {
        this.setState({ input });
    };

    handleAddTodo = () => {
        this.props.addTodo(this.state.input);
        this.setState({ input: "" });
    };

    // very useful
    // https://stackoverflow.com/questions/35862979/how-to-detect-which-react-component-triggers-onkeyup-event

    // https://codepen.io/Audiosyncrasy/pen/pQdpbJ

    keyEnter(event) {
        if (event.key === "Enter") {
            this.handleAddTodo();
        }
    }

    render() {
        return (
            <div>
                <input
                    onChange={e => this.updateInput(e.target.value)}
                    onKeyPress={this.keyEnter}
                    value={this.state.input}
                />
                <Button variant="success" className="add-todo" onClick={this.handleAddTodo}>
                    Add Todo
                </Button>
            </div>
        );
    }
}

export default connect(
    null,
    { addTodo }
)(AddTodo);
// export default AddTodo;
