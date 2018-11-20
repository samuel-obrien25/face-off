import React from 'react';
import '../Cards/card.css';

import AwayTeam from './TeamList/AwayTeam';
import HomeTeam from './TeamList/HomeTeam';

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
        
        <AwayTeam
            awayTeamID={this.props.awayTeamID}
            awayTeamScore={this.props.awayTeamScore}
            awayTeamName={this.props.awayTeamName}
            awayTeamCity={this.props.awayTeamCity}
        />
            <p>At</p>
        <HomeTeam
            homeTeamID={this.props.homeTeamID}
            homeTeamScore={this.props.homeTeamScore}
            homeTeamName={this.props.homeTeamName}
            homeTeamCity={this.props.homeTeamCity}
        />
        </div>
  )
}
}
export default ScheduleCard