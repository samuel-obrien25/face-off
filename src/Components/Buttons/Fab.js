import React from 'react';
import '../Buttons/Buttons.css';

class Fab extends React.Component{

<<<<<<< HEAD
    constructor (props){
        super(props);
    }

=======
>>>>>>> 01dce747b2cfd2fae35ad5a24098c8dce6e6d439
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