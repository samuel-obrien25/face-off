import React from 'react';
import Header from '../Components/Header/Header';
import Menu from '../Components/Header/Menu/Menu';

class Home extends React.Component {
    render(){
    return(
        <div>
            <Header
                appTitle="Face Off"
                appSubTitle="Quick access to NHL Schedule, Stats, and more"
            />
            <div className="wrapper wrapper__home">
                <Menu 
                    onClick={this.props.onClick}
                    activeLink={this.props.activeLink}
                />        
            </div>
        </div>
    )
}
}

export default Home;