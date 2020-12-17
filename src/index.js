import React from 'react';
import ReactDom from 'react-dom';
import '@csstools/normalize.css';
import './base.css';
import App from './App';

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#root'),
);
