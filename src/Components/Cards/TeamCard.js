import React from 'react';
import Logo from '../Logo/Logo';
import '../Cards/card.css';

const TeamCard = (props) => {
    return(
        <div className= "card team-card slide-in"
             onClick={props.onClick}
             teamValue={props.teamValue}
             >
                <h2>{props.cityName}</h2>
                <h3>{props.teamName}</h3>
                <Logo teamValue={props.teamValue} />
        </div>

    )
}

export default TeamCard;