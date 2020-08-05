import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import TokenService from '../../services/token-services';
import { AcclimateContext } from '../../contexts/AcclimateContext';

import Header from '../Header/Header';
import LandingPage from '../../routes/LandingPage/LandingPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import SignUpPage from '../../routes/SignUpPage/SignUpPage';
import Dashboard from '../../routes/Dashboard/Dashboard';
import SearchPage from '../../routes/SearchPage/SearchPage';
import HelpPage from '../../routes/HelpPage/HelpPage';

import './App.css';

class App extends Component {
    static contextType = AcclimateContext;

    render() {
        return (
            <>
                <Header />
                <main className='main wrapper'>
                    <Switch>
                        <Route path={'/loginpage'} component={LoginPage} />
                        <Route path={'/signuppage'} component={SignUpPage} />
                        <Route path={'/searchpage'} render={({...props}) => {
                            return (this.context.log || TokenService.hasAuthToken())
                                ? <SearchPage {...props} />
                                : <Redirect
                                    to={{
                                        pathname: '/loginpage',
                                        state: { from: props.location }
                                    }}
                                />
                        }}>
                        </Route>
                        <Route path={'/dashboard'} render={({...props}) => {
                            return (this.context.log || TokenService.hasAuthToken())
                                ? <Dashboard {...props} />
                                : <Redirect
                                    to={{
                                        pathname: '/loginpage',
                                        state: { from: props.location }
                                    }}
                                />
                        }}>
                        </Route>
                        <Route path={'/helppage'} render={({...props}) => {
                            return (this.context.log || TokenService.hasAuthToken())
                                ? <HelpPage {...props} />
                                : <Redirect
                                    to={{
                                        pathname: '/loginpage',
                                        state: { from: props.location }
                                    }}
                                />
                        }}>
                        </Route>
                        <Route path={'/'} component={LandingPage} />                   
                    </Switch>
                </main>
            </>
        );
    };
};

export default App;