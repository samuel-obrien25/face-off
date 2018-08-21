import React from 'react';
import { Link } from "../../../../node_modules/react-router-dom/";


import '../Menu/Menu.css';

class PrimaryMenu extends React.Component{
    
    render() {
        return (
              <nav className="primary-menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/schedule">Schedule</Link></li>
                    <li><Link to="/teams">Teams</Link></li>
                    <li><Link to="/players">Players</Link></li>
                </ul>
            </nav>
              );
    }
    }
    
    export default PrimaryMenu;
    