import React from 'react';
import { NavLink } from "../../../../node_modules/react-router-dom/";

import '../Menu/Menu.css';

class PrimaryMenu extends React.Component{

    render() {

        return (
              <nav className="primary-menu" >
                <ul id="primaryMenu" onChange={this.props.resetAPI}>
                    <li>
                        <NavLink to="/" exact activeClassName="active_menu">Home</NavLink>
                    </li>

                    <li>
                        <NavLink to="/schedule" activeClassName="active_menu">Schedule</NavLink>
                    </li>

                    <li>
                        <NavLink to="/teams" activeClassName="active_menu">Teams</NavLink>
                    </li>
                    
                    <li>
                        <NavLink to="/players" activeClassName="active_menu">Players</NavLink>
                    </li>
                </ul>
            </nav>
              );
    }
    }
    
    export default PrimaryMenu;
    