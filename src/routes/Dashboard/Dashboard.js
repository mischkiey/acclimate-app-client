import React, { Component } from 'react';
import APIService from '../../services/api-services';
import TokenService from '../../services/token-services';
import DisasterProgram from '../../components/DisasterProgram/DisasterProgram';
import TaskList from '../../components/TaskList/TaskList';
import ShoppingList from '../../components/ShoppingList/ShoppingList';

class Dashboard extends Component {
    state = {
        programs: [],
        error: null,
    };

    componentDidMount() {
        this.setState({error: null})

        const token = TokenService.getAuthToken();

        return APIService.get('/disaster/user/program', token)
            .then(programs => {
                console.log(programs, 'Moo')
                this.setState({programs})
            })
            .catch(error =>
                this.setState({...error})
            )
    }

    render () {
        const programs = this.state.programs.map(program => <DisasterProgram key={program.disaster_program_id} {...program} />)


        return (
            <>
                {programs}
                <TaskList />
                <ShoppingList />
            </>
        );
    };
};

export default Dashboard;