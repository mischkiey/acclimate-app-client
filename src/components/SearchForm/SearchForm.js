import React, { Component } from 'react';
import APIService from '../../services/api-services';
import TokenService from '../../services/token-services';
import { AcclimateContext } from '../../contexts/AcclimateContext';

class SearchForm extends Component {
    static contextType = AcclimateContext;

    state = {
        error: null,
    };

    handleSearchInputSubmit(e) {
        e.preventDefault();

        this.setState({error: null});

        const token = TokenService.getAuthToken();
        const disaster_program_id = e.target.value;

        return APIService.post('/user/program', {disaster_program_id}, token)
            .then(() => {
                this.props.history.push('/dashboard');
            })
            .catch(({error}) => {
                this.setState({error});
            });
    };

    componentDidMount() {
        this.setState({error: null});

        const token = TokenService.getAuthToken();

        return APIService.get('/disaster', token)
            .then(response => {
                this.context.setDisasters(response)
            })
            .catch(({error}) => {
                this.setState({error})
            });
    };

    componentWillUnmount() {
        this.context.setDisasters([]);
    };

    render () {
        const options = this.context.disasters.map(disaster => {
            return (
                <div 
                    className='item search-form-input-group'
                    key={disaster.disaster_id}
                >
                        <input
                            alt={disaster.disaster_name}
                            className='search-input-image'
                            id={disaster.disaster_id}
                            name='disaster'
                            onClick={(e) => this.handleSearchInputSubmit(e)}
                            src={require(`./../../images/${disaster.disaster_image}.jpg`)}
                            type='image'
                            value={disaster.disaster_id}
                        />
                        <label htmlFor={disaster.disaster_id}>
                            {disaster.disaster_name}
                        </label>
                </div>
            )
            });
        return (
            <>
                <h2 className='center'>Select a Disaster Program</h2>
                <form
                    className='search-form-group'
                >
                    {
                        (this.state.error)
                            ? 
                                <div className='error'>
                                    <p className='error'>{this.state.error}!</p>
                                </div>
                            : ''
                    }
                    <div className='search-form-inputs-group'>
                        {options}
                    </div>
                </form>
            </>
        )
    };
};

export default SearchForm;