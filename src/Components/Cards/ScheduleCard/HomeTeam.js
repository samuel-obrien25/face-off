
import React from 'react';
import Logo from '../../Logo/Logo';
import styled from 'styled-components';

const StyledHomeTeam = styled.div`
    opacity: ${props => props.didHomeWin === "homeWin" ? "1" : ".4"};

`;

const HomeTeam = (props) => {

    return (
        <StyledHomeTeam didHomeWin={props.didHomeWin}>
            <h2>{props.teamName}</h2>
            <h3>{props.teamCity}</h3>
            <Logo teamValue={props.logoValue} />
            <h2 className="score home-score">{props.homeTeamScore}</h2>
        </StyledHomeTeam>
    )
}

export default HomeTeam;