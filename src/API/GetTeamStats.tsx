import React, {useState, useEffect} from 'react';
import styled from 'styled-components' ;
import LoadingCircle from '../Components/Loading/LoadingCircle';

const StyledH3 = styled.h3`
    font-size: ${(props: GetTeamStatsProps) => props.teamStatsLocation === "header" ? "24px" : "16px"};
    padding-left: 20px;
`;
    //This whole component does not need to exist. Should be handled with the APICall.js component.

interface GetTeamStatsProps{
    teamStatsLocation: string,
    url: string,
    ApiLink: string,
}

const GetTeamStats: React.FC<GetTeamStatsProps> = (props) => {

    const [teamStats, setTeamStats] = useState();
    const [isLoading, setIsLoading] = useState(true);

    function fetchTeamStats(){

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
            .then(resp => resp.json())
            .then(resp => {
                console.log(resp);
                setTeamStats(resp);
                setIsLoading(false);
            })
            .catch(error => {
                console.log('GetTeamStats Fetch Error: ' + error);
            });
    }

useEffect(() => {
    fetchTeamStats();
}, [props.url])

if(props.ApiLink === "teamStatsQuery") {

    if (isLoading){ 
        //Doesn't work as intended
        return (
            <LoadingCircle />
        ) 
    }
    
    else{
        let record;

        if(teamStats.teamStatsTotals[0] !== undefined){

            const teamWins = teamStats.teamStatsTotals[0].stats.standings.wins,
                  teamLosses = teamStats.teamStatsTotals[0].stats.standings.losses,
                  teamOvertimeLosses = teamStats.teamStatsTotals[0].stats.standings.overtimeLosses;
                    
                    record = teamWins + ", " + teamLosses + ", " + teamOvertimeLosses;
              
        } else {
            record = '0, 0, 0';
        }

            return (
               <StyledH3 teamStatsLocation={props.teamStatsLocation} {...props}>({record})</StyledH3>
            )
        }
} 
else{
    return <></>
}


}

export default GetTeamStats