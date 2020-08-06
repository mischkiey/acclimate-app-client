import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { AcclimateProvider } from '../contexts/AcclimateContext';
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
                    <AcclimateProvider>
                        <DisasterProgram {...disasterProgram} />
                    </AcclimateProvider>    
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
                        <AcclimateProvider>
                            <DisasterProgram {...disasterProgram} />
                        </AcclimateProvider>    
                    </BrowserRouter>
                )
                .toJSON()
            expect(tree).toMatchSnapshot()
        });
    });
})