import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter, Router } from 'react-router-dom';
import ShoppingList from '../components/ShoppingList/ShoppingList';

describe(`ShoppingList Component`, () => {
    describe(`Smoke test`, () => {
        it(`Renders without crashing`, () => {
            const div = document.createElement('div');
            ReactDOM.render(
                <BrowserRouter>    
                    <ShoppingList />
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
                        <ShoppingList />
                    </BrowserRouter>
                )
                .toJSON()
            expect(tree).toMatchSnapshot()
        });
    });
})