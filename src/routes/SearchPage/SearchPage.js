import React, { Component } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import './SearchPage.css';

class SearchPage extends Component {
    render() {
        console.log(this.props.history, 'Search Page')

        return (
            <SearchForm history={this.props.history}/>
        );
    };
};

export default SearchPage;