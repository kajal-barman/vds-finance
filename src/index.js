// src/index.js (or equivalent entry file)
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* BrowserRouter enables routing for the app */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
