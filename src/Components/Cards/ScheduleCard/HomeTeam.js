
import React from 'react';
import Logo from '../../Logo/Logo';
import styled from 'styled-components';

//#region Styles
const StyledHomeTeam = styled.div`
    opacity: ${props => props.didHomeWin === "homeWin" ? "1" : ".4"};
    display: flex;
    flex-direction: row;
    height: auto;
    width: 100%;
    position: relative;
    margin: auto;
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

const HomeTeam = (props) => {
    return (
        <StyledHomeTeam didHomeWin={props.didHomeWin}>
        <Logo teamValue={props.logoValue} teamName={props.teamName}/>
        <StyledTeamNameWrapper>
            <h3>{props.teamCity}</h3>
            <h2>{props.teamName}</h2>
        </StyledTeamNameWrapper>
            <h2 className="score home-score">{props.homeTeamScore}</h2>
        </StyledHomeTeam>
    )
}

export default HomeTeam;