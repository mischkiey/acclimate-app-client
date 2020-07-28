import React from 'react';
import { NavLink } from 'react-router-dom';
import TokenService from '../../services/token-services';

// Fix this eyesore, you can do better
function Nav () {

    const links = (TokenService.hasAuthToken())
        ?
        (<ul>
            <li><NavLink activeClassName='' to='/searchpage'>Search Database</NavLink></li>
            <li><NavLink activeClassName='' to='/'>Logout</NavLink></li>
        </ul>)
        :
        (<ul>
            <li><NavLink activeClassName='' to='/loginpage'>Login</NavLink></li>
            <li><NavLink activeClassName='' to='/signuppage'>Sign up</NavLink></li>
        </ul>)

    return (
        <nav>
            {/* Render proper links when logged in or out by checking local storage for token */}
            {links}
        </nav>
    )
}

export default Nav;