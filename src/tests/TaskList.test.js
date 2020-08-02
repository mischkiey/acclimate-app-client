import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { ExperimentalProvider } from '../contexts/ExperimentalContext';

import TaskList from '../components/TaskList/TaskList';

describe(`TaskList Component`, () => {
    describe(`Smoke test`, () => {
        it(`Renders without crashing`, () => {
            const div = document.createElement('div');
            ReactDOM.render(
                <BrowserRouter>  
                    <ExperimentalProvider>
                        <TaskList />
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
                            <TaskList />
                        </ExperimentalProvider>  
                    </BrowserRouter>
                )
                .toJSON()
            expect(tree).toMatchSnapshot()
        });
    });
})