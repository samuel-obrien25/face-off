import React from 'react';
import Card from '../../Cards/Card';
import '../../Cards/card.css';

class TeamList extends React.Component{

    render() {
        return(

            <div className="card_container card-container-teams" id="card_container_team_list">

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
        </div>
    )}
}
        export default TeamList