import React, { Component } from 'react';
import TokenService from '../services/token-services';

export const AcclimateContext = React.createContext({});

export class AcclimateProvider extends Component {
    state = {
        log: false,
        disasters: [],
        programs: [],
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

    setDisasters = (disasters) => {
        this.setState({disasters});
    }

    setPrograms = (programs) => {
        this.setState({programs});
    }

    setTasks = (tasks) => {
        this.setState({tasks});
    };

    setShoppingItems = (shoppingItems) => {
        this.setState({shoppingItems});
    };

    render() {
        const value = {
            log: this.state.log,
            disasters: this.state.disasters,
            programs: this.state.programs,
            tasks: this.state.tasks,
            shoppingItems: this.state.shoppingItems,

            handleUserLog: this.handleUserLog,
            handleUserLogOut: this.handleUserLogOut,

            setDisasters: this.setDisasters,
            setPrograms: this.setPrograms,
            setTasks: this.setTasks,
            setShoppingItems: this.setShoppingItems,
        };

        return (
            <AcclimateContext.Provider value={value}>
                {this.props.children}
            </AcclimateContext.Provider>
        );
    };
};