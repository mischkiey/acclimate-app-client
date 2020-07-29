import React, { Component } from 'react';
import APIService from '../../services/api-services';
import TokenService from '../../services/token-services';
import SearchItem from './SearchItem';

class SearchForm extends Component {
    state = {
        disasters: [],
        error: null
    };

    componentDidMount() {
        this.setState({error: null});

        const token = TokenService.getAuthToken();

        return APIService.get('/disaster', token)
            .then(response => {
                console.log(response, 'Meow')
                this.setState({disasters: response})
                console.log(this.state)
            })
            .catch(error => {
                this.setState({...error})
                console.log(error, 'Arf')
            })
    };

    render () {
        const options = this.state.disasters.map(disaster => <SearchItem {...disaster} key={disaster.disaster_id} />)
        
        return (
            <>
                <h2>Search Form</h2>
                <form>
                    {options}
                </form>
            </>
        )
    };
};

export default SearchForm;