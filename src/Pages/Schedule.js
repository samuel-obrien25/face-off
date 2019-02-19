import React from 'react';
import Header from '../Components/Header/Header';
import ApiCall from '../API/ApiCall';
import GetTeamStats from '../API/GetTeamStats';
import TeamList from '../Components/Cards/TeamCard/TeamList';
import Fab from '../Components/Buttons/Fab';
import MonthContainer from '../Components/Containers/MonthContainer';
import styled from 'styled-components';
import '../Utilities/league-colors.css';

//#region STYLES
const StyledWrapper = styled.main `
        position: relative;
`

//#endregion STYLES

class Schedule extends React.Component{
    
    constructor(props){
        super(props);
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

    handleClick = (e) => {
        //Properly handles clicks to nested elements. Deep down in my heart I know this isn't right.
        let targetTeam = e.target.closest(".card"),
            targetTeamValue = targetTeam.dataset.teamid,

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
    
    resetAPICall = () => {
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

        const {activeTeamID, headerH1, headerH2, isFabActive, isScheduleListActive, isTeamListActive, scheduleQueryRecipe, teamStatsQueryRecipe, teamStatsBaseURL} = this.state;

        if(isScheduleListActive){
            //Good to have reference to the API link...
            console.log("The current TeamStatsQueryRecipe is " + teamStatsQueryRecipe);
            console.log("The current scheduleQueryRecipe is " + scheduleQueryRecipe);

                return (
                    <div>
                        <Header activeTeamID={activeTeamID} headerH1={headerH1} headerH2={headerH2}> 
                            <GetTeamStats ApiLink="teamStatsQuery" url={teamStatsQueryRecipe} />
                        </Header>
                        
                        <div className="wrapper wrapper__home">
                            <h2 className="page__title page__title_schedule">Choose a Game</h2>
                            
                            <MonthContainer/>
                            <ApiCall activeTeamID={activeTeamID} ApiLink="gameScheduleQuery" url={scheduleQueryRecipe}/>
                                <Fab activeTeamID={activeTeamID} visible={isFabActive} />
                        </div>
                    </div>
        
                )
        }

        if(isTeamListActive){

            return (
                <div>
                    <Header headerH1 = {headerH1} headerH2 = {headerH2} />
                    <StyledWrapper>
                        <TeamList handleClick={this.handleClick} teamValue={this.targetTeamValue} />
                    </StyledWrapper>
                </div>
            )
        }
    }
}

export default Schedule;