import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginPage.css';

class LoginPage extends Component {
    render() {
        return (
            <>
                <h2 className='center'>
                    {
                        (!!window.localStorage.getItem('user_name'))
                            ? `Welcome, ${window.localStorage.getItem('user_name')}!`
                            : 'Please login to continue.'
                    }
                </h2>
                {/* <LoginForm history={this.props.history}/> */}
                <LoginForm {...this.props} />
            </>
        );
    };
};

export default LoginPage;