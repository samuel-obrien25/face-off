import React from 'react';
import '../card.css';

import HomeTeam from '../ScheduleCard/HomeTeam';
import AwayTeam from '../ScheduleCard/AwayTeam';
import GameDate from '../ScheduleCard/GameDate';


const ScheduleCard = (props) => {
    //TO DO
    //==Split Date into its own component
    //==Fix current games UX
    //==Add more game information onClick


        //Gets date from API response and converts it to a readable format for the Card
        //Needs to get split off into its own component

        let isPast = "future",
            currentDate = new Date(),
            month = props.jsonDate.getMonth();

        if(props.jsonDate < currentDate) {
                //Adds "past" class if the currentDate is after the jsonDate
                //Need to fix UX for CURRENT games. I think the function considers it a past game
                //Is this bad practice?
                isPast = "past";
            }
  return (
    <div className={`schedule-card card ${isPast}`}
         data-month={month}
    >
    <GameDate
        jsonDate={props.jsonDate}
        gameDateTime={props.gameDateTime}
    />
        <AwayTeam
            awayTeamID={props.awayTeamID}
            teamName={props.teamName}
            teamCity={props.teamCity}
            awayTeamScore={props.awayTeamScore}
            />
        <p>At</p>
        <HomeTeam
            isHomeTeam={true}
            homeTeamID={props.homeTeamID}
            teamName={props.teamName}
            teamCity={props.teamCity}
            homeTeamScore={props.homeTeamScore}
            />

    </div>
  )
}

export default ScheduleCard;

