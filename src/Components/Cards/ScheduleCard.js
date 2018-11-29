import React from 'react';
import '../Cards/card.css';

import Team from './TeamList/Team';

class ScheduleCard extends React.Component{

    //TO DO
    //==Split Date into its own component
    //==Fix current games UX
    //==Add more game information onClick

    render() {
        //Gets date from API response and converts it to a readable format for the Card
        //Needs to get split off into its own component

        let jsonDate = new Date(this.props.gameDateTime),
            currentDate = new Date(),
            isPast = "future",
            weekday = new Array(7);
                weekday[0] = "Sunday";
                weekday[1] = "Monday";
                weekday[2] = "Tuesday";
                weekday[3] = "Wednesday";
                weekday[4] = "Thursday";
                weekday[5] = "Friday";
                weekday[6] = "Saturday";

        let formattedGameDate = weekday[jsonDate.getDay()] + ', ' + jsonDate.toLocaleDateString() + ' at ' + jsonDate.toLocaleTimeString();

            if(jsonDate < currentDate) {
                //Adds "past" class if the currentDate is after the jsonDate
                //Need to fix UX for CURRENT games. I think the function considers it a past game
                //Is this bad practice?
                isPast = "past";
            }
        

                        
  return (
    <div className={`schedule-card card ${isPast}`}
         data-month={jsonDate.getMonth()}
    >
        <div className={`date-time team${this.props.activeTeamID}`}><p><span className="game-date">{formattedGameDate}</span></p></div>
        <Team
            awayTeamID={this.props.awayTeamID}
            teamName={this.props.teamName}
            teamCity={this.props.teamCity}
            awayTeamScore={this.props.awayTeamScore}
            />
        <p>At</p>
        <Team
            isHomeTeam={true}
            homeTeamID={this.props.homeTeamID}
            teamName={this.props.teamName}
            teamCity={this.props.teamCity}
            homeTeamScore={this.props.homeTeamScore}
            />

    </div>
  )
}
}
export default ScheduleCard