import React, {useState, useEffect} from 'react';
import CardContainer from '../Components/Containers/CardContainer';
import Card from '../Components/Cards/Card';
import LoadingCircle from '../Components/Loading/LoadingCircle';

/**
 */

interface ApiCallProps {
    activeTeamID: string,
    activeTeamName?: string,
    ApiLink: string,
    awayTeamName?: string,
    awayTeamCity?: string,
    awayTeamID?: string,
    url: string,
    cityName?: string,
    handleClick?: any,
    homeTeamName?: string,
    homeTeamCity?: string,
    homeTeamID?: number,
    onClick?: any,
    month?: any,
    teamName?: any,
    teamValue?: string
}

const ApiCall: React.FC<ApiCallProps> = (props) => {
    //schedule: placeholder for data recieved from fetch request
    //isLoaded: boolean for loading animation
    //error: if something doesn't go right, load Error component

    const [schedule, setSchedule] = useState();
    const [isLoaded, setIsLoaded] = useState(Boolean);

    function fetchSchedule() {
        const   username = 'sobrien',
                password = 'MYSPORTSFEEDS',
                url = props.url,
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
                setSchedule(data);
                setIsLoaded(true);
            })
            .catch(error => {
                console.log('API call failed with error ', error);
            });
        return;
    }

    useEffect(() => {
        fetchSchedule();
    }, []);
    

    if (props.ApiLink === "gameScheduleQuery") {

        //Loading Animation
        if (!isLoaded) { return <LoadingCircle /> }
        
        //Map JSON Data to Card component
        else {
            const gameCard = schedule.games.map((game: any) =>
                <Card key={game.schedule.id}
                    cardType="scheduleCard"
                    awayTeamName={props.awayTeamName!}
                    awayTeamCity={props.awayTeamCity!}
                    awayTeamID={game.schedule.awayTeam.id!}
                    awayTeamScore={game.score.awayScoreTotal!}
                    homeTeamName={props.homeTeamName!}
                    homeTeamCity={props.homeTeamCity!}
                    homeTeamID={game.schedule.homeTeam.id!}
                    homeTeamScore={game.score.homeScoreTotal!}
                    gameDateTime={game.schedule.startTime!}
                    gameID={game.schedule.id!}
                    activeTeamID={props.activeTeamID!}
                    activeTeamName={props.activeTeamName!}
                    cityName={props.cityName!}
                    teamValue={props.teamValue!}
                    {...props}
                />

                );
            //Return Schedule Card container with mapped Schedule Cards
            return (
                <CardContainer containerType="card_container_schedule_list" >
                    {gameCard}
                </CardContainer>
            )
        }
    } else {
        return <></>
    }
}

export default ApiCall