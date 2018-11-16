import React from 'react';
import '../Menu/Menu.css';

import PrimaryMenu from './PrimaryMenu';

class Menu extends React.Component{
    
    render() {
        return (
            <div className={`menu-wrapper ${ this.props.activeClass }`}>
            <PrimaryMenu />
            </div>
        );
    }
    }
    
    export default Menu;
    