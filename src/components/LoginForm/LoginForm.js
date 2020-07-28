import React, { Component } from 'react';

class LoginForm extends Component {
    state = {

    };

    handleSubmitLoginForm = (e) => {
        e.preventDefault();
    };
    
    render() {
        return (
            <form>
                <label htmlFor="user-name">Username:</label>
                <input id="user-name" type="text" />
    
                <label htmlFor="password">Password:</label>
                <input id="password" type="text" />
    
                <button onSubmit={this.handleSubmitLoginForm}>Submit</button>
            </form>
        );
    };
};

export default LoginForm;