import React from 'react';
import Card from '../Cards/Card';

export default class ApiCall extends React.Component{
    constructor (props){
        super(props);

        this.state = {
            results: ''
        };
    }

    getApiData(){
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
                        results: data
                    });
                    })
                    return;
                }

componentDidUpdate(prevProps) {

    //Checks if props.url equals previous props.url. If not, getAPIData();

    if(prevProps.url !== this.props.url){
        this.getApiData();
    }

}
 

  render(){

        if(this.props.ApiLink === "gameScheduleQuery") {
                if (!this.state.results){ return null }
                
                else{

                const games = this.state.results.fullgameschedule.gameentry,
                      gameCard = games.map((game) =>

                <Card key={game.id}
                    cardType="scheduleCard"
                    awayTeamCity={game.awayTeam.City}
                    awayTeamName={game.awayTeam.Name}
                    homeTeamCity={game.homeTeam.City}
                    homeTeamName={game.homeTeam.Name}
                    gameDate={game.date}
                    gameTime={game.time}
                    />

        );

    return (

        <div id="card_container_schedule_list" className="card_container fade-in">
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

