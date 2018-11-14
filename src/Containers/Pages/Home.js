import React from 'react';
import Header from '../Header/Header';
import Menu from '../Header/Menu/Menu';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
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