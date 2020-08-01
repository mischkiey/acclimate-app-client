import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom'; 
import TokenService from '../../services/token-services';
import Header from '../Header/Header';
import LandingPage from '../../routes/LandingPage/LandingPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import SignUpPage from '../../routes/SignUpPage/SignUpPage';
import Dashboard from '../../routes/Dashboard/Dashboard';
import SearchPage from '../../routes/SearchPage/SearchPage';
import AcclimateContext from '../../contexts/AcclimateContext';
import './App.css';

class App extends React.Component {
    state = {
        log: false
    };

    handleUserLog = () => {
        const log = TokenService.hasAuthToken();
        this.setState({log});
    };

    render() {
        const value = {
            // Triggers another render?
            log: this.state.log,
            handleUserLog: this.handleUserLog,
        };

        return (
            <div className='wrapper'>
                <Header handleUserLog={this.handleUserLog} log={this.state.log}/>
                <AcclimateContext.Provider value={value}>
                    <main className='main'>
                        <Switch>
                            <Route path={'/loginpage'} component={LoginPage} />
                            <Route path={'/signuppage'} component={SignUpPage} />
                            <Route path={'/searchpage'} render={({location}) => {
                                return (this.state.log || TokenService.hasAuthToken())
                                    ? <SearchPage />
                                    : <Redirect
                                        to={{
                                            pathname: '/loginpage',
                                            state: { from: location }
                                        }}
                                    />
                            }}>
                            </Route>
                            <Route path={'/dashboard'} render={({location}) => {
                                return (this.state.log || TokenService.hasAuthToken())
                                    ? <Dashboard />
                                    : <Redirect
                                        to={{
                                            pathname: '/loginpage',
                                            state: { from: location }
                                        }}
                                    />
                            }}>
                            </Route>
                            <Route path={'/'} component={LandingPage} />                   
                        </Switch>
                    </main>
                </AcclimateContext.Provider>
            </div>
        );
    };
};

export default App;