
import React from 'react';
import Logo from '../../Logo/Logo';
import styled from 'styled-components';

//#region Styles
const StyledAwayTeam = styled.div`
    opacity: ${props => props.didHomeWin === "homeWin" ? ".4" : "1"};
    display: flex;
    flex-direction: row;
    position: relative;
    margin: auto;
    width: 100%;
    height:auto;
    padding: 30px 0;

    & * {
        margin: auto;
    }
`;

const StyledTeamNameWrapper = styled.div`
    display: flex;
    flex-direction: column;

    & * {
        margin: auto;
    }
`;
//#endregion Styles

const AwayTeam = (props) => {
    
    return (
        <StyledAwayTeam didHomeWin={props.didHomeWin}>
            <h2 className="score away-score">{props.awayTeamScore}</h2>
            <StyledTeamNameWrapper>
                <h2>{props.teamName}</h2>
                <h3>{props.teamCity}</h3>
            </StyledTeamNameWrapper>
            <Logo teamValue={props.logoValue} />
        </StyledAwayTeam>
    )
}

export default AwayTeam;