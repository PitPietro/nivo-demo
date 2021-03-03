import React from "react";
import {connect} from "react-redux";
import {addTodo} from "../../redux/actions";
import {Button} from "react-bootstrap";


class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {input: ""};

        this.keyEnter = this.keyEnter.bind(this);
    }

    updateInput = input => {
        this.setState({input});
    };

    // let dispatch the addTodo action and reset the input
    handleAddTodo = () => {
        this.props.addTodo(this.state.input);
        this.setState({input: ""});
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

// pass AddTodo to connect so that the component receives it as a prop
// it will dispatch the action when it's called

// call 'connect' for inject action creators and do not subscribe to the store
export default connect(
    null,
    {addTodo}
)(AddTodo);
// export default AddTodo;

// when you add a 'todo' it would dispatch an action to change the store.
// if you have the Redux DevTools Extension hooked up, you should see the action being dispatched
// you should also see that the store has changed accordingly
