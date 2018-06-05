import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CustomerCreation from './CustomerCreation';
import 'bootstrap/dist/css/bootstrap.css';
import initialState from './redux/initialState'

import configureStore from './redux/store';
import {Provider} from 'react-redux'

let store = configureStore(initialState)

ReactDOM.render(
    <Provider store={store}>
        <CustomerCreation/>
    </Provider>
    , document.getElementById('root')
);