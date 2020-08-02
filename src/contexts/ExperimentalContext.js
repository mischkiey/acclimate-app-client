import React, { Component } from 'react';
import TokenService from '../services/token-services';

export const ExperimentalContext = React.createContext({});

export class ExperimentalProvider extends Component {
    state = {
        log: false,
        tasks: [],
        shoppingItems: [],
    };

    handleUserLog = () => {
        const log = TokenService.hasAuthToken();
        this.setState({log});
    };

    handleUserLogOut = () => {
        TokenService.clearAuthToken();
        this.handleUserLog();
    };

    setTasks = (tasks) => {
        this.setState({tasks})
    };

    setShoppingItems = (shoppingItems) => {
        this.setState({shoppingItems})
    };

    render() {
        const value = {
            log: this.state.log,
            tasks: this.state.tasks,
            shoppingItems: this.state.shoppingItems,

            handleUserLog: this.handleUserLog,
            handleUserLogOut: this.handleUserLogOut,
            setTasks: this.setTasks,
            setShoppingItems: this.setShoppingItems,
        };

        return (
            <ExperimentalContext.Provider value={value}>
                {this.props.children}
            </ExperimentalContext.Provider>
        );
    };
};

