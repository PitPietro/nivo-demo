import { createStore } from "redux";
import rootReducer from "./reducers";

export default createStore(rootReducer);

/*
* Common ways of calling connect
* Docs: https://react-redux.js.org/introduction/basic-tutorial#common-ways-of-calling-connect
*
* Depending on what kind of components you are working with, there are different ways of calling connect.
*
* I) Do not subscribe to the store and do not inject action creators
*   If you call connect without providing any arguments, your component will:
*   1. NOT re-render when the store changes
*   2. receive props.dispatch that you may use to manually dispatch action
*
* II) Subscribe to the store and do not inject action creators
*   If you call connect with only mapStateToProps, your component will:
*   1. subscribe to the values that mapStateToProps extracts from the store,
*      (and re-render only when those values have changed)
*   2. subscribe to the values that mapStateToProps extracts from the store,
*      (and re-render only when those values have changed)
*
* III) Do not subscribe to the store and inject action creators
*   If you call connect with only mapDispatchToProps, your component will:
*   1. not re-render when the store changes
*   2. receive each of the action creators you inject with mapDispatchToProps as props and
*      dispatch the actions upon being called
*
* IV) Subscribe to the store and inject action creators
*   If you call connect with both mapStateToProps and mapDispatchToProps, your component will:
*   1. subscribe to the values that mapStateToProps extracts from the store
*      (and re-render only when those values have changed)
*   2. receive all of the action creators you inject with mapDispatchToProps as props and
*      dispatch the actions upon being called.
*/