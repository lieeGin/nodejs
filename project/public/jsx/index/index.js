/**
 * Created by lieeGin on 2017/2/6.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {logger} from "../middlewares/middlewares";
import thunkMiddleware from "redux-thunk";
import LoginForm from  '../components/loginForm';
import LoginReducer from '../reducers/loginReducer';


let store = createStore(LoginReducer,
    applyMiddleware(
        thunkMiddleware,
        logger
    ));

ReactDOM.render(
    <Provider store={store}>
        <LoginForm />
    </Provider>,
    document.getElementById('content')
);



