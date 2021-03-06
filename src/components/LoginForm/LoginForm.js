import React, { Component } from 'react';
import APIService from '../../services/api-services';
import TokenService from '../../services/token-services';
import { AcclimateContext } from '../../contexts/AcclimateContext';

class LoginForm extends Component {
    static contextType = AcclimateContext;

    state = {
        error: null,
    };

    handleSubmitLoginForm = (e) => {
        e.preventDefault();

        this.setState({error: null});

        const loginInputs = {
            user_name: e.target.user_name.value,
            user_password: e.target.user_password.value,
        };

        return APIService.post('/auth/login', loginInputs)
            .then(response => {
                const token = response.authToken;
                TokenService.saveAuthToken(token);
                this.context.handleUserLog();

                if(!!window.localStorage.getItem('user_name')) {
                    this.props.history.push('/helppage');
                } else {
                    this.props.history.push('/dashboard');
                };
            })
            .catch(({error}) => {
                this.setState({error})
            });
    };
    
    render() {
        return (
            <form className='white' onSubmit={(e) => this.handleSubmitLoginForm(e)}>
                {
                    (this.state.error)
                        ? 
                            <div className='error'>
                                <p className='error'><i className="material-icons">error</i> {this.state.error}!</p>
                            </div>
                        : ''
                }
                
                <label htmlFor="user_name">Username:</label>
                <input id="user_name" type="text" defaultValue=
                    {
                        (!!window.localStorage.getItem('user_name'))
                            ? window.localStorage.getItem('user_name')
                            : ''
                    }
                />

                <label htmlFor="user_password">Password:</label>
                <input id="user_password" type="password" />
                
                <div>
                    <button className='y-btn'><i className="material-icons">vpn_key</i></button>
                </div>

            </form>
        );
    };
};

export default LoginForm;