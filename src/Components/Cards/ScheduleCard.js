import React from 'react';
import '../Cards/card.css';

class ScheduleCard extends React.Component{
    constructor(props){
        super(props);
    }

    render() {

        let date = this.props.gameDate,
        splitDate = date.split('-'),
        month = splitDate[1],
        dayString = splitDate[2],
        monthString;

        console.log(splitDate[1]);


        switch (month) {
            default:
                monthString = "test";
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
        <h2>{this.props.awayTeamCity}</h2>
        <h3>{this.props.awayTeamName}</h3>
            <p>At</p>
        <h2>{this.props.homeTeamCity}</h2>
        <h3>{this.props.homeTeamName}</h3>
        <p>{monthString} {dayString} at {this.props.gameTime}</p>
      </div>
  )
}
}
export default ScheduleCard