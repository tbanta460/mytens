import { configureStore } from '@reduxjs/toolkit'
import { SetForm } from './reducer/setForm.js'
// const store = configureStore({
//     reducer: SetForm,
// }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// export default store;

import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";

// initial states here
const initalState = {};

// middleware
const middleware = [thunk];

// creating store
export const store = configureStore({
    reducer: SetForm},
    initalState,
    composeWithDevTools(applyMiddleware(...middleware))
);

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);