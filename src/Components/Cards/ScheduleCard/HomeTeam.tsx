
import React from 'react';
import Logo from '../../Logo/Logo';
import styled from 'styled-components';

//#region Styles
const StyledHomeTeam = styled.div`
    opacity: ${(props:HomeTeamProps) => props.didHomeWin === "homeWin" ? "1" : ".4"};
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

interface HomeTeamProps{
    didHomeWin: string,
    homeTeamScore?: string,
    logoValue: string,
    teamCity: string,
    teamName: string
}

const HomeTeam: React.FC<HomeTeamProps> = (props) => {
    const { didHomeWin, homeTeamScore, logoValue, teamCity, teamName } = props;

    return (
        <StyledHomeTeam didHomeWin={didHomeWin} {...props}>
            <Logo teamValue={logoValue} teamName={teamName}/>
            <StyledTeamNameWrapper>
                <h3>{teamCity}</h3>
                <h2>{teamName}</h2>
            </StyledTeamNameWrapper>
            <h2 className="score home-score">{homeTeamScore}</h2>
        </StyledHomeTeam>
    )
}

export default HomeTeam;