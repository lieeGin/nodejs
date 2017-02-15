/**
 * Created by lieeGin on 2017/2/13.
 */
import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {logger} from "../middlewares/middlewares";
import thunkMiddleware from "redux-thunk";
import RegisterForm from "../components/registerForm";
import RegisterReducer from "../reducers/registerReducer";


let store = createStore(RegisterReducer,
    applyMiddleware(
        thunkMiddleware,
        logger
    ));

ReactDOM.render(
    <Provider store={store}>
        <RegisterForm />
    </Provider>,
    document.getElementById('content')
);

