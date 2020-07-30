import React from 'react';
import './LandingPage.css';

function LandingPage () {
    return (
        <>
            <h2>Description:</h2>
            <p>Acclimate is an informational and utility disaster management app that aims to provide accurate, reliable, and useful information and tools to be able to handle impending disasters systematically and effectively</p>
            
            <h2>How It Works:</h2>
            <ol>
                <li>The app will provide users with general information on a selected disaster</li>
                <li>The app will generate a disaster management plan (based on user-selection) that has steps for before, during, and after the event</li>
                <li>The app will also generate a task list that incorporates the above plan</li>
                <li> The app will also generate a shopping list with recommended supplies</li>
                <li> Users can personalize the task and shopping lists to tailorfit their current circumstances/needs</li>
            </ol>
        </>
    );
};

export default LandingPage;