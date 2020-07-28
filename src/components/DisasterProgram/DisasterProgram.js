import React, { Component } from 'react';
import DisasterInformation from './DisasterInformation';
import DisasterPlan from './DisasterPlan'

class DisasterProgram extends Component {
    render () {
        return (
            <>
                <h2>Disaster Plan</h2>
                <DisasterInformation />
                <DisasterPlan />
            </>
        );
    };
};

export default DisasterProgram;