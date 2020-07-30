import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import TokenService from '../../services/token-services';

function Header(props) {

    const handleLogOutClick = () => {
        TokenService.clearAuthToken();
        props.handleUserLog()
    };
    
    const links = (props.log || TokenService.hasAuthToken())
        ?
        (<ul>
            <li><NavLink activeClassName='' to='/searchpage'>Search Database</NavLink></li>
            <li><NavLink activeClassName='' onClick={() => handleLogOutClick()} to='/'>Logout</NavLink></li>
        </ul>)
        :
        (<ul>
            <li><NavLink activeClassName='' to='/loginpage'>Login</NavLink></li>
            <li><NavLink activeClassName='' to='/signuppage'>Sign up</NavLink></li>
        </ul>)
    
    return (
        <>
            <header className=''>
            <Link to='/'><h1 className=''>Acclimate</h1></Link> 
            <nav>
                {links}
            </nav>
            </header>
        </>
    );
};

export default Header;