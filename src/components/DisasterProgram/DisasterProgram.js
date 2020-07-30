import React, { Component } from 'react';
import './DisasterProgram.css';

class DisasterProgram extends Component {
    render () {
        const readiness = this.props.disaster_plan_steps.filter(step => step.disaster_plan_step_stage === 'Readiness').map(step => <li>{step.disaster_plan_step}</li>);

        const response = this.props.disaster_plan_steps.filter(step => step.disaster_plan_step_stage === 'Response').map(step => <li>{step.disaster_plan_step}</li>);

        const recovery = this.props.disaster_plan_steps.filter(step => step.disaster_plan_step_stage === 'Recovery').map(step => <li>{step.disaster_plan_step}</li>);

        return (
            <>
                <h2>Disaster Program</h2>
                <p>{this.props.disaster_program_information}</p>

                <h3>Readiness Stage</h3>
                <ul>
                    {readiness}
                </ul>

                <h3>Response Stage</h3>
                <ul>
                    {response}
                </ul>

                <h3>Recovery Stage</h3>
                <ul>
                    {recovery}
                </ul>

            </>
        );
    };
};

export default DisasterProgram;