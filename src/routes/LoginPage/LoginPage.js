import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginPage.css';

function LoginPage(props) {
    return (
        <>
            <h2 className='center'>
                {
                    (!!window.localStorage.getItem('user_name'))
                        ? `Welcome, ${window.localStorage.getItem('user_name')}!`
                        : 'Please login to continue.'
                }
            </h2>
            <p className='center'>Demo Credentials: Username: test, Password: test</p>
            <LoginForm {...props} />
        </>
    );
};

export default LoginPage;