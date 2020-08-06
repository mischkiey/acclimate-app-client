import React, { Component } from 'react';

class DisasterProgram extends Component {
    state = {
        expand: false,
    }

    handleToggleDisasterProgram = () => {
        this.setState({expand: !this.state.expand});
    };

    renderPlanStepsByStage = (stage) => {
        return this.props.disaster_plan_steps
            .filter(step => step.disaster_plan_step_stage.toLowerCase() === stage)
            .map(step => {
                if (step.disaster_plan_step_itemable_type === 'Task') {
                    return (
                        <li key={step.disaster_plan_step_id}>
                            {step.disaster_plan_step}
                            <button 
                                className='item small-button tooltip y-btn'
                                onClick={() => this.props.handleAddToTaskList(step.disaster_plan_step_itemable_shorthand)}
                            >
                                <i className="material-icons small-icon">add_task</i>
                                <span className='long tooltiptext'>
                                    Click to add this step to your task list
                                </span>
                            </button>
                        </li>
                    );
                } else if (step.disaster_plan_step_itemable_type === 'Shopping Item') {
                    return (
                        <li key={step.disaster_plan_step_id}>
                            {step.disaster_plan_step}
                            <button
                                className='item small-button tooltip y-btn'
                                onClick={() => this.props.handleAddToShoppingList(step.disaster_plan_step_itemable_shorthand)}
                            >
                                <i className="material-icons small-icon">add_shopping_cart</i>
                                <span className='long tooltiptext'>
                                    Click to add this item to your shopping list
                                </span>
                            </button>
                        </li>
                    );
                } else {
                    return (
                        <li key={step.disaster_plan_step_id}>
                            {step.disaster_plan_step}
                        </li>
                    );
            };
    })};

    renderExpandedDisasterProgram = () => {
        return (
            <> 
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
                    <div className='buttons-group'>
                        <button
                            className='item left r-btn'
                            onClick={() => this.props.handleDeleteDisasterProgram(this.props.disaster_program_id)}
                        >
                            <i className="material-icons">delete</i>
                        </button>
                        <button 
                            className='item right tooltip r-btn'
                            onClick={() => this.handleToggleDisasterProgram()}
                        >
                            <i className="material-icons">unfold_less</i>
                            <span className='tooltiptext'>
                                Less
                            </span>
                        </button>
                    </div>
                </article>
            </>
        );
    };

    renderCollapsedDisasterProgram = () => {
        return (
            <div className='buttons-group'>
                <button
                    className='item left r-btn'
                    onClick={() => this.props.handleDeleteDisasterProgram(this.props.disaster_program_id)}
                >
                    <i className="material-icons">delete</i>
                </button>
                <button 
                    className='item right tooltip y-btn'
                    onClick={() => this.handleToggleDisasterProgram()}
                >
                    <i className="material-icons">unfold_more</i>
                    <span className='tooltiptext'>
                        More
                    </span>
                </button>
            </div>
        );
    };

    render () {
        return (
            <div className='dashboard-component-group'>
                <article>
                    <h2 className='center'>{this.props.disaster_name} Disaster Program</h2>
                    <p>
                        {this.props.disaster_program_information}
                    </p>
                </article>
                        {
                            (this.state.expand)
                                ? this.renderExpandedDisasterProgram()
                                : this.renderCollapsedDisasterProgram()
                         }
            </div>
        );
    };
};

export default DisasterProgram;