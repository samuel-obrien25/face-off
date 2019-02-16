
import React from 'react';
import Logo from '../../Logo/Logo';
import styled from 'styled-components';

const StyledAwayTeam = styled.div`
    opacity: ${props => props.didHomeWin === "homeWin" ? ".4" : "1"};
`

const AwayTeam = (props) => {
    
    return (
        <StyledAwayTeam didHomeWin={props.didHomeWin}>
            <h2>{props.teamName}</h2>
            <h3>{props.teamCity}</h3>
            <Logo teamValue={props.logoValue} />
            <h2 className="score away-score">{props.awayTeamScore}</h2>
        </StyledAwayTeam>
    )
}

export default AwayTeam;