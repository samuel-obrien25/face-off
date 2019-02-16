import React from 'react';

const Reload = () => {
  return (
    <button className="fade-in reload-button" onClick={ window.location.reload() }>Try again?</button>
  )
}

export default Reload;
