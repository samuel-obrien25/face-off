import React from 'react';
import Header from '../Components/Header/Header';
import ApiCall from '../API/ApiCall';
import TeamList from '../Components/Cards/TeamList/TeamList';
import Fab from '../Components/Buttons/Fab';
import '../App.css'

class Schedule extends React.Component{
    
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.resetAPICall = this.resetAPICall.bind(this);
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
        }, () => {
        //I should revisit this at some point, but I think it will work for the vast majority of the time.
        //Problem: I cannot figure out where to reliably call a function once the first upcoming game is loaded.
        //Solution: Set interval that returns on fail, and clears interval on successful scrollIntoView.
        //Note to self: this would be a great opportunity to learn unit testing. 

                let timeOutAfterScroll = setInterval(scrollToNextGame, 500);
                function stopTimeoutAfterScroll() {
                    clearInterval(timeOutAfterScroll);
                }

                function scrollToNextGame() {
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
        )
    };

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
                isTeamListActive: true
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
                appTitle="FACEOFF"
                appSubTitle="An Unnoficial App For All Your NHL Schedule Needs"
            />
            <div className="wrapper wrapper__home">
                <h2 className="page__title page__title_schedule">Choose a Team</h2>
            <br/>
            <TeamList
             handleClick = {this.handleClick}
            />


        <Fab visible={true}
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