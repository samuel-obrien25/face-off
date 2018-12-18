import React from 'react';
import '../Buttons/Buttons.css';

const Fab = (props) => {
  return (
    <button className={`fade-in ${props.fabClass}`}
            onClick={props.onClick}
            visibile={props.isActive}
    >   
        <h3>{props.fabText}</h3>
    </button>
  )
}

export default Fab;
