import React, {Component} from 'react';
import DisasterProgram from '../../components/DisasterProgram/DisasterProgram';
import APIService from '../../services/api-services';
import TokenService from '../../services/token-services';
import './DisasterProgram.css'

class DisasterProgramList extends Component {
    state = {
        programs: [],
        error: null,
    };

    handleDeleteDisasterProgram = (disaster_program_id) => {
        this.setState({error: null})

        const token = TokenService.getAuthToken();

        return APIService.del(`/disaster/user/program/${disaster_program_id}`,token )
            .then((response) => {

                return APIService.get('/disaster/user/program', token)
                    .then(programs => {

                        this.setState({programs})
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

        return APIService.get('/disaster/user/program', token)
            .then(programs => {
                this.setState({programs})
            })
            .catch(({error}) =>{
                this.setState({error})
            });
    };

    render () {
        const programs = this.state.programs.map(program => <DisasterProgram key={program.disaster_program_id} {...program} handleDeleteDisasterProgram={this.handleDeleteDisasterProgram} />)

        return (
            <section className='dashboard-component-group item'>
                {programs}
            </section>
        );
    };
};

export default DisasterProgramList;