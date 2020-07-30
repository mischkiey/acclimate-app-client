import React, { Component } from 'react';
import './DisasterProgram.css';

class DisasterProgram extends Component {
    generatePlanStepsByStage(stage) {
        return this.props.disaster_plan_steps.filter(step => step.disaster_plan_step_stage.toLowerCase() === stage).map(step => <li key={step.disaster_plan_step_id}>{step.disaster_plan_step}</li>);
    };

    render () {

        return (
            <div className='disaster-program-group'>
                <button className='item'>Collapse/Expand</button>
                <button className='item' onClick={() => this.props.handleDeleteDisasterProgram(this.props.disaster_program_id)}>Delete</button>
                <article>
                    <h2>Disaster Program</h2>
                    <p>{this.props.disaster_program_information}</p>
                </article>
                
                <article>
                    <h3>Readiness Stage</h3>
                    <ul>
                        {this.generatePlanStepsByStage('readiness')}
                    </ul>

                    <h3>Response Stage</h3>
                    <ul>
                        {this.generatePlanStepsByStage('response')}
                    </ul>

                    <h3>Recovery Stage</h3>
                    <ul>
                        {this.generatePlanStepsByStage('recovery')}
                    </ul>
                </article>
            </div>
        );
    };
};

export default DisasterProgram;