import React from 'react';
import '../Cards/card.css';

class MenuCard extends React.Component{

    render() {
           return (
            <div className="schedule-card-info fade-out">
                <h2>Time: {this.props.gameTime}</h2>
                <h2>Location: {this.props.gameLocation}</h2>
                <h2>Where to watch: {this.props.networks}</h2>
                
            </div>
                    )
                }
            }
export default MenuCard