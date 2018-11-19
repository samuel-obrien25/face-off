import React from 'react';
import '../../Cards/card.css'
import Logo from '../../Logo/Logo'
class HomeTeam extends React.Component{

    render() {
        var homeTeamValue = this.props.homeTeamID,
            logoValue = homeTeamValue.toString();

        switch (homeTeamValue) {
            case 1:
            var homeTeamName = 'Lightning',
                homeTeamCity = 'Tampa Bay';
            break;
            case 2:{
            var homeTeamName = 'Jets',
                homeTeamCity = 'Winnipeg';
            }break;
            case 3: {
            var homeTeamName = 'Hurricanes',
                homeTeamCity = 'Carolina';
            }break;
            case 4: {
            var homeTeamName = 'Panthers',
                homeTeamCity = 'Florida';
           } break;
            case 5: {
            var homeTeamName = 'Capitals',
                homeTeamCity = 'Washington';
           } break;
            case 6: {
            var homeTeamName = 'Flyers',
                homeTeamCity = 'Philadelphia';
           } break;
            case 7: {
            var homeTeamName = 'Devils',
                homeTeamCity = 'New Jersey';
           } break;
            case 8: {
            var homeTeamName = 'Islanders',
                homeTeamCity = 'New York';
           } break;
            case 9: {
            var homeTeamName = 'Rangers',
                homeTeamCity = 'New York';
           } break;
            case 10: {
            var homeTeamName = 'Penguins',
                homeTeamCity = 'Pittsburgh';
           } break;
            case 11: {
            var homeTeamName = 'Bruins',
                homeTeamCity = 'Boston';
           } break;
            case 12: {
            var homeTeamName = 'Maple Leafs',
                homeTeamCity = 'Toronto';
           } break;
            case 13: {
            var homeTeamName = 'Senators',
                homeTeamCity = 'Ottawa';
           } break;
            case 14: {
            var homeTeamName = 'Canadians',
                homeTeamCity = 'Montreal';
           } break;
            case 15: {
            var homeTeamName = 'Sabres',
                homeTeamCity = 'Buffalo';
           } break;
            case 16: {
            var homeTeamName = 'Red Wings',
                homeTeamCity = 'Detroit';
           } break;
            case 17: {
            var homeTeamName = 'Blues',
                homeTeamCity = 'St. Louis';
           } break;
            case 18: {
            var homeTeamName = 'Predators',
                homeTeamCity = 'Nasheville';
           } break;
            case 19: {
            var homeTeamName = 'Blue Jackets',
                homeTeamCity = 'Columbus';
           } break;
            case 20: {
            var homeTeamName = 'Blackhawks',
                homeTeamCity = 'Chicago';
           } break;
            case 21: {
            var homeTeamName = 'Canucks',
                homeTeamCity = 'Vancouver';
           } break;
            case 22: {
            var homeTeamName = 'Avalanche',
                homeTeamCity = 'Colorado';
           } break;
            case 23: {
            var homeTeamName = 'Flames',
                homeTeamCity = 'Calgary';
           } break;
            case 24: {
            var homeTeamName = 'Oilers',
                homeTeamCity = 'Edmonton';
           } break;
            case 25: {
            var homeTeamName = 'Wild',
                homeTeamCity = 'Minnesota';
           } break;
            case 26: {
            var homeTeamName = 'Sharks',
                homeTeamCity = 'San Jose';
           } break;
            case 27: {
            var homeTeamName = 'Stars',
                homeTeamCity = 'Dallas';
           } break;
            case 28: {
            var homeTeamName = 'Kings',
                homeTeamCity = 'Los Angeles';
           } break;
            case 29: {
            var homeTeamName = 'Ducks',
                homeTeamCity = 'Anaheim';
           } break;
            case 30: {
            var homeTeamName = 'Coyotes',
                homeTeamCity = 'Arizona';
           } break;
            case 142: {
            var homeTeamName = 'Golden Knights',
                homeTeamCity = 'Los Vegas';
           } break;
          default:
            console.log('error converting data');
        }

        return(
        <div className="team home-team">
            <h2>{homeTeamName}</h2>
            <h3>{homeTeamCity}</h3>
            <Logo
                value={logoValue}
                />
            <h2 className="score home-score">{this.props.homeTeamScore}</h2>
        </div>
    )}
}
 export default HomeTeam;