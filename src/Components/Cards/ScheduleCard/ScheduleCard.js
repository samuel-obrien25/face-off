import React from 'react';
import '../card.css';

import Team from '../TeamCard/Team';
import GameDateContainer from './GameDateContainer';


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

        <div className={`schedule-card card ${isGamePast} slide-in`}
            data-month={month}>

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

        </div>
    )
}
//TO DO
//==Fix current games UX
//==Add more game information onClick

export default ScheduleCard;

