import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import "antd/dist/antd.css";
import * as serviceWorker from "./serviceWorker";
import { HashRouter } from "react-router-dom";
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import authReducer from "./store/reducers/auth.js";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    auth: authReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
