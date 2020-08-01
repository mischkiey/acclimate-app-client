import React, { Component } from 'react';
import './DisasterProgram.css';

class DisasterProgram extends Component {
    generatePlanStepsByStage(stage) {
        return this.props.disaster_plan_steps.filter(step => step.disaster_plan_step_stage.toLowerCase() === stage).map(step => <li key={step.disaster_plan_step_id}>{step.disaster_plan_step}</li>);
    };

    render () {

        return (
            <div className='disaster-program-group'>
                <article>
                    <h2 className='center'>Disaster Program</h2>
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
                <button className='item r-btn' onClick={() => this.props.handleDeleteDisasterProgram(this.props.disaster_program_id)}><i className="material-icons">delete</i></button>
            </div>
        );
    };
};

export default DisasterProgram;