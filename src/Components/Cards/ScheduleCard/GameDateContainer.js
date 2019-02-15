import React from 'react';
import styled from 'styled-components';

const StyledGameDateContainer = styled.div`
    position: absolute;
    top:0;
    width: 100%;
    left:0;
    right:0;
    margin:auto;
    background-color: #222;
    color: #fff;
    height: 1.2em;
    padding-top: 5px;
    display: flex;
`;

const StyledGameDate = styled.p`
    margin: auto;
`;


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
        <StyledGameDateContainer className={`team${props.activeTeamID}`}>
            <StyledGameDate> {formattedGameDate}</StyledGameDate>
        </StyledGameDateContainer>
  )

}

export default GameDateContainer;

