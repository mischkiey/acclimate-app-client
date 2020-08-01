import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter, Router } from 'react-router-dom';
import DisasterProgram from '../components/DisasterProgram/DisasterProgram';

describe(`DisasterProgram Component`, () => {
    const disasterProgram = {
        disaster_program_information: 'About the blizzard disaster program',
        disaster_plan_steps: [
            {
                disaster_plan_step_id: 1, 
                disaster_plan_step: 'Blizzard readiness step', 
                disaster_plan_step_stage: 'Readiness',
            }
        ],
        disaster_id: 1,
    };

    describe(`Smoke test`, () => {
        it(`Renders without crashing`, () => {
            const div = document.createElement('div');
            ReactDOM.render(
                <BrowserRouter>    
                    <DisasterProgram {...disasterProgram} />
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
                        <DisasterProgram {...disasterProgram}/>
                    </BrowserRouter>
                )
                .toJSON()
            expect(tree).toMatchSnapshot()
        });
    });
})