import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { contextProvider } from './context'
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <contextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </contextProvider>,
  document.getElementById('root')
);

