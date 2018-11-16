import React from 'react';
import '../Cards/card.css'
import Logo from '../../Containers/Header/Logo/Logo'
class AwayTeam extends React.Component{

    render() {

        //TO DO
        //====Figure out how to A) Combine with HomeTeam Component, or B) DRY it up.

        //Lets make this even LESS performative!
        //Gets the awayTeamID, which is a numer.
        //Converts it to a string for the Logo component.
        var awayTeamValue = this.props.awayTeamID,
            logoValue = awayTeamValue.toString();

        //Switch statement that compares the AwayTeamValue to the team's ID as defined by the API.
        //It then defines the AwayTeam/City's variables which feed into the presentation below.
        switch (awayTeamValue) {
            case 1:
            var awayTeamName = 'Lightning',
                awayTeamCity = 'Tampa Bay';
            break;
            case 2:{
            var awayTeamName = 'Jets',
                awayTeamCity = 'Winnipeg';
            }break;
            case 3: {
            var awayTeamName = 'Hurricanes',
                awayTeamCity = 'Carolina';
            }break;
            case 4: {
            var awayTeamName = 'Panthers',
                awayTeamCity = 'Florida';
           } break;
            case 5: {
            var awayTeamName = 'Capitals',
                awayTeamCity = 'Washington';
           } break;
            case 6: {
            var awayTeamName = 'Flyers',
                awayTeamCity = 'Philadelphia';
           } break;
            case 7: {
            var awayTeamName = 'Devils',
                awayTeamCity = 'New Jersey';
           } break;
            case 8: {
            var awayTeamName = 'Islanders',
                awayTeamCity = 'New York';
           } break;
            case 9: {
            var awayTeamName = 'Rangers',
                awayTeamCity = 'New York';
           } break;
            case 10: {
            var awayTeamName = 'Penguins',
                awayTeamCity = 'Pittsburgh';
           } break;
            case 11: {
            var awayTeamName = 'Bruins',
                awayTeamCity = 'Boston';
           } break;
            case 12: {
            var awayTeamName = 'Maple Leafs',
                awayTeamCity = 'Toronto';
           } break;
            case 13: {
            var awayTeamName = 'Senators',
                awayTeamCity = 'Ottawa';
           } break;
            case 14: {
            var awayTeamName = 'Canadians',
                awayTeamCity = 'Montreal';
           } break;
            case 15: {
            var awayTeamName = 'Sabres',
                awayTeamCity = 'Buffalo';
           } break;
            case 16: {
            var awayTeamName = 'Red Wings',
                awayTeamCity = 'Detroit';
           } break;
            case 17: {
            var awayTeamName = 'Blues',
                awayTeamCity = 'St. Louis';
           } break;
            case 18: {
            var awayTeamName = 'Predators',
                awayTeamCity = 'Nasheville';
           } break;
            case 19: {
            var awayTeamName = 'Blue Jackets',
                awayTeamCity = 'Columbus';
           } break;
            case 20: {
            var awayTeamName = 'Blackhawks',
                awayTeamCity = 'Chicago';
           } break;
            case 21: {
            var awayTeamName = 'Canucks',
                awayTeamCity = 'Vancouver';
           } break;
            case 22: {
            var awayTeamName = 'Avalanche',
                awayTeamCity = 'Colorado';
           } break;
            case 23: {
            var awayTeamName = 'Flames',
                awayTeamCity = 'Calgary';
           } break;
            case 24: {
            var awayTeamName = 'Oilers',
                awayTeamCity = 'Edmonton';
           } break;
            case 25: {
            var awayTeamName = 'Wild',
                awayTeamCity = 'Minnesota';
           } break;
            case 26: {
            var awayTeamName = 'Sharks',
                awayTeamCity = 'San Jose';
           } break;
            case 27: {
            var awayTeamName = 'Stars',
                awayTeamCity = 'Dallas';
           } break;
            case 28: {
            var awayTeamName = 'Kings',
                awayTeamCity = 'Los Angeles';
           } break;
            case 29: {
            var awayTeamName = 'Ducks',
                awayTeamCity = 'Anaheim';
           } break;
            case 30: {
            var awayTeamName = 'Coyotes',
                awayTeamCity = 'Arizona';
           } break;
            case 142: {
            var awayTeamName = 'Golden Knights',
                awayTeamCity = 'Los Vegas';
           } break;
          default:
            console.log('error converting data');
        }

        return(
        <div className="team away-team">
            <h2>{awayTeamName}</h2>
            <h3>{awayTeamCity}</h3>
            <Logo 
                value={logoValue}
            />
            <h2 className="score away-score">{this.props.awayTeamScore}</h2>
        </div>
    )}
}
 export default AwayTeam;