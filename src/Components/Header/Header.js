import React from 'react';

import '../Header/Header.css';

class Header extends React.Component{

    componentDidUpdate(){
        
    }
    
    render() {
        return (
        <header className={`App-header team${this.props.activeTeamID}`}>
            <h1 className="App-title">{this.props.headerH1}</h1>
            <h2 className="App-subtitle">{this.props.headerH2}</h2>
        </header>
        );
    }
    }
    
    export default Header;
    