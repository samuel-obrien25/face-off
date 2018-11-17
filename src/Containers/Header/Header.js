import React from 'react';
import Logo from './Logo/Logo';

import '../Header/Header.css';
import '../../Styles/league-colors.css';

class Header extends React.Component{
    
    render() {
        return (
        <header className="App-header">
            <h1 className="App-title">FACEOFF</h1>
            <h2>An Unnoficial App For All Your NHL Schedule Needs</h2>
        </header>
        );
    }
    }
    
    export default Header;
    