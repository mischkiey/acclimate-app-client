import React from 'react';
import { Route, Switch } from 'react-router-dom'; 
import Header from '../Header/Header';
import LandingPage from '../../routes/LandingPage/LandingPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import Dashboard from '../../routes/Dashboard/Dashboard';
import SearchPage from '../../routes/SearchPage/SearchPage';

class App extends React.Component {
    // state = {
    // }
    
    render() {
        return (
            <>
                <Header />
                <main className='App'>
                    <Switch>
                        <Route path={'/loginpage'} component={LoginPage} />
                        <Route path={'/dashboard'} component={Dashboard} />
                        <Route path={'/searchpage'} component={SearchPage} />
                        <Route path={'/'} component={LandingPage} />                   
                    </Switch>
                </main>
            </>
        );
    };
};

export default App;