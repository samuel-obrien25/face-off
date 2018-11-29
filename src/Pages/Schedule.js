import React from 'react';
import Header from '../Components/Header/Header';
import ApiCall from '../API/ApiCall';
import GetTeamStats from '../API/GetTeamStats';
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
            teamStatsQueryRecipe: '',
            isFabActive: false,
            isTeamListActive: true,
            isScheduleListActive: false,
            activeTeamID: '',
            headerH1: '',
            headerH2: ''
        };
    }

    handleClick(e) {
        e.preventDefault();
        let currentTeam = e.target.tagName === "BUTTON" ? e.target.value : e.target.parentElement.value, //Handles clicks to H2/H3's.
            currentTeamName = e.target.firstChild.innerHTML + " " + e.target.firstChild.nextSibling.innerHTML, //THIS DOES NOT WORK ON MOBILE
            scheduleBaseURL = 'https://api.mysportsfeeds.com/v2.0/pull/nhl/2018-2019-regular/games.json?team=',
            teamStatsBaseURL = 'https://api.mysportsfeeds.com/v2.0/pull/nhl/2018-2019-regular/team_stats_totals.json?team=',
            cardContainerTeamList = document.getElementById("card_container_team_list");
            //Transitions TeamCards Out
            cardContainerTeamList.classList.remove("fade-in");
            cardContainerTeamList.classList.add("fade-out");

        this.setState(() => {
           return {
                scheduleQueryRecipe: scheduleBaseURL + currentTeam,
                teamStatsQueryRecipe: teamStatsBaseURL + currentTeam,
                isFabActive: true,
                isTeamListActive: false,
                isScheduleListActive:true,
                activeTeamID: currentTeam,
                headerH1: currentTeamName,
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
        
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })

        this.setState(()=>{
            return{
                scheduleQueryRecipe: scheduleQueryBaseURL,
                teamStatsBaseURL: teamStatsBaseURL,
                isFabActive: false,
                isScheduleListActive: false,
                isTeamListActive: true,
                headerH1: ''
            };
        });
 

    };

    setDateH2(){

        //Basically, I have no idea where to call this function WITHOUT setinterval.
        //It works...

        let timer = setInterval(prependMonthSection, 200);

        function prependMonthSection() {
            let scheduleCardsList = document.getElementsByClassName("schedule-card"),

                january = document.createElement("H2"),
                february = document.createElement("H2"),
                march = document.createElement("H2"),
                april = document.createElement("H2"),
                october = document.createElement("H2"),
                november = document.createElement("H2"),
                december = document.createElement("H2");
                
                january.innerHTML = "January";
                february.innerHTML = "February";
                march.innerHTML = "March";
                april.innerHTML = "April";
                october.innerHTML = "October";
                november.innerHTML = "November";
                december.innerHTML = "December";

            let monthH2s = [january, february, march, april, october, november, december];

                for(let i = 0; i < monthH2s.length; i++){
                    monthH2s[i].className = "month";
                }

            if(scheduleCardsList.length > 60){
                clearInterval(timer);
                document.querySelectorAll("[data-month='0']")[0].insertAdjacentElement('beforebegin', january);
                document.querySelectorAll("[data-month='1']")[0].insertAdjacentElement('beforebegin', february);
                document.querySelectorAll("[data-month='2']")[0].insertAdjacentElement('beforebegin', march);
                document.querySelectorAll("[data-month='3']")[0].insertAdjacentElement('beforebegin', april);
                document.querySelectorAll("[data-month='9']")[0].insertAdjacentElement('beforebegin', october);
                document.querySelectorAll("[data-month='10']")[0].insertAdjacentElement('beforebegin', november);
                document.querySelectorAll("[data-month='11']")[0].insertAdjacentElement('beforebegin', december);
            }
        }
    }


    componentDidUpdate(){
        window.scrollTo({
            top: 0,
        });
    }

    render(){
        if(this.state.isScheduleListActive){
            //Good to have reference too the API link...
            console.log(this.state.queryRecipe);
            this.setDateH2();

                return (
                    <div>
                    <GetTeamStats
                        url={this.state.teamStatsQueryRecipe}
                        ApiLink="teamStatsQuery"
                        activeTeamID={this.state.activeTeamID}
                        
                    />
                        <Header
                            activeTeamID={this.state.activeTeamID}
                            headerH1={this.state.headerH1}
                            headerH2={this.state.headerH2}
                        />
                        <div className="wrapper wrapper__home">
                            <h2 className="page__title page__title_schedule">Choose a Game</h2>
                            <br/>   
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
                        headerH1={this.state.headerH1}
                        headerH2={this.state.headerH2}
                    />
                    <div className="wrapper wrapper__home">
                        <h2 className="page__title page__title_schedule">Choose a Team</h2>
                        <br/>
                        <TeamList
                            handleClick = {this.handleClick}
                            value = {this.currentTeam}
                        />
                        <div className="fab-container">
                            <Fab 
                                visible={true}
                                onClick={this.handleClick}
                                fabClass="fab"
                                fabText="View all games"
                            />
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Schedule;