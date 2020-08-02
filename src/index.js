import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import { ExperimentalProvider } from './contexts/ExperimentalContext';

ReactDOM.render(
    <BrowserRouter>
        <ExperimentalProvider>
            <App />
        </ExperimentalProvider>
    </BrowserRouter>, 
    document.getElementById('root')
);