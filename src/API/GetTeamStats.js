import React from 'react';

import LoadingCircle from '../Components/Loading/LoadingCircle';
import '../App.css'

export default class GetTeamStats extends React.Component{

//To Do
// == Document code
// == Figure out if anything can be broken out into its own component

    constructor (props){
        super(props);

        this.state = {
            teamStats: '',
            isLoaded: false,
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
                    isLoaded: true
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

            if (this.state.isLoaded === false){ 
                //Doesn't work as intended
                return (
                    <LoadingCircle />
                ) 
            }
            
            else{
                const teamStats = this.state.teamStats.teamStatsTotals[0];
                console.log(teamStats);
                return (
                         <div>
                         
                        </div>
                    )
                }
        }
    }    
}

