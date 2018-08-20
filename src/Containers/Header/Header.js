import React from 'react';
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';

import '../Header/Header.css';

class Header extends React.Component{
    
    render() {
        return (
        <header className="App-header">
            <h1 className="App-title">Faceoff</h1>
            <Menu />
            <Logo />
        </header>
        );
    }
    }
    
    export default Header;
    