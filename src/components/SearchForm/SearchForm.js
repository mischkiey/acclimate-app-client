import React, { Component } from 'react';
import SearchItem from './SearchItem';

class SearchForm extends Component {
    state = {
        disasters: ['Hurricane', 'Tsunami', 'Volcanic Eruption']
    }

    render () {
        const options = this.state.disasters.map((disaster, idx) => <SearchItem disaster={disaster} key={idx} />)

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