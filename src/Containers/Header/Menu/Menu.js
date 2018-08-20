import React from 'react';
import '../Menu/Menu.css';

import PrimaryMenu from './PrimaryMenu';
import SecondaryMenu from './SecondaryMenu';

class Menu extends React.Component{
    
    render() {
        return (
            <div className="menu-wrapper">
            <PrimaryMenu />
            <SecondaryMenu />
            </div>
        );
    }
    }
    
    export default Menu;
    