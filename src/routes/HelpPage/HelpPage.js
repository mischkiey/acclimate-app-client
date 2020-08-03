import React, { Component } from 'react';

class HelpPage extends Component {
    render() {
        return (
            <div className='white'>
                <i className="material-icons">face</i>
                <h2>Description:</h2>
                <p>
                    Acclimate is an informational and utility disaster management app that aims to provide accurate, reliable, and useful information and tools to be able to handle impending disasters systematically and effectively
                </p>
                
                <h2>How It Works:</h2>
                <ol>
                    <li>
                        The app provides users with general information on a selected disaster
                    </li>
                    <li>
                        The app will generate a disaster management plan (based on user-selection) that has steps for before, during, and after the event
                    </li>
                    <li>
                        The app will also generate a task list that incorporates the above plan
                    </li>
                    <li>
                        The app will also generate a shopping list with recommended supplies
                    </li>
                    <li>
                        Users can personalize the task and shopping lists to tailorfit their current circumstances/needs
                    </li>
                </ol>

                <h2>Credits</h2>
            </div>
        );
    };
};

export default HelpPage;