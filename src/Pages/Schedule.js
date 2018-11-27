import React from 'react';
import Header from '../Components/Header/Header';
import ApiCall from '../API/ApiCall';
import TeamList from '../Components/Cards/TeamList/TeamList';
import Fab from '../Components/Buttons/Fab';
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
            isFabActive: false,
            isTeamListActive: true,
            isScheduleListActive: false,
            activeTeamName: 'unset'
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
                activeTeamName: currentTeam
           };
        }
        )
    };

    scrollToNextGame(){
        let timeOutAfterScroll = setInterval(findNextGame, 500);
        function stopTimeoutAfterScroll() {
            clearInterval(timeOutAfterScroll);
        }

        function findNextGame() {
            setTimeout(function () {
                if (document.getElementsByClassName("future").length > 1) {
                    document.getElementsByClassName("future")[0].previousElementSibling.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    stopTimeoutAfterScroll();
                } else {
                    return
                }
            }, 1000)
        }
    }

    resetAPICall() {
        let baseURL = 'https://api.mysportsfeeds.com/v2.0/pull/nhl/2018-2019-regular/games.json?team=';
        
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })

        this.setState(()=>{
            return{
                scheduleQueryRecipe: baseURL,
                isFabActive: false,
                isScheduleListActive: false,
                isTeamListActive: true,
                activeTeamName: 'unset'
            };
        });
 

    };

    componentDidUpdate(){
        window.scrollTo({
            top: 0,
        })
    }

    render(){
        if(this.state.isScheduleListActive){
            //Good to have reference too the API link...
            console.log(this.state.queryRecipe);

                return (
                    <div>
                        <Header 
                            activeTeamName={this.state.activeTeamName}
                        />
                        <div className="wrapper wrapper__home">
                            <h2 className="page__title page__title_schedule">Choose a Game</h2>
                            <br/>   
                            <ApiCall
                                url={this.state.scheduleQueryRecipe}
                                ApiLink="gameScheduleQuery"
                                onClick={this.getGameDetails}
                                activeTeamName={this.state.activeTeamName}
                            />
                
                            <Fab visible={this.state.isFabActive} 
                                onClick={this.scrollToNextGame}
                                fabText="Next Game"
                                className="next-game-fab"
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
                        appTitle="Face Off"
                        appSubTitle="Quick access to NHL Schedule, Stats, and more"
                    />
                    <div className="wrapper wrapper__home">
                        <h2 className="page__title page__title_schedule">Choose a Team</h2>
                        <br/>
                        <TeamList
                            handleClick = {this.handleClick}
                            value = {this.currentTeam}
                        />
                        <Fab 
                            visible={true}
                            onClick={this.handleClick}
                            fabText="View all games"
                        />
                    </div>
                </div>
            )
        }
    }
}

export default Schedule;