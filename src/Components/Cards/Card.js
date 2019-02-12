import React from 'react';
import '../Cards/card.css';
import TeamCard from './TeamCard/TeamCard';
import ScheduleCard from './ScheduleCard/ScheduleCard';

class Card extends React.Component{
    //Cycles through each card on mount and adds animation delay.
    addCardDelay = () => {
        let cardsList = document.getElementsByClassName("card"),
            i = 0;

        for (i; i < cardsList.length; i++) {
            let j = (i / 12),
                k = j.toString(),
                l = k + 's';
            cardsList[i].style.animationDelay = l;
        }
    }

    componentDidMount() {
        this.addCardDelay();
    }
        
render() {

    const { activeTeamID, awayTeamCity, awayTeamID, awayTeamName, awayTeamScore, cardType, cityName, gameDateTime, handleClick, homeTeamCity, homeTeamID, homeTeamName, homeTeamScore, onClick, month, teamName, teamValue } = this.props;

        //Team Cards
            if(cardType === "teamCard") {
                return (
                    <TeamCard 
                        cityName= {cityName}
                        teamName={teamName}
                        onClick={onClick}
                        teamValue={teamValue}
                    />
                  );
                }

        //Schedule Cards
        if(cardType === "scheduleCard") {
            //Adds card animation delay effect
            this.addCardDelay();

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