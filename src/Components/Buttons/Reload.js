import React from 'react';
import '../Buttons/Buttons.css';

const Reload = () => {
  return (
    <button className="fade-in reload-button" onClick={ window.location.reload() }>Try again?</button>
  )
}

export default Reload;
