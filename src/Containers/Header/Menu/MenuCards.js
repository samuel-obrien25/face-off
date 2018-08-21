import React from 'react';
import '../Menu/Menu.css';
import Card from '../../../Components/Cards/Card';

class MenuCards extends React.Component{
    
    render() {
        if (this.props.visible === false) {
            return <div></div>;
        } else {
        return (

            <div id="card_container_menu_chooser" className="menu-wrapper">
                
                <Card 
                    type = "menuCard"
                />

                <Card 
                    type = "menuCard"
                />
                <Card 
                    type = "menuCard"
                />
            </div>
        );
    }
    }
}
    export default MenuCards;
    