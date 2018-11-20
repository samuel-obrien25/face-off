import React from 'react';

import '../Header/Header.css';

class Header extends React.Component{
    
    render() {
        return (
        <header className={`App-header ${this.props.activeTeamName}`}>
            <h1 className="App-title">{this.props.appTitle}</h1>
            <h2>{this.props.appSubTitle}</h2>
        </header>
        );
    }
    }
    
    export default Header;
    