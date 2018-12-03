import React from 'react';
import '../Cards/card.css';
import TeamCard from './TeamCard';
import ScheduleCard from './ScheduleCard';

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

        window.scrollTo({
                top: 0,
                left: 0,
              });    
    }

        
render() {
        //Team Cards
            if(this.props.cardType === "teamCard") {
                return (
                    <TeamCard 
                        cityName= {this.props.cityName}
                        teamName={this.props.teamName}
                        onClick={this.props.onClick}
                        value={this.props.value}
                    />
                  );
                }

        //Schedule Cards
        if(this.props.cardType === "scheduleCard") {
            //Adds card animation delay effect
            this.addCardDelay();

            return(
                <ScheduleCard
                    gameDateTime={this.props.gameDateTime}
                    awayTeamID={this.props.awayTeamID}
                    awayTeamName={this.props.awayTeamName}
                    awayTeamCity={this.props.awayTeamCity}
                    awayTeamScore={this.props.awayTeamScore}
                    homeTeamID={this.props.homeTeamID}
                    homeTeamName={this.props.homeTeamName}
                    homeTeamCity={this.props.homeTeamCity}
                    homeTeamScore={this.props.homeTeamScore}
                    onClick={this.props.handleClick}
                    activeTeamID={this.props.activeTeamID}
                    month={this.props.month}
                />
            )
        }
    }
}
    
export default Card;