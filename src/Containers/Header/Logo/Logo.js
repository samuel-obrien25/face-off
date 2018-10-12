import React from 'react';
import '../Logo/Logo.css';

export default class Logo extends React.Component{
    constructor (props){
        super(props);
    
        this.state = {
            results: ''
        };


    }




render(){
    let teamValue = this.props.value,
        currentLogo;

    switch(teamValue) {
        case "1":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-14-dark.svg";
            break;
        case "2":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-52-dark.svg";
            break;
        case "3":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-12-dark.svg" ;
            break;
        case "4":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-13-dark.svg" ;
            break;
        case "5":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-15-dark.svg";
            break;
        case "6":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-4-dark.svg" ;
            break;
        case "7":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-1-dark.svg" ;
            break;
        case "8":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-2-dark.svg" ;
            break;
        case "9":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-3-dark.svg" ;
            break;
        case "10":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-5-dark.svg" ;
            break;
        case "11":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-6-dark.svg" ;
            break;
        case "12":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-10-dark.svg" ;
            break;
        case "13":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-9-dark.svg" ;
            break;
        case "14":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-8-dark.svg" ;
            break;
        case "15":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-7-dark.svg" ;
            break;
        case "16":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-17-dark.svg" ;
            break;
        case "17":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-19-dark.svg" ;
            break;        
        case "18":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-18-dark.svg" ;
            break;       
        case "19":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-29-dark.svg" ;
            break;
        case "20":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-16-dark.svg" ;
            break;
        case "21":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-23-dark.svg" ;
            break;        
        case "22":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-21-dark.svg" ;
            break;        
        case "23":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-20-dark.svg" ;
            break;        
        case "24":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-22-dark.svg" ;
            break;        
        case "25":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-30-dark.svg" ;
            break;        
        case "26":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-28-dark.svg" ;
            break;        
        case "27":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-25-dark.svg" ;
            break;        
        case "28":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-26-dark.svg" ;
            break;        
        case "29":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-24-dark.svg" ;
            break;        
        case "30":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-53-dark.svg" ;
            break;        
        case "142":
            currentLogo = "https://www-league.nhlstatic.com/images/logos/teams-current-circle/54.svg"
            break;
        default:
            currentLogo = '';
            break;        
    }

    return(
        <div className="logo-container">
            <img src = {currentLogo}
                alt = {`${this.props.TeamName} logo`}
                />
        </div>
    )}

}


