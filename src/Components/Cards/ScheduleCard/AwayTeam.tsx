
import React from 'react';
import Logo from '../../Logo/Logo';
import styled from 'styled-components';

//#region Styles
const StyledAwayTeam = styled.div`
    opacity: ${(props: AwayTeamProps) => props.didHomeWin === "homeWin" ? ".4" : "1"};
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

    div{
        display: flex;
        flex-direction: column;

        & *{
            margin: auto;
        }
    }
`;
//#endregion Styles

interface AwayTeamProps {
    didHomeWin?: string,
    awayTeamScore: string,
    teamName: string,
    teamCity: string,
    logoValue: string,
}

const AwayTeam: React.FC<AwayTeamProps> = (props) => {

    const {awayTeamScore, didHomeWin, logoValue, teamCity, teamName} = props;
    
    return (
        <StyledAwayTeam didHomeWin={didHomeWin} {...props}>
            <h2 className="score away-score">{awayTeamScore}</h2>
            <div>
                <h2>{teamName}</h2>
                <h3>{teamCity}</h3>
            </div>
            <Logo teamValue={logoValue} teamName={teamName}/>
        </StyledAwayTeam>
    )
}

export default AwayTeam;