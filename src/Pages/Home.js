import React from 'react';
import Header from '../Components/Header/Header';
import Menu from '../Components/Header/Menu/Menu';

class Home extends React.Component {
    render(){
        const h1Text = 'Face Off',
              h2Text = 'Quick access to NHL Schedule, Stats, and more';
    return(
        <div>
            <Header 
                headerH1 = {h1Text}
                headerH2 = {h2Text}
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