/*               
                <Card 
                    cardType="teamCard"
                    cityName="Tampa Bay"
                    teamName="Lightning"
                    value="1"
                    onClick={this.props.handleClick}
                />
                <Card 
                    cardType="teamCard"
                    cityName="Winnipeg"
                    teamName="Jets"
                    value="2"
                    onClick={this.props.handleClick}
                />
                <Card 
                    cardType="teamCard"
                    cityName="Carolina"
                    teamName="Hurricanes"
                    value="3"
                    onClick={this.props.handleClick}
                />
                <Card 
                    cardType="teamCard"
                    cityName="Florida"
                    teamName="Panthers"
                    value="4"
                    onClick={this.props.handleClick}
                />
                <Card 
                    cardType="teamCard"
                    cityName="Washington"
                    teamName="Capitals"
                    value="5"
                    onClick={this.props.handleClick}
                />
                <Card 
                    cardType="teamCard"
                    cityName="Philadelphia"
                    teamName="Flyers"
                    value="6"
                    onClick={this.props.handleClick}
                />
                <Card 
                    cardType="teamCard"
                    cityName="New Jersey"
                    teamName="Devils"
                    value="7"
                    onClick={this.props.handleClick}
                />
                <Card 
                    cardType="teamCard"
                    cityName="New York"
                    teamName="Islanders"
                    value="8"
                    onClick={this.props.handleClick}
                />
                <Card 
                    cardType="teamCard"
                    cityName="New York"
                    teamName="Rangers"
                    value="9"
                    onClick={this.props.handleClick}
                />
                <Card 
                    cardType="teamCard"
                    cityName="Pittsburgh"
                    teamName="Penguins"
                    value="10"
                    onClick={this.props.handleClick}
                />
                <Card 
                    cardType="teamCard"
                    cityName="Boston"
                    teamName="Bruins"
                    value="11"
                    onClick={this.props.handleClick}
                />
                <Card 
                    cardType="teamCard"
                    cityName="Toronto"
                    teamName="Maple Leafs"
                    value="12"
                    onClick={this.props.handleClick}
                />
                <Card 
                    cardType="teamCard"
                    cityName="Ottawa"
                    teamName="Senators"
                    value="13"
                    onClick={this.props.handleClick}
                />
                <Card 
                    cardType="teamCard"
                    cityName="Montreal"
                    teamName="Canadians"
                    value="14"
                    onClick={this.props.handleClick}
                />
                <Card 
                    cardType="teamCard"
                    cityName="Buffalo"
                    teamName="Sabres"
                    value="15"
                    onClick={this.props.handleClick}
                />
                <Card 
                    cardType="teamCard"
                    cityName="Detroit"
                    teamName="Red Wings"
                    value="16"
                    onClick={this.props.handleClick}
                />
                <Card 
                    cardType="teamCard"
                    cityName="St. Louis"
                    teamName="Blues"
                    value="17"
                    onClick={this.props.handleClick}
                />
                <Card 
                    cardType="teamCard"
                    cityName="Nashville"
                    teamName="Predators"
                    value="18"
                    onClick={this.props.handleClick}
                />
                <Card 
                    cardType="teamCard"
                    cityName="Columbus"
                    teamName="Blue Jackets"
                    value="19"
                    onClick={this.props.handleClick} 
                />
                <Card 
                    cardType="teamCard"
                    cityName="Chicago"
                    teamName="Black Hawks"
                    value="20"
                    onClick={this.props.handleClick} 
                />
                <Card 
                    cardType="teamCard"
                    cityName="Vancouver"
                    teamName="Canucks"
                    value="21"
                    onClick={this.props.handleClick}
                />
                <Card 
                    cardType="teamCard"
                    cityName="Colorado"
                    teamName="Avalanche"
                    value="22"
                    onClick={this.props.handleClick}
                />
                <Card 
                    cardType="teamCard"
                    cityName="Calgary"
                    teamName="Flames"
                    value="23"
                    onClick={this.props.handleClick}
                />
                <Card 
                    cardType="teamCard"
                    cityName="Edmonton"
                    teamName="Oilers"
                    value="24"
                    onClick={this.props.handleClick}
                />
                <Card 
                    cardType="teamCard"
                    cityName="Minnesota"
                    teamName="Wild"
                    value="25"
                    onClick={this.props.handleClick}
                />
                <Card 
                    cardType="teamCard"
                    cityName="San Jose"
                    teamName="Sharks"
                    value="26"
                    onClick={this.props.handleClick}
                />

                <Card 
                    cardType="teamCard"
                    cityName="Dallas"
                    teamName="Stars"
                    value="27"
                    onClick={this.props.handleClick}
                />
                <Card 
                    cardType="teamCard"
                    cityName="Los Angeles"
                    teamName="Kings"
                    value="28"
                    onClick={this.props.handleClick}
                />
                <Card 
                    cardType="teamCard"
                    cityName="Anaheim"
                    teamName="Ducks"
                    value="29"
                    onClick={this.props.handleClick}
                />
                <Card 
                    cardType="teamCard"
                    cityName="Arizona"
                    teamName="Coyotes"
                    value="30"
                    onClick={this.props.handleClick}
                />
                <Card 
                    cardType="teamCard"
                    cityName="Las Vegas"
                    teamName="Golden Knights"
                    value="142"
                    onClick={this.props.handleClick}
                />













    */