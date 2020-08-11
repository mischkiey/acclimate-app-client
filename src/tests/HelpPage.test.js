import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { AcclimateProvider } from '../contexts/AcclimateContext';
import HelpPage from '../routes/HelpPage/HelpPage';

describe(`HelpPage Component`, () => {
    describe(`Smoke test`, () => {
        it(`Renders without crashing`, () => {
            const div = document.createElement('div');
            ReactDOM.render(
                <BrowserRouter>
                    <AcclimateProvider>
                        <HelpPage />
                    </AcclimateProvider>
                </BrowserRouter>,
                div);
            ReactDOM.unmountComponentAtNode(div);
        });
    });
    
    describe(`Snapshot test`, () => {
        it(`Renders the UI as expected`, () => {
            const tree = renderer
                .create(
                    <BrowserRouter>
                        <AcclimateProvider>
                            <HelpPage />
                        </AcclimateProvider>
                    </BrowserRouter>
                )
                .toJSON()
            expect(tree).toMatchSnapshot()
        });
    });
})