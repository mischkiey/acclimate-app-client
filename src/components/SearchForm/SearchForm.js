import React, { Component } from 'react';
import APIService from '../../services/api-services';
import TokenService from '../../services/token-services';
import './SearchForm.css';

class SearchForm extends Component {
    state = {
        disasters: [],
        error: null
    };

    handleSearchFormSubmit(e) {
        e.preventDefault();

        this.setState({error: null});

        const token = TokenService.getAuthToken();
        const disaster_program_id = e.target.disaster.value;

        return APIService.post('/disaster/user/program', {disaster_program_id}, token)
            .then(response => {
                this.props.history.push('/dashboard')
            })
            .catch(({error}) => {
                console.log(error, 'Search Form Error')
                this.setState({error})
            })
    };

    componentDidMount() {
        this.setState({error: null});

        const token = TokenService.getAuthToken();

        return APIService.get('/disaster', token)
            .then(response => {
                this.setState({disasters: response})
            })
            .catch(({error}) => {
                console.log(error, 'Search Form Error')
                this.setState({error})
            })
    };

    render () {
        const options = this.state.disasters.map(disaster =>
            (
            <div className='' key={disaster.disaster_id}>
                <label htmlFor={disaster.disaster_id}>{disaster.disaster_name}</label>
                <input id={disaster.disaster_id} name='disaster' type='radio' value={disaster.disaster_id}/>
                <img alt={`${disaster.disaster_name}`} src={`${disaster.disaster_image}`} />
            </div>
        ))
        
        return (
            <>
                <h2>Search Form</h2>
                <form onSubmit={(e) => this.handleSearchFormSubmit(e)}>
                    {options}
                    <button>Submit</button>
                </form>
            </>
        )
    };
};

export default SearchForm;