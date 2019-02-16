import React from 'react';
import TeamCard from './TeamCard/TeamCard';
import ScheduleCard from './ScheduleCard/ScheduleCard';

class Card extends React.Component{

    constructor(props) {
        super(props);
        this.state={ }
    }

    componentDidMount() {
    }

    componentWillUnmount() {
            console.log("timeout delay: ");
    }

render() {

    const { activeTeamID, awayTeamCity, awayTeamID, awayTeamName, awayTeamScore, cardType, cityName, gameDateTime, handleClick, homeTeamCity, homeTeamID, homeTeamName, homeTeamScore, onClick, month, teamName, teamValue } = this.props;
     
        //Team Cards
        if(cardType === "teamCard") {
            return (
                <TeamCard
                    cityName={cityName}
                    teamName={teamName}
                    onClick={onClick}
                    teamValue={teamValue}
                />
                );
            }

        //Schedule Cards
        if(cardType === "scheduleCard") {
            return(
                <ScheduleCard
                    gameDateTime={gameDateTime}
                    awayTeamID={awayTeamID}
                    awayTeamName={awayTeamName}
                    awayTeamCity={awayTeamCity}
                    awayTeamScore={awayTeamScore}
                    homeTeamID={homeTeamID}
                    homeTeamName={homeTeamName}
                    homeTeamCity={homeTeamCity}
                    homeTeamScore={homeTeamScore}
                    onClick={handleClick}
                    activeTeamID={activeTeamID}
                    month={month}
                />
            )
        }
    }
}
    
export default Card;