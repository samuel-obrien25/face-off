import React from 'react';
import { NavLink } from "../../../../node_modules/react-router-dom/";

import '../Menu/Menu.css';

const Menu = (props) => {
    return (
        <nav className="primary-menu" >
            <ul id="primaryMenu" onChange={props.resetAPI}>
                <li>
                    <NavLink to="/" exact activeClassName="active_menu">Home</NavLink>
                </li>

                <li>
                    <NavLink to="/schedule" activeClassName="active_menu">Schedule</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;