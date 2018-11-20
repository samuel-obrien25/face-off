import React from 'react';
import '../Cards/card.css';

import Team from './TeamList/Team';

class ScheduleCard extends React.Component{

    //TO DO

    render() {
        let jsonDate = new Date(this.props.gameDateTime),
            currentDate = new Date(),
            isPast = "future",
            weekday = new Array(7);
                weekday[0] =  "Sunday";
                weekday[1] = "Monday";
                weekday[2] = "Tuesday";
                weekday[3] = "Wednesday";
                weekday[4] = "Thursday";
                weekday[5] = "Friday";
                weekday[6] = "Saturday";
            
        let formattedGameDate = weekday[jsonDate.getDay()] + ', ' + jsonDate.toLocaleDateString() + ' at ' + jsonDate.toLocaleTimeString();

            if(jsonDate < currentDate) {
                //Is this bad practice?
                isPast = "past";
            }
                        
  return (
    <div className={`schedule-card card ${isPast}`}>
        <div className="date-time"><p><span className="game-date">{formattedGameDate}</span></p></div>
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