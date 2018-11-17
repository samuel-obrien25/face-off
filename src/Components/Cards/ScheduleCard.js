import React from 'react';
import '../Cards/card.css';

import AwayTeam from './AwayTeam';
import HomeTeam from './HomeTeam';

class ScheduleCard extends React.Component{

    constructor(props){
        super(props);
        this.state={
            isGamePast: false
        }
    }
    //TO DO


    render() {
        let jsonDate = new Date(this.props.gameDateTime),
            currentDate = new Date(),
            formattedGameDate = jsonDate.toLocaleDateString() + ' at ' + jsonDate.toLocaleTimeString();

            if(jsonDate < currentDate) {
                this.setState = {
                    isGamePast: true
                }
            }   

  return (
      <div className="schedule-card card">
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