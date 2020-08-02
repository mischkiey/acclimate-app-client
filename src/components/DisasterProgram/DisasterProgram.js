import React, { Component } from 'react';
import './DisasterProgram.css';

class DisasterProgram extends Component {
    state = {
        expand: false,
    }

    renderPlanStepsByStage = (stage) => {
        return this.props.disaster_plan_steps.filter(step => step.disaster_plan_step_stage.toLowerCase() === stage).map(step => <li key={step.disaster_plan_step_id}>{step.disaster_plan_step}</li>);
    };

    handleToggleDisasterProgram = () => {
        this.setState({expand: !this.state.expand});
    };

    expand = () => {
        return (
            <div className='disaster-program-group'>
                <button className='item r-btn' onClick={() => this.handleToggleDisasterProgram()}><i className="material-icons">unfold_less</i></button>
                <article>
                    <h2 className='center'>Disaster Program</h2>
                    <p>{this.props.disaster_program_information}: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </article>
                
                <article>
                    <h3>Readiness Stage</h3>
                    <ul>
                        {this.renderPlanStepsByStage('readiness')}
                    </ul>

                    <h3>Response Stage</h3>
                    <ul>
                        {this.renderPlanStepsByStage('response')}
                    </ul>

                    <h3>Recovery Stage</h3>
                    <ul>
                        {this.renderPlanStepsByStage('recovery')}
                    </ul>
                </article>
                <button className='item y-btn' onClick={() => this.props.handlePopulateLists(this.props.disaster_program_id)}><i className="material-icons">add_task</i></button>
                <button className='item r-btn' onClick={() => this.props.handleDeleteDisasterProgram(this.props.disaster_program_id)}><i className="material-icons">delete</i></button>
            </div>
        );
    };

    collapse = () => {
        return (
            <div className='disaster-program-group'>
                <button className='item y-btn' onClick={() => this.handleToggleDisasterProgram()}><i className="material-icons">unfold_more</i></button>
                <article>
                    <h2 className='center'>Disaster Program</h2>
                    <p>{this.props.disaster_program_information}: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </article>
                <button className='item r-btn' onClick={() => this.props.handleDeleteDisasterProgram(this.props.disaster_program_id)}><i className="material-icons">delete</i></button>
            </div>
        );
    }

    render () {
        return (
            <>
                {
                    (this.state.expand)
                        ? this.expand()
                        : this.collapse()
                }
            </>
        );
    };
};

export default DisasterProgram;