import React from 'react';
import LoadingCircle from '../Loading/LoadingCircle';

import '../Header/Header.css';

class Header extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
        };
    }

    componentDidMount(){
        this.setState({isLoading: false});
    }
    
    render() {
        if(this.state.isLoading) {
            return (
                <header className={`App-header team${this.props.activeTeamID}`}>
                    <LoadingCircle />
                </header>
            )
        } else{
            return (
            <header className={`App-header team${this.props.activeTeamID}`}>
                <h1 className="App-title fade-in">{this.props.headerH1}</h1>
                <h2 className="App-subtitle fade-in">{this.props.headerH2}</h2>
                    {this.props.children}
            </header>
            );
        }
    }
}
export default Header;
    