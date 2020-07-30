import React, { Component } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import './SignUpPage';

class SignUpPage extends Component {
    render() {
        return (
            <>
                <h2 className='center'>Welcome!</h2>
                <SignUpForm history={this.props.history}/>
            </>
        );
    };
};

export default SignUpPage;