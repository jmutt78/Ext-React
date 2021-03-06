//import '@sencha/ext-modern-enterprise';
//import '@sencha/ext-modern-material';
import React from 'react';
//import ReactDOM from 'react-dom';
import ExtReactDOM from '@sencha/ext-react-modern';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import authenticate from './Authenticate';

const token = authenticate();

ExtReactDOM.render(<App token={token} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
