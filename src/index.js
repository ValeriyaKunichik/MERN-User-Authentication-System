import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"
import { AuthProvider } from './context/AuthProvider';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';


disableReactDevTools();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
       <App />
      </Router>
    </AuthProvider>
  </React.StrictMode>
);

