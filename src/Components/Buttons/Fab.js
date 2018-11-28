import React from 'react';
import '../Buttons/Buttons.css';

class Fab extends React.Component{

    render() {
      return (
        <button className={`fade-in ${this.props.fabClass}`}
                onClick={this.props.onClick}
                visibile={this.props.isActive}
        >   
            <h3>{this.props.fabText}</h3>
        </button>
      )
    }
}

export default Fab;