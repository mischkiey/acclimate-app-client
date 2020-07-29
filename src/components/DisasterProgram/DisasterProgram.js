import React, { Component } from 'react';
// import DisasterInformation from './DisasterInformation';
// import DisasterPlan from './DisasterPlan'

class DisasterProgram extends Component {
    // Todo
    // Cleanup component

    render () {
        const readiness = this.props.disaster_plan_steps.filter(step => step.disaster_plan_step_stage === 'Readiness').map(step => step.disaster_plan_step);

        const response = this.props.disaster_plan_steps.filter(step => step.disaster_plan_step_stage === 'Response').map(step => step.disaster_plan_step);

        const recovery = this.props.disaster_plan_steps.filter(step => step.disaster_plan_step_stage === 'Recovery').map(step => step.disaster_plan_step);

        console.log(this.props)
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


                {/* <DisasterInformation />
                <DisasterPlan /> */}
            </>
        );
    };
};

export default DisasterProgram;