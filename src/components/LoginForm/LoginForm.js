import React, { Component } from 'react';
import APIService from '../../services/api-services';
import TokenService from '../../services/token-services';
import AcclimateContext from '../../contexts/AcclimateContext';

class LoginForm extends Component {
    static contextType = AcclimateContext;

    state = {
        error: null,
    };

    handleSubmitLoginForm = (e) => {
        e.preventDefault();

        this.setState({error: null})

        const loginInputs = {
            user_name: e.target.user_name.value,
            user_password: e.target.user_password.value,
        };

        return APIService.post('/auth/login', loginInputs)
            .then(response => {
                const token = response.authToken;
                TokenService.saveAuthToken(token);
                this.context.handleUserLog();
                this.props.history.push('/dashboard');
            })
            .catch(({error}) => {
                this.setState({error});
            });
    };
    
    render() {
        return (
            <form onSubmit={(e) => this.handleSubmitLoginForm(e)}>

                <label htmlFor="user_name">Username:</label>
                <input id="user_name" type="text" defaultValue=
                    {(!!window.localStorage.getItem('user_name'))
                        ? window.localStorage.getItem('user_name')
                        : ''}
                />
    
                <label htmlFor="user_password">Password:</label>
                <input id="user_password" type="password" />

                <button>Submit</button>
            </form>
        );
    };
};

export default LoginForm;