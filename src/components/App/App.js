import React from 'react';
import { Route, Switch } from 'react-router-dom'; 
import Header from '../Header/Header';
import LandingPage from '../../routes/LandingPage/LandingPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import SignUpPage from '../../routes/SignUpPage/SignUpPage';
import Dashboard from '../../routes/Dashboard/Dashboard';
import SearchPage from '../../routes/SearchPage/SearchPage';
import AcclimateContext from '../../contexts/AcclimateContext';
import TokenService from '../../services/token-services';

class App extends React.Component {
    state = {
        log: false
    };

    handleUserLog = () => {
        const userLog = TokenService.hasAuthToken();
        console.log(userLog, 'User is logged in?')
        this.setState({log: userLog});
    };

    render() {
        const value = {
            log: this.state.log,
            handleUserLog: this.handleUserLog,
        };

        return (
            <>
                <AcclimateContext.Provider value={value}>
                    <Header handleUserLog={this.handleUserLog} log={this.state.log}/>
                    <main className='App'>
                        <Switch>
                            <Route path={'/loginpage'} component={LoginPage} />
                            <Route path={'/signuppage'} component={SignUpPage} />
                            <Route path={'/dashboard'} component={Dashboard} />
                            <Route path={'/searchpage'} component={SearchPage} />
                            <Route path={'/'} component={LandingPage} />                   
                        </Switch>
                    </main>
                </AcclimateContext.Provider>
            </>
        );
    };
};

export default App;