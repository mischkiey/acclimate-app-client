import React, { Component } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';

class SearchPage extends Component {
    render() {
        return (
            <SearchForm history={this.props.history}/>
        );
    };
};

export default SearchPage;