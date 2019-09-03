import React from 'react';

import HomeTeam from '../ScheduleCard/HomeTeam';
import AwayTeam from '../ScheduleCard/AwayTeam';

interface TeamProps{
    activeTeamID?: string,
    awayTeamID: string,
    awayTeamCity?: string,
    awayTeamScore: string,
    didHomeWin: string,
    homeTeamCity?: string,
    homeTeamID: number,
    homeTeamScore: string,
    isHomeTeam?: boolean,
    teamName: string,
    teamCity?: string,

}

const Team: React.FC<TeamProps> = (props) => {
    
        //Variables that feed into Home team and Away team components
        let teamName: string = '',
            teamCity: string = '',
            teamValue: number|string,
            logoValue;

        const { awayTeamID, awayTeamScore, didHomeWin, homeTeamID, homeTeamScore, isHomeTeam } = props;

        //Gets props.isHomeTeam from Card.js
        if(isHomeTeam){
            teamValue = homeTeamID;
            logoValue = teamValue.toString();

        } else {
            teamValue = awayTeamID;
            logoValue = teamValue.toString();
        }
        
        //Assign teamName and TeamCity data based on teamID
        switch (teamValue) {
            case 1:
                teamName = 'Lightning';
                teamCity = 'Tampa Bay';
            break;
            case 2:
                teamName = 'Jets';
                teamCity = 'Winnipeg';
            break;
            case 3:
                teamName = 'Hurricanes';
                teamCity = 'Carolina';
            break;
            case 4:
                teamName = 'Panthers';
                teamCity = 'Florida';
           break;
            case 5:
                teamName = 'Capitals';
                teamCity = 'Washington';
           break;
            case 6:
                teamName = 'Flyers';
                teamCity = 'Philadelphia';
           break;
            case 7:
                teamName = 'Devils';
                teamCity = 'New Jersey';
           break;
            case 8:
                teamName = 'Islanders';
                teamCity = 'New York';
           break;
            case 9:
                teamName = 'Rangers';
                teamCity = 'New York';
           break;
            case 10:
                teamName = 'Penguins';
                teamCity = 'Pittsburgh';
           break;
            case 11:
                teamName = 'Bruins';
                teamCity = 'Boston';
           break;
            case 12:
                teamName = 'Maple Leafs';
                teamCity = 'Toronto';
           break;
            case 13:
                teamName = 'Senators';
                teamCity = 'Ottawa';
           break;
            case 14:
                teamName = 'Canadians';
                teamCity = 'Montreal';
           break;
            case 15:
                teamName = 'Sabres';
                teamCity = 'Buffalo';
           break;
            case 16:
                teamName = 'Red Wings';
                teamCity = 'Detroit';
           break;
            case 17:
                teamName = 'Blues';
                teamCity = 'St. Louis';
           break;
            case 18:
                teamName = 'Predators';
                teamCity = 'Nasheville';
           break;
            case 19:
                teamName = 'Blue Jackets';
                teamCity = 'Columbus';
           break;
            case 20:
                teamName = 'Blackhawks';
                teamCity = 'Chicago';
           break;
            case 21:
                teamName = 'Canucks';
                teamCity = 'Vancouver';
           break;
            case 22:
                teamName = 'Avalanche';
                teamCity = 'Colorado';
           break;
            case 23:
                teamName = 'Flames';
                teamCity = 'Calgary';
           break;
            case 24:
                teamName = 'Oilers';
                teamCity = 'Edmonton';
           break;
            case 25:
                teamName = 'Wild';
                teamCity = 'Minnesota';
           break;
            case 26:
                teamName = 'Sharks';
                teamCity = 'San Jose';
           break;
            case 27:
                teamName = 'Stars';
                teamCity = 'Dallas';
           break;
            case 28:
                teamName = 'Kings';
                teamCity = 'Los Angeles';
           break;
            case 29:
                teamName = 'Ducks';
                teamCity = 'Anaheim';
           break;
            case 30:
                teamName = 'Coyotes';
                teamCity = 'Arizona';
           break;
            case 142:
                teamName = 'Golden Knights';
                teamCity = 'Los Vegas';
           break;
          default:
            console.log('error converting data');
        }

        if(isHomeTeam){

            return(
                <HomeTeam
                    teamName={teamName}
                    teamCity={teamCity}
                    didHomeWin={didHomeWin}
                    homeTeamScore={homeTeamScore}
                    logoValue={logoValue}
                />
            )

    } else {

            return(
                <AwayTeam
                    teamName={teamName}
                    teamCity={teamCity}
                    didHomeWin={didHomeWin}
                    awayTeamScore={awayTeamScore}
                    logoValue={logoValue}
                    {...props}
                />
            )
        
        }
        
    }

 export default Team;