import React from 'react';
import '../../Cards/card.css'
import Logo from '../../Logo/Logo'
class Team extends React.Component{

    render() {
        let teamName,
            teamCity,
            teamValue,
            logoValue;


        if(this.props.isHomeTeam){
            teamValue = this.props.homeTeamID;
            logoValue = teamValue.toString();

        } else {
            teamValue = this.props.awayTeamID;
            logoValue = teamValue.toString();
        }


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

        if(this.props.isHomeTeam){
            return(
                <div className="team home-team">
                    <h2>{teamName}</h2>
                    <h3>{teamCity}</h3>
                    <Logo value={logoValue} />
                    <h2 className="score home-score">{this.props.homeTeamScore}</h2>
                </div>
            )
    } else {
            return(
                <div className="team away-team">
                    <h2>{teamName}</h2>
                    <h3>{teamCity}</h3>
                    <Logo value={logoValue} />
                    <h2 className="score away-score">{this.props.awayTeamScore}</h2>
                </div>
                )
        }
    }
       
}
 export default Team;