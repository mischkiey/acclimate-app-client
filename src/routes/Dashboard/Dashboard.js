import React, { Component } from 'react';
import APIService from '../../services/api-services';
import TokenService from '../../services/token-services';
import DisasterProgram from '../../components/DisasterProgram/DisasterProgram';
import TaskList from '../../components/TaskList/TaskList';
import ShoppingList from '../../components/ShoppingList/ShoppingList';
import './Dashboard.css';

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
                this.setState({programs})
            })
            .catch(({error}) =>{
                console.log(error, 'Dashboard Error')
                this.setState({error})
            })
    };

    render () {
        const programs = this.state.programs.map(program => <DisasterProgram key={program.disaster_program_id} {...program} />)

        return (
            <div className='group'> 
                <section className='dashboard-component-group item'>
                    {programs}
                </section>

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