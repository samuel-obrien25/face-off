import React from 'react';
import '../Buttons/Buttons.css';

const ThreeDotMenu = () => {

    let handleClick = (e) => {
        e.stopPropagation();
       if(e.target.classList.contains("three-dot-menu-wrapper")){
           e.target.lastChild.classList.toggle("hidden-three-dot-menu");
       } else if(e.target.classList.contains("three-dot-button")){
           e.target.parentElement.lastChild.classList.toggle("three-dot-menu-wrapper");
       } else {
           e.target.parentElement.parentElement.lastChild.classList.toggle("hidden-three-dot-menu");
       }
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