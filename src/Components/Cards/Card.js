import React from 'react';
import '../Cards/card.css';
import TeamCard from './TeamCard';
import MenuCard from './MenuCard';
import ScheduleCard from './ScheduleCard';

class Card extends React.Component{

    componentDidMount() {
        //Cycles through each card on mount and adds animation delay.
       let cardsList = document.getElementsByClassName("card"),
            i = 0;

       for(i; i < cardsList.length; i++) {
        let j = (i / 12),
            k = j.toString(),
            l = k + 's';

           cardsList[i].style.animationDelay = l;
       }
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
                  )}

                //Menu Cards
            if(this.props.cardType === "menuCard") {
                <MenuCard />
                }

        //Schedule Cards
            if(this.props.cardType === "scheduleCard") {
                <ScheduleCard />
              }
    
        return (
            <div className="card">
            </div>
        );
    }
    }
    
export default Card;