import React from 'react';
import '../Buttons/Buttons.css';

class Fab extends React.Component{

    constructor (props){
        super(props);
    }

    render() {

        if(this.props.visible === false){ return (
            <button className="fab hidden"
                    onClick={this.props.onClick}
                    visibile={this.props.isActive}
                    >
                BACK
            </button>
        )} else {  return (

            <button className="fab fade-in"
                    onClick={this.props.onClick}
                    visibile={this.props.isActive}
                    >
                BACK
            </button>
        )
    }
}
}

export default Fab;