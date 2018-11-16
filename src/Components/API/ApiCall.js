import React from 'react';
import Card from '../Cards/Card';
import '../../App.css';

export default class ApiCall extends React.Component{
    constructor (props){
        super(props);

        this.state = {
            schedule: '',
            apiFormula: 'forSchedule'
        };
    }

    fetchSchedule(){
    const   username = 'sobrien',
            password = 'sobrienpassword',
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
                        schedule: data
                    });
                    })
                    console.log('api called');
                    return;
                }
    

    componentDidUpdate(prevProps, prevState){
        if(this.props.url !== prevProps.url){
            this.fetchSchedule();
        }
    }

    componentDidMount(){
        //For future reference: Since the ApiCall component is now MOUNTING on TeamCard click instead of UPDATING, getAPIData() gets called in componentDidMount INSTEAD of ONLY checking if prevProps !== current props in componentDidUpdate.
        //Otherwise, ONLY making that check in componentDidUpdate just won't call the API, because spoiler alert, the component didn't update.
        //Calling the API in the render method and checking if prevProps !== current props will result in many hundreds of calls to the API. MySportsFeeds: If you ever read this, my bad...
        this.fetchSchedule();
    }

  render(){

    
        if(this.props.ApiLink === "gameScheduleQuery") {

                if (!this.state.schedule){ return null; }
                
                else{
                     //   console.log(this.state.results);
                const games = this.state.schedule.fullgameschedule.gameentry,
                      gameCard = games.map((game) =>
                            <Card key={game.id}
                                cardType="scheduleCard"
                                awayTeamCity={game.awayTeam.City}
                                awayTeamName={game.awayTeam.Name}
                                awayTeamValue={game.awayTeam.ID}
                                homeTeamCity={game.homeTeam.City}
                                homeTeamName={game.homeTeam.Name}
                                homeTeamValue={game.homeTeam.ID}
                                gameDate={game.date}
                                gameTime={game.time}
                                gameID={game.id}
                            />
        );

    return (

        <div id="card_container_schedule_list" className="card_container card-container-schedule fade-in">
            {gameCard}
        </div>
    )
  }

}

        if(this.props.ApiLink === "teamQuery") {
            if (!this.state.results) { return null }

            else {

                /* Finish this... 
                const teams = this.state.results.
                 */
            }
            
        }

  }


}

