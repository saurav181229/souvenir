<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";
import App from "./App";
import "./index.css";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
=======
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import reducers from './reducers/index' 
import './index.css'  

const store = createStore(reducers,compose(applyMiddleware(thunk)));

ReactDOM.render(
<Provider store={store} >
<App />
</Provider>,document.getElementById('root'));
>>>>>>> 40633bd53067cb3b6b2989c02f28c137edc028f7
