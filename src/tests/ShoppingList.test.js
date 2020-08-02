import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { ExperimentalProvider } from '../contexts/ExperimentalContext';

import ShoppingList from '../components/ShoppingList/ShoppingList';

describe(`ShoppingList Component`, () => {
    describe(`Smoke test`, () => {
        it(`Renders without crashing`, () => {
            const div = document.createElement('div');
            ReactDOM.render(
                <BrowserRouter> 
                    <ExperimentalProvider>
                        <ShoppingList />
                    </ExperimentalProvider>  
                </BrowserRouter>
                , div);
            ReactDOM.unmountComponentAtNode(div);
        });
    });
    
    describe(`Snapshot test`, () => {
        it(`Renders the UI as expected`, () => {
            const tree = renderer
                .create(
                    <BrowserRouter> 
                        <ExperimentalProvider>
                            <ShoppingList />
                        </ExperimentalProvider>  
                    </BrowserRouter>
                )
                .toJSON()
            expect(tree).toMatchSnapshot()
        });
    });
})