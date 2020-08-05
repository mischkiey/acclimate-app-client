import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import { AcclimateProvider } from './contexts/AcclimateContext';

ReactDOM.render(
    <BrowserRouter>
        <AcclimateProvider>
            <App />
        </AcclimateProvider>
    </BrowserRouter>, 
    document.getElementById('root')
);