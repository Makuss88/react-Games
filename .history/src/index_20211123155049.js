import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import { AuthProvider } from '../../../context/AuthContext.js';


import App from './App';

import './index.css';

ReactDOM.render(
  <AuthProvider>
  </AuthProvider>
    
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'));