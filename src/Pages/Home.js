import React from 'react';
import Header from '../Components/Header/Header';
import Menu from '../Components/Header/Menu/Menu';

class Home extends React.Component {
    render(){
    return(
        <div>
        <Header />
        <div className="wrapper wrapper__home">
        <Menu 
                onClick={this.props.onClick}
                activeLink={this.props.activeLink}
            />        </div>
        </div>
    )
}
}

export default Home;