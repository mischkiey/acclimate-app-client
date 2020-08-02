import React, { Component } from 'react';
import TokenService from '../services/token-services';

export const ExperimentalContext = React.createContext({});

export class ExperimentalProvider extends Component {
    state = {
        log: false,
        message: 'This is a message from up above'
    };

    handleUserLog = () => {
        const log = TokenService.hasAuthToken();
        this.setState({log});
    };

    render() {
        const value = {
            message: this.state.message,
            handleUserLog: this.handleUserLog,
        };

        return (
            <ExperimentalContext.Provider value={value}>
                {this.props.children}
            </ExperimentalContext.Provider>
        );
    };
};

