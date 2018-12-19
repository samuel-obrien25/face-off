import React from 'react';
import Reload from '../Components/Buttons/Reload'



import "./Error.css";

const Error = () => {
        return(
            <div className="error-container">
                <h2>Sorry about that...</h2>
                <p>Looks like an error occurred.</p>
                <br/>
                <Reload />
            </div>
        )
    }
    
export default Error;