import React from 'react';
import '../Menu/Menu.css';

class SecondaryMenu extends React.Component{
    
    render() {
        return (
            <nav className="secondary-menu">
                <p>Sort by...</p>
                <ul>
                    <li>One</li>
                    <li>Two</li>
                    <li>Three</li>
                </ul>
            </nav>
        );
    }
    }
    
    export default SecondaryMenu;
    