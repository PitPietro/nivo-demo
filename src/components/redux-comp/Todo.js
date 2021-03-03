import React from "react";
import {connect} from "react-redux";
import cx from "classnames";
import {toggleTodo} from "../../redux/actions";

// <Todo /> component takes the todo item as props.
// you can take the information from the byIds field of the todos. you need the information from the allIds field of the
// store indicating which todos and in what order they should be rendered.
const Todo = ({todo, toggleTodo}) => (
    <div>
        <li className="todo-item" onClick={() => toggleTodo(todo.id)}>
            {todo && todo.completed ? "👌" : "👋"}{" "}

            <span
                className={cx(
                    "todo-item__text",
                    todo && todo.completed && "todo-item__text--completed"
                )}
            >
        {todo.content}
        </span>
        </li>
    </div>
);

// export default Todo;

// the connect function read values from the Redux store (and re-read the values when the store updates).
// it takes two arguments (both optional):
// 1. mapStateToProps: called every time the store state changes. It receives the entire store state, and should return an object of data this component needs.
// 2. mapDispatchToProps: can either be a function or an object.
//   > if it’s a function, it will be called once on component creation. It will receive dispatch as an argument, and
//   return an object full of functions that use dispatch to dispatch actions.
//   > if it’s an object full of action creators, each action creator will be turned into a prop function that
//   automatically dispatches its action when called.
//
// Note: It's recommend using the “object shorthand” form.

// call 'connect' for inject action creators and do not subscribe to the store
export default connect(
    null,
    {toggleTodo}
)(Todo);
