import React, { Component } from 'react';
import DisasterProgramList from '../../components/DisasterProgram/DisasterProgramList';
import TaskList from '../../components/TaskList/TaskList';
import ShoppingList from '../../components/ShoppingList/ShoppingList';

class Dashboard extends Component {
    render () {
        return (
            <div className='group'> 
                <DisasterProgramList />
                <section className='dashboard-components-group item'>
                    <article className='dashboard-component-group item'>
                        <TaskList />
                    </article>
                    <article className='dashboard-component-group item'>
                        <ShoppingList />
                    </article>
                </section>
            </div>
        );
    };
};

export default Dashboard;