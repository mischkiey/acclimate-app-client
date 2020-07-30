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
        console.log('Is user logged in?', log);
        this.setState({log});
    };

    render() {
        const value = {
            log: this.state.log,
            handleUserLog: this.handleUserLog,
        };

        return (
            <div className='wrapper'>
                <AcclimateContext.Provider value={value}>
                    {/* Redundant? */}
                    <Header handleUserLog={this.handleUserLog} log={this.state.log}/>
                    <main className=''>
                        <Switch>
                            <Route path={'/loginpage'} component={LoginPage} />
                            <Route path={'/signuppage'} component={SignUpPage} />
                            <Route path={'/dashboard'} component={Dashboard} />
                            <Route path={'/searchpage'} component={SearchPage} />
                            <Route path={'/'} component={LandingPage} />                   
                        </Switch>
                    </main>
                </AcclimateContext.Provider>
            </div>
        );
    };
};

export default App;