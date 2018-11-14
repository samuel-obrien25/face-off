import React from 'react';
import Logo from './Logo/Logo';

import '../Header/Header.css';
import '../../Styles/league-colors.css';

class Header extends React.Component{
    
    render() {
        return (
        <header className="App-header">
            <h1 className="App-title">Faceoff</h1>

            <Logo 
                value={this.props.value}
            />
        </header>
        );
    }
    }
    
    export default Header;
    