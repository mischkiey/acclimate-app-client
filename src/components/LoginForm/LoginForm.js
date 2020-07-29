import React, { Component } from 'react';
import APIService from '../../services/api-services';
import TokenService from '../../services/token-services';

class LoginForm extends Component {
    state = {
        error: null,
    };

    handleSubmitLoginForm = (e) => {
        e.preventDefault();

        this.setState({error: null})

        const user_name = e.target.user_name.value;
        const user_password = e.target.user_password.value;
        const loginInputs = {user_name, user_password};

        return APIService.post('/auth/login', loginInputs)
            .then(response => {
                const token = response.authToken;
                TokenService.saveAuthToken(token);
                this.props.history.push('/dashboard');
            })
            .catch(error => {
                this.setState({...error});
            });
    };
    
    render() {
        console.log(this.props)
        return (
            <form onSubmit={(e) => this.handleSubmitLoginForm(e)}>

                <label htmlFor="user_name">Username:</label>
                <input id="user_name" type="text" />
    
                <label htmlFor="user_password">Password:</label>
                <input id="user_password" type="text" />

                <button>Submit</button>
            </form>
        );
    };
};

export default LoginForm;