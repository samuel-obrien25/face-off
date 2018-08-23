import React from 'react';
import '../Cards/card.css';
import TeamCard from './TeamCard';
import MenuCard from './MenuCard';
import ScheduleCard from './ScheduleCard';

class Card extends React.Component{
    constructor(props){
        super(props);
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
    