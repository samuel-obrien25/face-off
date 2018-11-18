import React from 'react';
import '../Cards/card.css';

import AwayTeam from './AwayTeam';
import HomeTeam from './HomeTeam';

class ScheduleCard extends React.Component{

    //TO DO

    render() {
        let jsonDate = new Date(this.props.gameDateTime),
            currentDate = new Date(),
            isPast = "future",
            formattedGameDate = jsonDate.toLocaleDateString() + ' at ' + jsonDate.toLocaleTimeString();

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