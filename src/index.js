import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Ludo from './Ludo.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Ludo />
  </React.StrictMode>
);
