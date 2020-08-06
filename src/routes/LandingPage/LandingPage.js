import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage () {
    return (
        <div className='white'>
            <i className="material-icons">face</i>
            <h2>Hello and welcome to Acclimate!</h2>
            <p>
                Acclimate is an informational and utility disaster management app that aims to provide accurate, reliable, and useful information and tools to be able to handle impending disasters systematically and effectively
            </p>
            <hr/>
            
            <h2>How It Works:</h2>
            <ol>
                <li>
                    The app provides the user with general information on a selected disaster
                </li>
                <li>
                    The app provides disaster management plans that has steps for before, during, and after the event
                </li>
                <li>
                    The app provides the user with a highly-customizable task list and shopping list
                </li>
                <li>
                    Users may add steps from the chosen disaster plan to their lists where appropriate at the push of a button
                </li>
            </ol>
            <hr />
            <p>Click <Link to={'/signuppage'}>'Signup'</Link> to create an account and get started!</p>
        </div>
    );
};

export default LandingPage;