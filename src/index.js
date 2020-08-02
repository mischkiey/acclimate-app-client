import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import ExperimentalContext from './contexts/ExperimentalContext';

ReactDOM.render(
    <BrowserRouter>
        <ExperimentalContext.Provider>
            <App />
        </ExperimentalContext.Provider>
    </BrowserRouter>, 
    document.getElementById('root')
);