import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-services';
import { ExperimentalContext } from '../../contexts/ExperimentalContext';
import './Header.css';

function Header() {
    return (
        <ExperimentalContext.Consumer>
            {value => {
                const links = (value.log || TokenService.hasAuthToken())
                    ? (
                        <ul>
                            <li>
                                <Link
                                    className='y-link'
                                    to='/searchpage'
                                >
                                    <i className="material-icons">search</i>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className='y-link'
                                    to='/dashboard'
                                >
                                    <i className="material-icons">dashboard</i>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className='r-link'
                                    onClick={() => value.handleUserLogOut()} to='/'
                                >
                                    <i className="material-icons">power_settings_new</i>
                                </Link>
                            </li>
                        </ul>
                    )
                    :
                    (<ul>
                        <li>
                            <Link
                                className=''
                                to='/loginpage'
                            >
                                Log In
                            </Link>
                        </li>
                        <li>
                            <Link
                                className=''
                                to='/signuppage'
                            >
                                Sign Up
                            </Link>
                        </li>
                    </ul>)

                return (
                    <header className='group wrapper'>
                        <Link to='/' className='item'><h1>Acclimate.</h1></Link> 
                        <nav className='group item'>
                            {links}
                        </nav>
                    </header>
                );
            }}
        </ExperimentalContext.Consumer>
    );
};

export default Header;