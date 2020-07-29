import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';

class LoginPage extends Component {
    render() {
        console.log(this.props)
        return (
            <>
                <h2>Welcome back!</h2>
                <LoginForm history={this.props.history}/>
            </>
        );
    };
};

export default LoginPage;