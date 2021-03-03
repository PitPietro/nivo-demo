import React from "react";
import Layout from "../utils/layout";
import H2 from "../utils/titles/h2";
import H3 from "../utils/titles/h3";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import VisibilityFilters from "./VisibilityFilters";

function reduxHome() {
    return (
        <Layout>
            <h1 className="pt-3">Redux</h1>
            <p>
                React Redux is the official React binding for Redux. It lets your React components read data from a
                Redux store, and dispatch actions to the store to update data.
            </p>

            <H2 title="Basic Tutorial Example"/>

            <div className="matte-body-background text-justify p-5">
                <H3 title="UI components"/>
                <h4><code className="pl-3 text-right"><a href="https://react-redux.js.org/introduction/basic-tutorial"
                                                         target="_blank" rel="noreferrer">Docs</a></code></h4>
                <ul>
                    <li>
                        <code>TodoApp</code> renders <code>AddTodo</code>, <code>TodoList</code> and <code>VisibilityFilters</code>
                    </li>
                    <li><code>AddTodo</code> allows a user to input a todo item and add to the list upon clicking its
                        “Add Todo” button:
                        <ol>
                            <li>uses a controlled input that sets state upon <code>onChange</code></li>
                            <li>the user clicks on the "Add Todo" button --> it dispatches the action (provided using
                                React Redux) to add the todo to the store
                            </li>
                        </ol>
                    </li>
                    <li><code>TodoList</code> renders a single todo item:
                        <ol>
                            <li>renders the todo content and shows that a todo is completed by crossing it out.</li>
                            <li>dispatches the action to toggle the todo's complete status upon <code>onClick</code>.
                            </li>
                        </ol>
                    </li>
                    <li><code>VisibilityFilters</code> renders a simple set of filters(). Clicking on each one of them
                        filters the todos:
                        <ol>
                            <li>accepts an <code>activeFilter</code> <b>prop</b> from the parent that indicates which
                                filter is currently selected by the user. <br/> <b>Please Note</b> An active filter is
                                rendered with an underscore.
                            </li>
                            <li>dispatches the <code>setFilter</code> action to update the selected filter.</li>
                        </ol>
                    </li>
                    <li><code>constants</code> holds the constants data for our app.</li>
                    <li><code>index</code> renders the app to the DOM</li>
                </ul>

                <H3 title="Redux Store"/>
                <ul>
                    <li>
                        <b>Store</b>
                        <ol>
                            <li><code>todos</code></li>
                            <li></li>
                        </ol>
                    </li>
                    <li>
                        <b>Action Creators</b>
                        <ol>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ol>
                    </li>

                    <li>
                        <b>Reducers</b>
                        <ol>
                            <li>

                                <ul>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </li>
                            <li></li>
                        </ol>
                    </li>

                    <li>
                        <b>Action Types</b>
                        <ol>
                            <li></li>
                        </ol>
                    </li>

                    <li>
                        <b>Selectors</b>
                        <ol>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ol>
                    </li>
                </ul>
            </div>

            <div className="todo-app">
                <h1>Todo List</h1>
                <AddTodo />
                <TodoList />
                <VisibilityFilters />
            </div>

        </Layout>
    );
}

export default reduxHome;

// Using target="_blank" without rel="noreferrer" is a security risk:
// // see https://html.spec.whatwg.org/multipage/links.html#link-type-noopener  react/jsx-no-target-blank
// https://codesandbox.io/s/9on71rvnyo