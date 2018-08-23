import React from 'react';
import '../Logo/Logo.css';

export default class Logo extends React.Component{
    constructor (props){
        super(props);
    
        this.state = {
            results: ''
        };
    }


render(){

    return(
        <div className="svg-container">
            {this.props.SVG}
        </div>
    )}

}

