import React from 'react';
import '../card.css';


const GameDateContainer = (props) => {

        //Gets date from API response and converts it to a readable format for the Card
        //Needs to get split off into its own component
        let jsonDate = new Date(props.gameDateTime),
            weekday = new Array(7);
                weekday[0] = "Sunday";
                weekday[1] = "Monday";
                weekday[2] = "Tuesday";
                weekday[3] = "Wednesday";
                weekday[4] = "Thursday";
                weekday[5] = "Friday";
                weekday[6] = "Saturday";

        let formattedGameDate = weekday[jsonDate.getDay()] + ', ' + jsonDate.toLocaleDateString() + ' at ' + jsonDate.toLocaleTimeString();

  return (
        <div className={`date-time team${props.activeTeamID}`}>
            <p><span className="game-date">{formattedGameDate}</span></p>
        </div>
  )

}

export default GameDateContainer;

