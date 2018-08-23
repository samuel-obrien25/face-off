import React from 'react';
import Header from '../Header/Header';
import ApiCall from '../../Components/API/ApiCall';
import TeamList from '../../Components/Cards/TeamList/TeamList';
import TeamCard from '../../Components/Cards/TeamCard'
import Fab from '../../Components/Buttons/Fab';

class Schedule extends React.Component{
    
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.resetAPICall = this.resetAPICall.bind(this);
        this.state = {
            queryRecipe: '',
            isFabActive: false,
        };
    }

    handleClick(e) {
        let currentTeam = e.target.tagName === "BUTTON" ? e.target.value : e.target.parentElement.value, //Handles clicks to H2/H3's.
            baseURL = 'https://api.mysportsfeeds.com/v1.2/pull/nhl/2018-2019-regular/full_game_schedule.json?team=',
            cardContainerTeamList = document.getElementById("card_container_team_list"),
            cardContainerScheduleList = document.getElementById("card_container_schedule_list");

            cardContainerTeamList.classList.remove("fade-in");
            cardContainerTeamList.classList.add("fade-out");

            if(cardContainerScheduleList){
            cardContainerScheduleList.classList.remove("fade-out");
            cardContainerScheduleList.classList.add("fade-in");
            }


        this.setState(() => {
           return {
                queryRecipe: baseURL + currentTeam,
                isFabActive: true
           };


        }, () => {
            console.log(this.state.queryRecipe);
        });
};

    resetAPICall() {
        let baseURL = 'https://api.mysportsfeeds.com/v1.2/pull/nhl/2018-2019-regular/full_game_schedule.json?team=',
            cardContainerTeamList = document.getElementById("card_container_team_list"),
            scheduleCards = document.getElementById("card_container_schedule_list");


        this.setState(()=>{
            return{
                queryRecipe: baseURL,
                isFabActive: false
            };
        }, () => {
            console.log(this.state.queryRecipe);
            scheduleCards.classList.remove("fade-in");
            scheduleCards.classList.add("fade-out");
            cardContainerTeamList.classList.remove("fade-out");
            cardContainerTeamList.classList.add("fade-in");
        });
    };

    render(){
        return (
            <div>
            <Header />
            <div className="wrapper wrapper__home">
                <h2 className="page__title page__title_schedule">Choose Team</h2>
            <br/>
            <TeamList 
             handleClick = {this.handleClick}
            />

        <ApiCall 
            url={this.state.queryRecipe}
            ApiLink="gameScheduleQuery"
        />
        <Fab visible= {true}
             onClick={this.handleClick}
             fabText="View all games"
             value=""
        />
        <Fab visible={this.state.isFabActive}
             onClick={this.resetAPICall}
             fabText="Back"
        />

        </div>
        </div>
    )
}
}

export default Schedule;