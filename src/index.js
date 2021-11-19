import React from 'react';
import ReactDOM from 'react-dom';
//import { HashRouter } from "react-router-dom";
import './css/bootstrap.min.css';
// import './css/index.css';
import App from './App';

// Set initial URL fragment
window.location.hash = '#tags=red,blue,purple';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
