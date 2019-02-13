import React from 'react';
import CardContainer from '../Components/Containers/CardContainer';
import Card from '../Components/Cards/Card';
import LoadingCircle from '../Components/Loading/LoadingCircle';
import Error from '../Utilities/Error';
import '../App.css'

export default class ApiCall extends React.Component {

    //schedule: placeholder for data recieved from fetch request
    //isLoaded: boolean for loading animation
    //error: if something doesn't go right, load Error component

    constructor(props) {
        super(props);
        this.state = {
            schedule: '',
            isLoaded: false,
            error: false
        };
    }

    fetchSchedule() {
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
            .then(data => data.json())
            .then(data => {
                this.setState({
                    isLoaded: true,
                    schedule: data
                });
            },
            (error) => {
                console.log('API call failed with error ', error);
                this.setState({
                    error: true,
                });
            }
        )
        return;
    }

    componentDidUpdate(prevProps) {
        //If the component updates and the url prop is changed, make fetch request with updated URL
        if (this.props.url !== prevProps.url) {
            this.fetchSchedule();
        }
    }

    componentDidMount() {
        //For future reference: Since the ApiCall component is now MOUNTING on TeamCard click instead of UPDATING, getAPIData() gets called in componentDidMount INSTEAD of ONLY checking if prevProps !== current props in componentDidUpdate.
        //Otherwise, ONLY making that check in componentDidUpdate just won't call the API, because the component didn't update.
        //Calling the API in the render method and checking if prevProps !== current props will result in many hundreds of calls to the API. MySportsFeeds: If you ever read this, my bad...
        this.fetchSchedule();
    }

    render() {
        const { error, isLoaded, schedule } = this.state;
        
        //Handle failed API Call
        if (error) { return <Error /> }

        //Is API call 
        if (this.props.ApiLink === "gameScheduleQuery") {

            //Loading Animation
            if (!isLoaded) { return <LoadingCircle /> }

            //Map JSON Data to Card component
            else {
                const   gameCard = schedule.games.map((game) =>

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
                //Return Schedule Card container with mapped Schedule Cards
                return (
                    <CardContainer containerType="card_container_schedule_list">
                        {gameCard}
                    </CardContainer>
                )
            }
        }
    }
}

