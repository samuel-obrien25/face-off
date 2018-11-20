import React from 'react';
import '../../Cards/card.css'
import Logo from '../../Logo/Logo'
class Team extends React.Component{

    render() {
        if(this.props.isHomeTeam){
            var teamValue = this.props.homeTeamID,
                logoValue = teamValue.toString();

        } else {
            var teamValue = this.props.awayTeamID,
                logoValue = teamValue.toString();
        }

        switch (teamValue) {
            case 1:
            var teamName = 'Lightning',
                teamCity = 'Tampa Bay';
            break;
            case 2:
            var teamName = 'Jets',
                teamCity = 'Winnipeg';
            break;
            case 3:
            var teamName = 'Hurricanes',
                teamCity = 'Carolina';
            break;
            case 4:
            var teamName = 'Panthers',
                teamCity = 'Florida';
           break;
            case 5:
            var teamName = 'Capitals',
                teamCity = 'Washington';
           break;
            case 6:
            var teamName = 'Flyers',
                teamCity = 'Philadelphia';
           break;
            case 7:
            var teamName = 'Devils',
                teamCity = 'New Jersey';
           break;
            case 8:
            var teamName = 'Islanders',
                teamCity = 'New York';
           break;
            case 9:
            var teamName = 'Rangers',
                teamCity = 'New York';
           break;
            case 10:
            var teamName = 'Penguins',
                teamCity = 'Pittsburgh';
           break;
            case 11:
            var teamName = 'Bruins',
                teamCity = 'Boston';
           break;
            case 12:
            var teamName = 'Maple Leafs',
                teamCity = 'Toronto';
           break;
            case 13:
            var teamName = 'Senators',
                teamCity = 'Ottawa';
           break;
            case 14:
            var teamName = 'Canadians',
                teamCity = 'Montreal';
           break;
            case 15:
            var teamName = 'Sabres',
                teamCity = 'Buffalo';
           break;
            case 16:
            var teamName = 'Red Wings',
                teamCity = 'Detroit';
           break;
            case 17:
            var teamName = 'Blues',
                teamCity = 'St. Louis';
           break;
            case 18:
            var teamName = 'Predators',
                teamCity = 'Nasheville';
           break;
            case 19:
            var teamName = 'Blue Jackets',
                teamCity = 'Columbus';
           break;
            case 20:
            var teamName = 'Blackhawks',
                teamCity = 'Chicago';
           break;
            case 21:
            var teamName = 'Canucks',
                teamCity = 'Vancouver';
           break;
            case 22:
            var teamName = 'Avalanche',
                teamCity = 'Colorado';
           break;
            case 23:
            var teamName = 'Flames',
                teamCity = 'Calgary';
           break;
            case 24:
            var teamName = 'Oilers',
                teamCity = 'Edmonton';
           break;
            case 25:
            var teamName = 'Wild',
                teamCity = 'Minnesota';
           break;
            case 26:
            var teamName = 'Sharks',
                teamCity = 'San Jose';
           break;
            case 27:
            var teamName = 'Stars',
                teamCity = 'Dallas';
           break;
            case 28:
            var teamName = 'Kings',
                teamCity = 'Los Angeles';
           break;
            case 29:
            var teamName = 'Ducks',
                teamCity = 'Anaheim';
           break;
            case 30:
            var teamName = 'Coyotes',
                teamCity = 'Arizona';
           break;
            case 142:
            var teamName = 'Golden Knights',
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