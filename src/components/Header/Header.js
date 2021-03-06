import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-services';
import { AcclimateContext } from '../../contexts/AcclimateContext';
import './Header.css';

function Header() {
    return (
        <AcclimateContext.Consumer>
            {value => {
                const links = (value.log || TokenService.hasAuthToken())
                    ? (
                        <ul>
                            <li className='tooltip'>
                                <Link
                                    className='y-btn'
                                    to='/helppage'
                                >
                                    <i className="material-icons">help_outline</i>
                                </Link>
                                <span className='tooltiptext'>
                                    Hints?
                                </span>
                            </li>
                            <li className='tooltip'>
                                <Link
                                    className='y-btn'
                                    to='/searchpage'
                                >
                                    <i className="material-icons">search</i>
                                </Link>
                                <span className='long tooltiptext'>
                                    Search database for disaster programs
                                </span>
                            </li>
                            <li className='tooltip'>
                                <Link
                                    className='y-btn'
                                    to='/dashboard'
                                >
                                    <i className="material-icons">dashboard</i>
                                </Link>
                                <span className='tooltiptext'>
                                    Dashboard
                                </span>
                            </li>
                            <li className='tooltip' >
                                <Link
                                    className='r-btn'
                                    onClick={() => value.handleUserLogOut()} to='/'
                                >
                                    <i className="material-icons">power_settings_new</i>
                                </Link>
                                <span className='long tooltiptext'>
                                    Stay safe out there!
                                </span>
                            </li>
                        </ul>
                    )
                    :
                    (<ul>
                        <li className='tooltip'>
                            <Link
                                className=''
                                to='/loginpage'
                            >
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link
                                className=''
                                to='/signuppage'
                            >
                                Signup
                            </Link>
                        </li>
                    </ul>)

                return (
                    <header className='group wrapper'>
                        <Link 
                            to='/'
                            className='item'
                        >
                            <h1>Acclimate.</h1>
                        </Link> 
                        <nav className='group item'>
                            {links}
                        </nav>
                    </header>
                );
            }}
        </AcclimateContext.Consumer>
    );
};

export default Header;