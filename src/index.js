import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import thunk from "redux-thunk";
import App from './components/App/App';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import {reducers} from './store/reducers';
const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);
