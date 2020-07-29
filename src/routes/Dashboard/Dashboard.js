import React, { Component } from 'react';
import DisasterProgram from '../../components/DisasterProgram/DisasterProgram';
import TaskList from '../../components/TaskList/TaskList';
import ShoppingList from '../../components/ShoppingList/ShoppingList';

class Dashboard extends Component {
    state = {

    };

    render () {
        return (
            <>
                <DisasterProgram />
                <TaskList />
                <ShoppingList />
            </>
        );
    };
};

export default Dashboard;