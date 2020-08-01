import React, { Component } from 'react';
import APIService from '../../services/api-services';
import AcclimateContext from '../../contexts/AcclimateContext';
import './SignUpForm.css';

class SignUpForm extends Component {
    static contextType = AcclimateContext;

    state = {
        error: null,
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
                <form onSubmit={(e) => this.handleSubmitSignUpForm(e)}>
                    
                    {
                        (this.state.error)
                            ? 
                                <div className='error'>
                                    <p className='error'>{this.state.error}</p>
                                </div>
                            : ''
                    }

                    <label htmlFor="user_full_name">Full Name:</label>
                    <input id="user_full_name" type="text" />

                    <label htmlFor="user_name">Username:</label>
                    <input id="user_name" type="text" />
        
                    <label htmlFor="user_password">Password:</label>
                    <input id="user_password" type="text" />

                    <div>
                        <button className='y-btn'>Submit<i className="material-icons">create</i></button>
                    </div>
                    
                </form>
            </>
        );
    };
};

export default SignUpForm;