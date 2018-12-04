import React from 'react';
import '../Buttons/Buttons.css';

const ThreeDotMenu = () => {

    const handleClick = (e) => {
        e.stopPropagation();
         
        
        e.target.closest(".three-dot-menu").classList.toggle("hidden-three-dot-menu");
        e.target.closest("three-dot-menu-wrapper").classList.toggle("three-dot-menu-wrapper-active");
    }

    return (
        <div className="three-dot-menu-wrapper"
             onClick={handleClick}
        >
        <div className= "three-dot-button"
        >
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
        </div>
        <div className="three-dot-menu hidden-three-dot-menu">
        <h2> <span>&#9733;</span> Favorite Team</h2>
        </div>
        </div>
      )
}

export default ThreeDotMenu;