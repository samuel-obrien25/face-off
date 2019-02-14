import React from 'react';
import Logo from '../../Logo/Logo';
import '../card.css';
import styled from 'styled-components';

//#region STYLES
const StyledTeamCard = styled.div`

`

//#endregion STYLES


const TeamCard = (props) => {
    
    return(
        <div className= "card team-card"
             onClick={props.onClick}
             teamValue={props.teamValue}//Might be redundant?
             >
                <h2>{props.cityName}</h2>
                <h3>{props.teamName}</h3>
                <Logo teamValue={props.teamValue} />
        </div>
    )

}

export default TeamCard;