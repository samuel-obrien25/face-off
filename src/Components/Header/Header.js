import React from 'react';

import '../Header/Header.css';

class Header extends React.Component{

    componentDidUpdate(){
        
    }
    
    render() {
        return (
        <header className={`App-header team${this.props.activeTeamID}`}>
            <h1 className="App-title fade-in">{this.props.headerH1}</h1>
            {this.props.children}
        </header>
        );
    }
    }
    
    export default Header;
    