import React from 'react';
import Team from '../TeamCard/Team';
import GameDateContainer from './GameDateContainer';
import styled from 'styled-components';

//#region STYLES
const StyledScheduleCard = styled.div`
        margin: auto 10px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        display: inline-block;
        height: 300px;
        width: 100%;
        min-width: 350px;
        transition: .25s ease-in-out;
        background: #fff;
        position: relative;
        border-radius: 5px;
        overflow: hidden;
        scroll-behavior: smooth;
        scroll-snap-align: center;
        background-color: ${props => props.isGamePast === "past" ? "#e0e0e0" : "#fff"};
`;

//#endregion STYLES



const ScheduleCard = (props) => {

    //So... I broke the Game Date Container into its own component.
    //HOWEVER, I still need to make the current date : game date comparison here, because it affects the style of the whole card.

    let currentDate = new Date(),
        currentGameDate = new Date(props.gameDateTime),
        month = currentGameDate.getMonth(),
        isGamePast = "past",
        didHomeWin;

    if (currentGameDate > currentDate) { isGamePast = "future"; }
    else { props.homeTeamScore > props.awayTeamScore ? didHomeWin = "homeWin" : didHomeWin = "homeLose"; }
    

    return (

        <StyledScheduleCard data-month={month} isPast={isGamePast}>

            <GameDateContainer
                gameDateTime={props.gameDateTime}
                activeTeamID={props.activeTeamID}
            />
            <Team
                didHomeWin={didHomeWin}
                awayTeamID={props.awayTeamID}
                teamName={props.teamName}
                teamCity={props.teamCity}
                awayTeamScore={props.awayTeamScore}
            />
            <p>At</p>
            <Team
                isHomeTeam={true}
                didHomeWin={didHomeWin}
                homeTeamID={props.homeTeamID}
                teamName={props.teamName}
                teamCity={props.teamCity}
                homeTeamScore={props.homeTeamScore}
            />

        </StyledScheduleCard>
    )
}
//TO DO
//==Fix current games UX
//==Add more game information onClick

export default ScheduleCard;

