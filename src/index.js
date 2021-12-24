import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import { AuthProvider } from './context/AuthContext';


import App from './App';

import './index.css';

ReactDOM.render(
  <React.StrictMode >
    <HashRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'));