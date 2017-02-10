/**
 * Created by lieeGin on 2017/2/6.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import LoginForm from  '../components/LoginForm';
import LoginReducer from '../reducers/LoginReducer';


let store = createStore(LoginReducer);

ReactDOM.render(
    <Provider store={store}>
        <LoginForm />
    </Provider>,
    document.getElementById('content')
);



