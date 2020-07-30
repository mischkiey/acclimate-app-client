import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import TokenService from '../../services/token-services';
import './Header.css';

function Header(props) {

    const handleLogOutClick = () => {
        TokenService.clearAuthToken();
        props.handleUserLog()
    };
    
    const links = (props.log || TokenService.hasAuthToken())
        ?
        (<ul>
            <li><NavLink activeClassName='' to='/searchpage'>Search Database</NavLink></li>
            <li><NavLink activeClassName='' to='/dashboard'>Dashboard</NavLink></li>
            <li><NavLink activeClassName='' onClick={() => handleLogOutClick()} to='/'>Logout</NavLink></li>
        </ul>)
        :
        (<ul>
            <li><NavLink activeClassName='' to='/loginpage'>Log In</NavLink></li>
            <li><NavLink activeClassName='' to='/signuppage'>Sign Up</NavLink></li>
        </ul>)
    
    return (
        <>
            <header className='group'>
                <Link to='/' className='item'><h1>Acclimate</h1></Link> 
                <nav className='group item'>
                    {links}
                </nav>
            </header>
        </>
    );
};

export default Header;