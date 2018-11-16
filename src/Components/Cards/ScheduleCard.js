import React from 'react';
import '../Cards/card.css';

import AwayTeam from './AwayTeam';
import HomeTeam from './HomeTeam';

class ScheduleCard extends React.Component{
    //TO DO
      //Convert Date/Time string to a legible date and time

    render() {
        let jsonDate = new Date(this.props.gameDateTime),
            currentDate = new Date(),
            formattedGameDate = jsonDate.toLocaleDateString() + ' at ' + jsonDate.toLocaleTimeString();

            if (jsonDate < currentDate) {
                console.log("prev");
                //Works!
            }

            console.log(formattedGameDate);



/*
        let date = this.props.gameDateTime,
        splitDate = date.split('-'),
        month = splitDate[1],
        dayString = splitDate[2],
        monthString;

        switch (month) {
            default:
                monthString = "test";
                break;
            case '01':
                monthString = "January";
                break;
            case '02':
                monthString = "February";
                break;
            case '03':
                monthString = "March";
                break;
            case '04':
                monthString = "April";
                break;
            case '05':
                monthString = "May";
                break;
            case '06':
                monthString = "June";
                break;
            case '07':
                monthString = "July";
                break;
            case '08':
                monthString = "August";
                break;
            case '09':
                monthString = "September";
                break;
            case '10':
                monthString = "October";
                break;         
            case '11':
                monthString = "November";
                break;                 
            case '12':
                monthString = "December";
                break;
        }
*/

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