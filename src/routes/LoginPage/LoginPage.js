import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginPage.css';

class LoginPage extends Component {
    render() {
        return (
            <>
                <h2 className='center'>Welcome back!</h2>
                <LoginForm history={this.props.history}/>
            </>
        );
    };
};

export default LoginPage;