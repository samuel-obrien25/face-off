import React from 'react';
import '../Cards/card.css';

import AwayTeam from './AwayTeam';
import HomeTeam from './HomeTeam';

import Logo from '../../Containers/Header/Logo/Logo';

class ScheduleCard extends React.Component{

    render() {

        let date = this.props.gameDate,
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


  return (
      <div className="card schedule_card">
        <div className="date-time"><p><span className="game-date">{monthString} {dayString}</span> at <span className="game-time">{this.props.gameTime}</span></p></div>
        
        <AwayTeam 
            awayTeamCity={this.props.awayTeamCity}
            awayTeamName={this.props.awayTeamName}
            awayTeamValue={this.props.awayTeamValue}
        /> 

            <p>At</p>
        <HomeTeam
            homeTeamCity={this.props.homeTeamCity}
            homeTeamName={this.props.homeTeamName}
            homeTeamValue={this.props.homeTeamValue}
        />
        </div>
  )
}
}
export default ScheduleCard