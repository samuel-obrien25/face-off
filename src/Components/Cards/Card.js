import React from 'react';
import '../Cards/card.css';
import TeamCard from './TeamCard';
import MenuCard from './MenuCard';
import ScheduleCard from './ScheduleCard';

class Card extends React.Component{

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
        //Cycles through each card on mount and adds animation delay.
        this.addCardDelay();
    }

    render() {


        //Team Cards
            if(this.props.cardType === "teamCard") {
                this.addCardDelay();
                return (
                    <TeamCard 
                        cityName= {this.props.cityName}
                        teamName={this.props.teamName}
                        onClick={this.props.onClick}
                        value={this.props.value}
                    />
                  )}

                //Menu Cards
            if(this.props.cardType === "menuCard") {
                this.addCardDelay();
                <MenuCard />
                }

        //Schedule Cards
        if(this.props.cardType === "scheduleCard") {
            this.addCardDelay();


            return(
                <ScheduleCard
                    gameDate={this.props.gameDate}
                    gameTime={this.props.gameTime}
                    awayTeamCity={this.props.awayTeamCity}
                    awayTeamName={this.props.awayTeamName}
                    awayTeamValue={this.props.awayTeamValue}
                    awayTeamScore={this.props.awayTeamScore}
                    homeTeamCity={this.props.homeTeamCity}
                    homeTeamName={this.props.homeTeamName}
                    homeTeamValue={this.props.homeTeamValue}
                    homeTeamScore={this.props.homeTeamScore}
                    gameID={this.props.gameID}
                    onClick={this.props.handleClick}
                />
            )
          }

        return (
            <div className="card">
            </div>
        );
    }
    }
    
export default Card;