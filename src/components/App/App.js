import React from 'react';
import { Route, Switch } from 'react-router-dom'; 
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
                    {/* Redundant? */}
                    <main className='main'>
                        <Switch>
                            <Route path={'/loginpage'} component={LoginPage} />
                            <Route path={'/signuppage'} component={SignUpPage} />
                            <Route path={'/searchpage'} component={SearchPage} />
                            <Route path={'/dashboard'} component={Dashboard} />
                            <Route path={'/'} component={LandingPage} />                   
                        </Switch>
                    </main>
                </AcclimateContext.Provider>
            </div>
        );
    };
};

export default App;