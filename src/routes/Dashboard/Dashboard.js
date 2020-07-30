import React, { Component } from 'react';
import DisasterProgramList from '../../components/DisasterProgram/DisasterProgramList';
import TaskList from '../../components/TaskList/TaskList';
import ShoppingList from '../../components/ShoppingList/ShoppingList';
import './Dashboard.css';

class Dashboard extends Component {
    render () {
        return (
            <div className='group'> 
                <DisasterProgramList />

                <section className='dashboard-component-group item'>
                    <article className='disaster-utility-group item'>
                        <TaskList />
                    </article>

                    <article className='disaster-utility-group item'>
                        <ShoppingList />
                    </article>
                </section>
            </div>
        );
    };
};

export default Dashboard;