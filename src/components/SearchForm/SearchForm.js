import React, { Component } from 'react';
import APIService from '../../services/api-services';
import TokenService from '../../services/token-services';
// import { ExperimentalContext } from '../../contexts/ExperimentalContext';
import './SearchForm.css';

class SearchForm extends Component {
    state = {
        disasters: [],
        error: null,
    };

    handleSearchFormSubmit(e) {
        e.preventDefault();

        this.setState({error: null});

        const token = TokenService.getAuthToken();
        const disaster_program_id = e.target.disaster.value;

        return APIService.post('/disaster/user/program', {disaster_program_id}, token)
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
                this.setState({disasters: response})
            })
            .catch(({error}) => {
                this.setState({error})
            });
    };

    componentWillUnmount() {
        this.setState({disasters: []});
    };

    render () {
        const options = this.state.disasters.map(disaster =>
            (
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
                            src={`${disaster.disaster_image}`}
                        />
                        <label htmlFor={disaster.disaster_id}>
                            {disaster.disaster_name}
                        </label>
                </div>
            )
        );
        
        return (
            <>
                <h2 className='center'>Select a Disaster Program</h2>
                <form
                    className='white'
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
                    <button className='y-btn'>
                        <i className="material-icons">add_circle</i>
                    </button>
                </form>
            </>
        )
    };
};

export default SearchForm;