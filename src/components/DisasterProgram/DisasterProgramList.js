import React, {Component} from 'react';
import APIService from '../../services/api-services';
import TokenService from '../../services/token-services';
import { AcclimateContext } from '../../contexts/AcclimateContext';

import DisasterProgram from '../../components/DisasterProgram/DisasterProgram';

class DisasterProgramList extends Component {
    static contextType = AcclimateContext;

    state = {
        error: null,
    };

    handleAddToTaskList = (disaster_plan_step_itemable_shorthand) => {
        this.setState({error: null})

        const newUserTask = {
            user_task: disaster_plan_step_itemable_shorthand,
        };
        const token = TokenService.getAuthToken();

        return APIService.post('/user/task', newUserTask, token)
            .then(response => {
                this.context.tasks.push(response);
                const newTasks = this.context.tasks;
                this.context.setTasks(newTasks);
            })
            .catch(error => {
                this.setState({...error});
            });
    };

    handleAddToShoppingList = (disaster_plan_step_itemable_shorthand) => {
        this.setState({error: null})

        const newUserShoppingItem = {
            user_shopping_item: disaster_plan_step_itemable_shorthand,
        };
        const token = TokenService.getAuthToken();

        return APIService.post('/user/shopping', newUserShoppingItem, token)
            .then(response => {
                this.context.shoppingItems.push(response);
                const newShoppingItems = this.context.shoppingItems;
                this.context.setShoppingItems(newShoppingItems);
            })
            .catch(error => {
                this.setState({...error});
            });
    };

    handleDeleteDisasterProgram = (disaster_program_id) => {
        this.setState({error: null})

        const token = TokenService.getAuthToken();

        return APIService.del(`/user/program/${disaster_program_id}`, token)
            .then(() => {
                return APIService.get('/user/program', token)
                    .then(programs => {
                        this.context.setPrograms(programs)
                    })
                    .catch(error => {
                        this.setState({error})
                    })
            })
            .catch(error => {
                this.setState({...error})
            });
    };

    componentDidMount() {
        this.setState({error: null})

        const token = TokenService.getAuthToken();

        return APIService.get('/user/program', token)
            .then(programs => {
                this.context.setPrograms(programs)
            })
            .catch(({error}) =>{
                this.setState({error})
            });
    };

    render () {
        const programs = this.context.programs.map(program =>
            <DisasterProgram
                key={program.disaster_program_id}
                handleAddToTaskList={this.handleAddToTaskList}
                handleAddToShoppingList={this.handleAddToShoppingList}
                handleDeleteDisasterProgram={this.handleDeleteDisasterProgram}
                {...program}
            />
        )

        return (
            <section className='dashboard-component-group item'>
                {programs}
            </section>
        );
    };
};

export default DisasterProgramList;