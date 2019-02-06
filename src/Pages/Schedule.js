import React from 'react';
import Header from '../Components/Header/Header';
import ApiCall from '../API/ApiCall';
import GetTeamStats from '../API/GetTeamStats';
import TeamList from '../Components/Cards/TeamCard/TeamList';
import Fab from '../Components/Buttons/Fab';
import MonthContainer from '../Components/Containers/MonthContainer';
import '../App.css';
import '../Utilities/league-colors.css';

class Schedule extends React.Component{
    
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.resetAPICall = this.resetAPICall.bind(this);
        this.scrollToNextGame = this.scrollToNextGame.bind(this);
        this.state = {
            scheduleQueryRecipe: '',
            teamStatsQueryRecipe: '',
            isFabActive: false,
            isTeamListActive: true,
            isScheduleListActive: false,
            activeTeamID: '',
            headerH1: 'Face Off',
            headerH2: 'Quick access to NHL Schedule, Stats, and more',
        };
    }

    handleClick(e) {
                //Properly handles clicks to nested elements. Deep down in my heart I know this isn't right.
        let targetTeam = e.target.closest(".card"),
            targetTeamValue = targetTeam.getAttribute('teamValue'),
            //Gets chosen card, then derives teamName and teamCity from its inner HTML
            currentTeamName = targetTeam.firstChild.innerHTML,
            currentTeamCity =  targetTeam.firstChild.nextElementSibling.innerHTML,
            scheduleBaseURL = 'https://api.mysportsfeeds.com/v2.0/pull/nhl/2018-2019-regular/games.json?team=',
            teamStatsBaseURL = 'https://api.mysportsfeeds.com/v2.0/pull/nhl/2018-2019-regular/team_stats_totals.json?team=',
            divisionContainer = document.getElementById("division-container");
            //Transitions TeamCards Out
            divisionContainer.classList.remove("fade-in");
            divisionContainer.classList.add("fade-out");

            if(!currentTeamName){ return }
        this.setState(() => {
           return {
                scheduleQueryRecipe: scheduleBaseURL + targetTeamValue,
                teamStatsQueryRecipe: teamStatsBaseURL + targetTeamValue,
                isFabActive: true,
                isTeamListActive: false,
                isScheduleListActive:true,
                activeTeamID: targetTeamValue,
                headerH1: currentTeamName,
                headerH2: currentTeamCity,
                headerH3: this.props.currentTeamRecord,
           };
        });
    };

    scrollToNextGame(){
        if (document.getElementsByClassName("future").length > 1) {
            document.getElementsByClassName("future")[0].previousElementSibling.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else { return }
    }

    resetAPICall() {
        let scheduleQueryBaseURL = 'https://api.mysportsfeeds.com/v2.0/pull/nhl/2018-2019-regular/games.json?team=',
            teamStatsBaseURL = 'https://api.mysportsfeeds.com/v2.0/pull/nhl/2018-2019-regular/team_stats_totals.json?team='
        

        this.setState(()=>{
            return{
                scheduleQueryRecipe: scheduleQueryBaseURL,
                teamStatsBaseURL: teamStatsBaseURL,
                isFabActive: false,
                isScheduleListActive: false,
                isTeamListActive: true,
                headerH1: 'Face Off',
                headerH2: 'Quick access to NHL Schedule, Stats, and more',
            };
        }, window.scrollTo(0,0));
    };

    render(){

        if(this.state.isScheduleListActive){
            //Good to have reference to the API link...
            console.log("The current TeamStatsQueryRecipe is " + this.state.teamStatsQueryRecipe);
            console.log("The current scheduleQueryRecipe is " + this.state.scheduleQueryRecipe);

                return (
                    <div>
                        <Header
                            activeTeamID={this.state.activeTeamID}
                            headerH1={this.state.headerH1}
                            headerH2={this.state.headerH2}
                        > 
                            <GetTeamStats
                                url={this.state.teamStatsQueryRecipe}
                                ApiLink="teamStatsQuery"
                            />
                        </Header>
                        
                        <div className="wrapper wrapper__home">
                            <h2 className="page__title page__title_schedule">Choose a Game</h2>
                            <br/>
                            <MonthContainer/>
                            <ApiCall
                                url={this.state.scheduleQueryRecipe}
                                ApiLink="gameScheduleQuery"
                                activeTeamID={this.state.activeTeamID}
                            />

                            <div className="fab-container">
                                <Fab visible={this.state.isFabActive} 
                                    onClick={this.scrollToNextGame}
                                    fabText="Next Game"
                                    fabClass={`fab next-game-fab team${this.state.activeTeamID}`}
                                    />

                                <Fab visible={this.state.isFabActive}
                                    onClick={this.resetAPICall}
                                    fabClass={`fab team${this.state.activeTeamID}`}
                                    fabText="Back"
                                />
                            </div>
        
                        </div>
                    </div>
        
                )
        }

        if(this.state.isTeamListActive){

            return (
                <div>
                    <Header
                        headerH1 = {this.state.headerH1}
                        headerH2 = {this.state.headerH2}
                    />
                    <div className="wrapper wrapper__home">
                        <TeamList
                            handleClick = {this.handleClick}
                            teamValue = {this.targetTeamValue}
                        />
                    </div>
                </div>
            )
        }
    }
}

export default Schedule;