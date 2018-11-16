import React from 'react';
import Header from '../Header/Header';
import ApiCall from '../../Components/API/ApiCall';
import TeamList from '../../Components/Cards/TeamList/TeamList';
import Fab from '../../Components/Buttons/Fab';
import '../../App.css'

class Schedule extends React.Component{
    
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.resetAPICall = this.resetAPICall.bind(this);
        this.state = {
            scheduleQueryRecipe: '',
            gameDetailsRecipe: '',
            isFabActive: false,
            isTeamListActive: true,
            isScheduleListActive: false,
        };
    }

    
    handleClick(e) {
        let currentTeam = e.target.tagName === "BUTTON" ? e.target.value : e.target.parentElement.value, //Handles clicks to H2/H3's.
            scheduleBaseURL = 'https://api.mysportsfeeds.com/v2.0/pull/nhl/2018-2019-regular/games.json?team=',
            cardContainerTeamList = document.getElementById("card_container_team_list");
            //Transitions TeamCards Out
            cardContainerTeamList.classList.remove("fade-in");
            cardContainerTeamList.classList.add("fade-out");


        this.setState(() => {
           return {
                scheduleQueryRecipe: scheduleBaseURL + currentTeam,
                isFabActive: true,
                isTeamListActive: false,
                isScheduleListActive:true,
           };
        }, () => {
            console.log(this.state.scheduleQueryRecipe);
        });
};

    resetAPICall() {
        let baseURL = 'https://api.mysportsfeeds.com/v2.0/pull/nhl/2018-2019-regular/games.json?team=';


        this.setState(()=>{
            return{
                scheduleQueryRecipe: baseURL,
                isFabActive: false,
                isScheduleListActive: false,
                isTeamListActive: true
            };
        }, () => {
            console.log("reset API and " + this.state.scheduleQueryRecipe);
        });
    };
    render(){
        if(this.state.isScheduleListActive){

            console.log(this.state.queryRecipe);
                return (
                    <div>
                        <Header 
                           onClick={this.handleClick}
                            />
                        <div className="wrapper wrapper__home">
                            <h2 className="page__title page__title_schedule">Choose a Game</h2>
                            <br/>   

                            <ApiCall
                                url={this.state.scheduleQueryRecipe}
                                ApiLink="gameScheduleQuery"
                                onClick={this.getGameDetails}
                            />

                <Fab visible={this.state.isFabActive}
                     onClick={this.resetAPICall}
                     fabText="Back"
                />
        
                </div>
                </div>
        
                )
        }

        if(this.state.isTeamListActive){

        return (
        
            <div>
            <Header 
                onClick={this.handleClick}
            />
            <div className="wrapper wrapper__home">
                <h2 className="page__title page__title_schedule">Choose Team</h2>
            <br/>
            <TeamList 
             handleClick = {this.handleClick}
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
}

export default Schedule;