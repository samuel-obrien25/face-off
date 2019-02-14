import React from 'react';

import LoadingCircle from '../Components/Loading/LoadingCircle';

export default class GetTeamStats extends React.Component{

//To Do
// == Document code
// == Figure out if anything can be broken out into its own component

    constructor (props){
        super(props);

        //teamStats: Placeholder for data fetched from an API call
        this.state = {
            teamStats: '',
            isLoading: true,
        };
    }

    fetchTeamStats(){
        const   username = 'sobrien',
                password = 'MYSPORTSFEEDS',
                url = this.props.url,
                init = {
                    type: "GET",
                    dataType: 'json',
                    async: false,
                    headers: {
                        "Authorization": "Basic " + btoa(username + ":" + password)
                    }
                 };
        fetch(url, init)
            .then(resp => resp.json())
            .then(resp => {
                this.setState({
                    teamStats: resp,
                    isLoading: false
                });
                });
                return;
    }

    componentDidUpdate(prevProps){
        if(this.props.url !== prevProps.url){
            this.fetchTeamStats();
        }
    }

    componentDidMount(){
        //For future reference: Since the ApiCall component is now MOUNTING on TeamCard click instead of UPDATING, getAPIData() gets called in componentDidMount INSTEAD of ONLY checking if prevProps !== current props in componentDidUpdate.
        //Otherwise, ONLY making that check in componentDidUpdate just won't call the API, because spoiler alert, the component didn't update.
        //Calling the API in the render method and checking if prevProps !== current props will result in many hundreds of calls to the API. MySportsFeeds: If you ever read this, my bad...
        this.fetchTeamStats();
    }

    render(){
        if(this.props.ApiLink === "teamStatsQuery") {

            if (this.state.isLoading){ 
                //Doesn't work as intended
                return (
                    <LoadingCircle />
                ) 
            }
            
            else{
                const teamWins = this.state.teamStats.teamStatsTotals[0].stats.standings.wins,
                      teamLosses = this.state.teamStats.teamStatsTotals[0].stats.standings.losses,
                      teamOvertimeLosses = this.state.teamStats.teamStatsTotals[0].stats.standings.overtimeLosses;
                
                    console.log(teamWins + ", " + teamLosses + ", " + teamOvertimeLosses);
                    return (
                       <h3 className="fade-in team-record">Record: ({teamWins + ", " + teamLosses + ", " + teamOvertimeLosses})</h3>    
                    )
                }
        }
    }    
}

