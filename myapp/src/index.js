import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/navbar.css'
import App from './App';
import {createStore} from 'redux' //to create global store
import reducer from './reducer/reducer';
import { Provider } from 'react-redux';  
import {composeWithDevTools, composewithDevTools} from 'redux-devtools-extension'

const store = createStore(reducer,{product:["iphone11","iphone12","iphone13",
],categories:["mobiles","headphones","cases"]},composeWithDevTools())

ReactDOM.render(  
  <React.StrictMode>
    <Provider  store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

