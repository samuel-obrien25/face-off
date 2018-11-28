import React from 'react';
import '../Buttons/Buttons.css';

class Fab extends React.Component{

    //ClassName gets class from conditional rendering in the Schedule.js component.
    //onClick gets set in Schedule.js component.
    //Visible is a boolean that is derived from State in Schedule.js

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