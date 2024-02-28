import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'; //siin saab midagi teact tosastify sees ule kirjutada. index.css tuleb hoida allpool. et tulevikus saaks muuta
import App from './App';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
  </React.StrictMode>
);


