import React from 'react';
import '../Cards/card.css';

class MenuCard extends React.Component{
    constructor(props){
        super(props);
    }

    render() { 
           return (
            <button className="card menuCard"
                    onClick={this.props.onClick}
                    type={this.props.type}
                  >
                    <h2>{this.props.type}</h2>
            </button>
                    )
                }
            }
export default MenuCard