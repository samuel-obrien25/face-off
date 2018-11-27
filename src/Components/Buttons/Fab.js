import React from 'react';
import '../Buttons/Buttons.css';

class Fab extends React.Component{

    render() {

        if(!this.props.visible){
             return (
                <button className={`fab hidden ${this.props.className}`}
                        onClick={this.props.onClick}
                        visibile={this.props.isActive}
                        >
                    <h3>{this.props.fabText}</h3>
                </button>
            )
        } else {
              return (
            <button className={`fab fade-in ${this.props.className}`}
                    onClick={this.props.onClick}
                    visibile={this.props.isActive}
                    >
                <h3>{this.props.fabText}</h3>
            </button>
        )
    }
}
}

export default Fab;