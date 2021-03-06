import React from 'react';
import Logo from '../../Logo/Logo';
import styled from 'styled-components';
import '../../../Styles/league-colors.css';
import GetTeamStats from '../../../API/GetTeamStats';

//#region STYLES
const StyledTeamCard = styled.div`
        margin: 10px auto;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        display: flex;
        flex-direction: column;
        height: 100px;
        width: 100%;
        transition: .25s ease-in-out;
        position: relative;
        border-radius: 5px;
        float: left;
        overflow: hidden;
        scroll-behavior: smooth;

        :hover {
            cursor: pointer;
        }

        & h2, h3, .logo-container{
            position: relative;
            margin: auto;
            left: auto;
            right: auto;
        }

        @media (min-width: 600px) {
            max-width: 45%;
            height: 350px;
            margin: 10px;

           :hover {
                transform:translateY(-5px);
                box-shadow: 2px 4px 6px rgba(0,0,0,.4);
            }

            & h2, h3{
                padding-left: 0px;
                margin-bottom: 0px;
            }

        }

        @media (min-width: 1000px) {
            max-width: 22%;
        }
`;

const StyledCityName = styled.h2`
            font-size: 18px;
            padding-left:20px;

`;

const StyledTeamName = styled.h3`
    font-size: 28px;
    padding-left: 20px;

`;
//#endregion STYLES

interface TeamCardProps {
    cityName: string,
    onClick: () => void,
    teamName: string,
    teamValue: string,
}
const TeamCard: React.FC<TeamCardProps> = (props) => {

    const { cityName, onClick, teamName, teamValue } = props

    const teamStatsBaseURL = 'https://api.mysportsfeeds.com/v2.0/pull/nhl/2019-2020-regular/team_stats_totals.json?team=',
          recordQuery = teamStatsBaseURL + teamValue;

    return (
        <StyledTeamCard className={`card team-card team${teamValue}`} onClick={onClick} teamValue={teamValue} data-teamid={teamValue} {...props}>
            <StyledCityName>{cityName}</StyledCityName>
            <StyledTeamName>{teamName}</StyledTeamName>
            <GetTeamStats teamStatsLocation="teamCard" ApiLink="teamStatsQuery" url={recordQuery}/>
            <Logo cardType={"teamCard"} teamValue={teamValue} teamName={teamName}/>
        </StyledTeamCard>
    )
}

export default TeamCard;