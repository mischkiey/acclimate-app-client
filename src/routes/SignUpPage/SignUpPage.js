import React, { Component } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

class LoginPage extends Component {
    render() {
        return (
            <>
                <h2>Welcome!</h2>
                <SignUpForm history={this.props.history}/>
            </>
        );
    };
};

export default LoginPage;