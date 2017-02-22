/**
 * Created by lieeGin on 2017/2/20.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {logger} from "../middlewares/middlewares";
import thunkMiddleware from "redux-thunk";
import HomePage from  '../components/homePage';
import HomeReducer from '../reducers/homeReducer';


let store = createStore(HomeReducer,
    applyMiddleware(
        thunkMiddleware,
        logger
    ));

ReactDOM.render(
    <Provider store={store}>
        <HomePage />
    </Provider>,
    document.getElementById('content')
);



