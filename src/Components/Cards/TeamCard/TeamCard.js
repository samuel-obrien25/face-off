import React from 'react';
import Logo from '../../Logo/Logo';
import styled from 'styled-components';
import '../../../Utilities/league-colors.css';
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
        background: #fff;
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

        & h2{
            font-size: 18px;
            padding-left:20px;
        }

        & h3{
            font-size: 28px;
            padding-left: 20px;
        }

        @media (min-width: 600px) {
            width: 250px;
            height: 350px;
            display:flex;
            flex-direction: column;
            margin: 15px auto;

           :hover {
                transform:translateY(-5px);
                box-shadow: 2px 4px 6px rgba(0,0,0,.4);
            }

            & h2, h3{
                padding-left: 0px;
            }

        }
`;

const StyledTeamRecord = styled(GetTeamStats)`
    font-size: 18px;
`;

//#endregion STYLES



const TeamCard = (props) => {

    const teamStatsBaseURL = 'https://api.mysportsfeeds.com/v2.0/pull/nhl/2018-2019-regular/team_stats_totals.json?team=',
           recordQuery = teamStatsBaseURL + props.teamValue;

    return (
        <StyledTeamCard className={`card team-card team${props.teamValue}`} onClick={props.onClick} teamValue={props.teamValue} data-teamid={props.teamValue}>
            <h2>{props.cityName}</h2>
            <h3>{props.teamName}</h3>
            <StyledTeamRecord ApiLink="teamStatsQuery" url={recordQuery}/>
            <Logo cardType={"teamCard"} teamValue={props.teamValue} />
        </StyledTeamCard>
    )
}

export default TeamCard;