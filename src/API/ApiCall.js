import React from 'react';
import Card from '../Components/Cards/Card';
import LoadingCircle from '../Components/Loading/LoadingCircle';
import '../App.css'

export default class ApiCall extends React.Component{
    constructor (props){
        super(props);

        this.state = {
            schedule: '',
            isLoaded: false
        };
    }

    fetchSchedule(){
    const   username = 'sobrien',
            password = 'MYSPORTSFEEDS',
            init = {
                type: "GET",
                url: this.props.url,
                dataType: 'json',
                async: false,
                headers: {
                    "Authorization": "Basic " + btoa(username + ":" + password)
                }
            };
            fetch(this.props.url, init)
                .then(data => data.json())
                .then(data => {
                    this.setState({
                        schedule: data,
                        isLoaded: true
                    });
                    })
                    return;
    }

    componentDidUpdate(prevProps){
        if(this.props.url !== prevProps.url){
            this.fetchSchedule();
        }
    }

    componentDidMount(){
        //For future reference: Since the ApiCall component is now MOUNTING on TeamCard click instead of UPDATING, getAPIData() gets called in componentDidMount INSTEAD of ONLY checking if prevProps !== current props in componentDidUpdate.
        //Otherwise, ONLY making that check in componentDidUpdate just won't call the API, because spoiler alert, the component didn't update.
        //Calling the API in the render method and checking if prevProps !== current props will result in many hundreds of calls to the API. MySportsFeeds: If you ever read this, my bad...
        this.fetchSchedule();
        console.log(document.getElementsByClassName("future").length);
    }

  render(){    
        if(this.props.ApiLink === "gameScheduleQuery") {

            if (this.state.isLoaded === false){ 
                //Doesn't work as intended
                return (
                    <LoadingCircle />
                ) 
            }
            
            else{
                const games = this.state.schedule.games,
                    gameCard = games.map((game) =>
                        <Card key={game.schedule.id}
                            cardType="scheduleCard"
                            awayTeamName={this.props.awayTeamName}
                            awayTeamCity={this.props.awayTeamCity}
                            awayTeamID={game.schedule.awayTeam.id}
                            awayTeamScore={game.score.awayScoreTotal}
                            homeTeamName={this.props.homeTeamName}
                            homeTeamCity={this.props.homeTeamCity}
                            homeTeamID={game.schedule.homeTeam.id}
                            homeTeamScore={game.score.homeScoreTotal}
                            gameDateTime={game.schedule.startTime}
                            gameID={game.schedule.id}
                            onClick={this.handleClick}
                            activeTeamID={this.props.activeTeamID}
                            activeTeamName={this.props.activeTeamName}
                        />
                    );

                    return (
                         <div onLoad={this.props.onLoad}
                              id="card_container_schedule_list" 
                              className="card_container card-container-schedule fade-in">
                                
                            {gameCard}
                            
                        </div>
                    )
                }
        }
    }
}

