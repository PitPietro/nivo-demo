import React from "react";
import {connect} from "react-redux";
import Todo from "./Todo";
// import { getTodos } from "../../redux-comp/selectors";
import {getTodosByVisibilityFilter} from "../../redux/selectors";

// <TodoList /> component is responsible for rendering the list of todos.
// it needs to read data from the store
const TodoList = ({todos}) => (
    <ul className="todo-list">
        {todos && todos.length
            ? todos.map((todo, index) => {
                return <Todo key={`todo-${todo.id}`} todo={todo}/>;
            })
            : "No todos, yay!"}
    </ul>
);

// const mapStateToProps = state => {
//   const { byIds, allIds } = state.todos || {};
//   const todos =
//     allIds && state.todos.allIds.length
//       ? allIds.map(id => (byIds ? { ...byIds[id], id } : null))
//       : null;
//   return { todos };
// };

const mapStateToProps = state => {
    const {visibilityFilter} = state;
    const todos = getTodosByVisibilityFilter(state, visibilityFilter);
    return {todos};
    //   const allTodos = getTodos(state);
    //   return {
    //     todos:
    //       visibilityFilter === VISIBILITY_FILTERS.ALL
    //         ? allTodos
    //         : visibilityFilter === VISIBILITY_FILTERS.COMPLETED
    //           ? allTodos.filter(todo => todo.completed)
    //           : allTodos.filter(todo => !todo.completed)
    //   };
};
// export default TodoList;

// call connect with the mapStateToProps parameter, a function describing which part of the data you need from the store
// call 'connect' but do not inject action creators and do subscribe to the store
export default connect(mapStateToProps)(TodoList);
