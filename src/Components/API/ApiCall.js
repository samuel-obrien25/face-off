import React from 'react';
import ScheduleCard from '../Cards/ScheduleCard';
import '../../App.css';

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
                    console.log('api called');
                    return;
                }

    componentDidUpdate(prevProps, prevState){
        if(this.props.url !== prevProps.url){
            this.getApiData();
        }
    }

  render(){

    
        if(this.props.ApiLink === "gameScheduleQuery") {

                if (!this.state.results){ return null; }
                
                else{
                     //   console.log(this.state.results);
                const games = this.state.results.fullgameschedule.gameentry,
                      gameCard = games.map((game) =>
                            <ScheduleCard key={game.id}
                                awayTeamCity={game.awayTeam.City}
                                awayTeamName={game.awayTeam.Name}
                                awayTeamValue={game.awayTeam.ID}
                                homeTeamCity={game.homeTeam.City}
                                homeTeamName={game.homeTeam.Name}
                                homeTeamValue={game.homeTeam.ID}
                                gameDate={game.date}
                                gameTime={game.time}
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

