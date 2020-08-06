import React, { Component } from 'react';
import APIService from '../../services/api-services';
import TokenService from '../../services/token-services';
import { AcclimateContext } from '../../contexts/AcclimateContext';

class SearchForm extends Component {
    static contextType = AcclimateContext;

    state = {
        error: null,
    };

    handleSearchFormSubmit(e) {
        e.preventDefault();

        this.setState({error: null});

        const token = TokenService.getAuthToken();
        const disaster_program_id = e.target.disaster.value;

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
            console.log(`./../../images/${disaster.disaster_name}.jpg`)
            return (
                <div 
                    className='item search-form-input-group'
                    key={disaster.disaster_id}
                >
                        <input
                            id={disaster.disaster_id}
                            name='disaster'
                            type='radio'
                            value={disaster.disaster_id}
                        />
                        <img
                            alt={`${disaster.disaster_name}`}
                            className='search-input-image'
                            src={require(`./../../images/${disaster.disaster_image}.jpg`)}
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
                    onSubmit={(e) => this.handleSearchFormSubmit(e)}
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
                    <button className='y-btn s-btn'>
                        <i className="material-icons">add_circle</i>
                    </button>
                </form>
            </>
        )
    };
};

export default SearchForm;