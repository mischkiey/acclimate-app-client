import React, { Component } from 'react';
import APIService from '../../services/api-services';
import { AcclimateContext } from '../../contexts/AcclimateContext';

class SignUpForm extends Component {
    static contextType = AcclimateContext;

    state = {
        error: null,
    };

    handleUserNameValidation = (e) => {
        const user_name = e.target.value;
        if (user_name.indexOf(' ') >= 0) {
            this.setState({error: 'Username must not contain any spaces, please'})
        } else {
            this.setState({error: null})
        };
    };

    handleSubmitSignUpForm = (e) => {
        e.preventDefault();

        this.setState({error: null});

        const signUpInputs = {
            user_full_name: e.target.user_full_name.value,
            user_name: e.target.user_name.value,
            user_password: e.target.user_password.value,
        };

        return APIService.post('/user', signUpInputs)
            .then(response => {
                window.localStorage.setItem('user_name', response.user_name)
                this.context.handleUserLog();
                this.props.history.push('/loginpage')
            })
            .catch(({error}) => {
                this.setState({error})
            });
    };
    
    render() {
        return (
            <>
                <form className='white' onSubmit={(e) => this.handleSubmitSignUpForm(e)}>
                    {
                        (this.state.error)
                            ? 
                                <div className='error'>
                                    <p className='error'>
                                        <i className="material-icons">error</i>
                                        {this.state.error}!                                        
                                    </p>
                                </div>
                            : ''
                    }

                    <label htmlFor="user_full_name">Enter Full Name:</label>
                    <input
                        id="user_full_name"
                        type="text"
                    />

                    <label htmlFor="user_name">Enter New Username:</label>
                    <input
                        id="user_name"
                        onChange={(e) => this.handleUserNameValidation(e)}
                        type="text" 
                    />
                    <div className='input-tooltip'>
                        <label htmlFor="user_password">Enter New Password:</label>
                        <input
                            id="user_password"
                            type="password"
                        />
                        <span className='input-tooltiptext'>
                            Password must not start nor end with spaces, have more than 8 characters, and contain 1 upper, 1 lower, 1 number, and 1 special character.
                        </span>
                    </div>

                    <div>
                        <button className='y-btn'>
                            <i className="material-icons">create</i>
                        </button>
                    </div>
                    
                </form>
            </>
        );
    };
};

export default SignUpForm;