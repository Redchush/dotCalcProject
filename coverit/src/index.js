import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {connect, Provider} from 'react-redux'

import {createStore} from "redux";
import rootReducer from "./controller/reducers";

let store = createStore(rootReducer);

ReactDOM.render(
    <Provider props>
      <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
