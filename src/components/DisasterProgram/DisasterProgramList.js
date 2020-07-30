import React, {Component} from 'react';
import DisasterProgram from '../../components/DisasterProgram/DisasterProgram';
import APIService from '../../services/api-services';
import TokenService from '../../services/token-services';

class DisasterProgramList extends Component {
    state = {
        programs: [],
        error: null,
    };

    // handleDeleteUserProgram()
    handleDeleteDisasterProgram = (disaster_program_id) => {
        this.setState({error: null})

        const token = TokenService.getAuthToken();

        console.log('Delete', disaster_program_id, token)

        return APIService.del(`/disaster/user/${disaster_program_id}`,token )
            .then(response => {

                // Response is an empty object

                return APIService.get('/disaster/user/program', token)
                    .then(programs => {
                        console.log(programs)
                        this.setState({programs})
                    })
                    .catch(error => {
                        console.log(error)
                        this.setState({error})
                        // this.setState({programs: [], ...error})
                    })
            })
            .catch(error => {
                console.log(error)
                this.setState({...error})
            });
    };

    componentDidMount() {
        this.setState({error: null})

        const token = TokenService.getAuthToken();

        return APIService.get('/disaster/user/program', token)
            .then(programs => {
                this.setState({programs})
            })
            .catch(({error}) =>{
                console.log(error, 'Disaster Program List Error')
                this.setState({error})
            });
    };

    render () {
        const programs = this.state.programs.map(program => <DisasterProgram key={program.disaster_program_id} {...program} handleDeleteDisasterProgram={this.handleDeleteDisasterProgram}/>)

        return (
            <section className='dashboard-component-group item'>
                {programs}
            </section>
        );
    };
};

export default DisasterProgramList;