import React from 'react';
import Card from '../../Cards/Card';
import '../../Cards/card.css';

class TeamList extends React.Component{

    render() {

        return(

            <div className="card_container card-container-teams" id="card_container_team_list">
            <section className="division">
                <h2 className="division-name">Atlantic</h2>
                    <Card 
                        cardType="teamCard"
                        cityName="Boston"
                        teamName="Bruins"
                        teamValue="11"
                        onClick={this.props.handleClick}
                    />
                    <Card 
                        cardType="teamCard"
                        cityName="Buffalo"
                        teamName="Sabres"
                        teamValue="15"
                        onClick={this.props.handleClick}
                    />
                    <Card 
                        cardType="teamCard"
                        cityName="Detroit"
                        teamName="Red Wings"
                        teamValue="16"
                        onClick={this.props.handleClick}
                    />
                    <Card 
                        cardType="teamCard"
                        cityName="Florida"
                        teamName="Panthers"
                        teamValue="4"
                        onClick={this.props.handleClick}
                    />
                    <Card 
                        cardType="teamCard"
                        cityName="Montreal"
                        teamName="Canadians"
                        teamValue="14"
                        onClick={this.props.handleClick}
                    />
                    <Card 
                        cardType="teamCard"
                        cityName="Ottawa"
                        teamName="Senators"
                        teamValue="13"
                        onClick={this.props.handleClick}
                    />
                    <Card 
                        cardType="teamCard"
                        cityName="Tampa Bay"
                        teamName="Lightning"
                        teamValue="1"
                        onClick={this.props.handleClick}
                    />
                    <Card 
                        cardType="teamCard"
                        cityName="Toronto"
                        teamName="Maple Leafs"
                        teamValue="12"
                        onClick={this.props.handleClick}
                    />
                </section>
                <section className="division">
                    <h2 className="division-name">Metropolitan</h2>
                    <Card 
                        cardType="teamCard"
                        cityName="Carolina"
                        teamName="Hurricanes"
                        teamValue="3"
                        onClick={this.props.handleClick}
                    />
                    <Card 
                        cardType="teamCard"
                        cityName="Columbus"
                        teamName="Blue Jackets"
                        teamValue="19"
                        onClick={this.props.handleClick} 
                    />
                    <Card 
                        cardType="teamCard"
                        cityName="New Jersey"
                        teamName="Devils"
                        teamValue="7"
                        onClick={this.props.handleClick}
                        />
                    <Card 
                        cardType="teamCard"
                        cityName="New York"
                        teamName="Islanders"
                        teamValue="8"
                        onClick={this.props.handleClick}
                    />
                    <Card 
                        cardType="teamCard"
                        cityName="New York"
                        teamName="Rangers"
                        teamValue="9"
                        onClick={this.props.handleClick}
                    />

                    <Card 
                        cardType="teamCard"
                        cityName="Philadelphia"
                        teamName="Flyers"
                        teamValue="6"
                        onClick={this.props.handleClick}
                    />

                    <Card 
                        cardType="teamCard"
                        cityName="Pittsburgh"
                        teamName="Penguins"
                        teamValue="10"
                        onClick={this.props.handleClick}
                    />
                    <Card 
                        cardType="teamCard"
                        cityName="Washington"
                        teamName="Capitals"
                        teamValue="5"
                        onClick={this.props.handleClick}
                    />
                </section>
                <section className="division">
                    <h2 className="division-name">Central</h2>
                    <Card 
                        cardType="teamCard"
                        cityName="Chicago"
                        teamName="Black Hawks"
                        teamValue="20"
                        onClick={this.props.handleClick} 
                    />
                    <Card 
                        cardType="teamCard"
                        cityName="Colorado"
                        teamName="Avalanche"
                        teamValue="22"
                        onClick={this.props.handleClick}
                    />
                <Card 
                        cardType="teamCard"
                        cityName="Dallas"
                        teamName="Stars"
                        teamValue="27"
                        onClick={this.props.handleClick}
                    />
                    <Card 
                        cardType="teamCard"
                        cityName="Minnesota"
                        teamName="Wild"
                        teamValue="25"
                        onClick={this.props.handleClick}
                    />
                    <Card 
                        cardType="teamCard"
                        cityName="Nashville"
                        teamName="Predators"
                        teamValue="18"
                        onClick={this.props.handleClick}
                    />
                <Card 
                        cardType="teamCard"
                        cityName="St. Louis"
                        teamName="Blues"
                        teamValue="17"
                        onClick={this.props.handleClick}
                    />
                    <Card 
                        cardType="teamCard"
                        cityName="Winnipeg"
                        teamName="Jets"
                        teamValue="2"
                        onClick={this.props.handleClick}
                    />
                </section>
                <section className="division">
                    <h2 className="division-name">Pacific</h2>
                    <Card 
                        cardType="teamCard"
                        cityName="Anaheim"
                        teamName="Ducks"
                        teamValue="29"
                        onClick={this.props.handleClick}
                    />
                    <Card 
                        cardType="teamCard"
                        cityName="Arizona"
                        teamName="Coyotes"
                        teamValue="30"
                        onClick={this.props.handleClick}
                    />
                    <Card 
                        cardType="teamCard"
                        cityName="Calgary"
                        teamName="Flames"
                        teamValue="23"
                        onClick={this.props.handleClick}
                    />
                    <Card 
                        cardType="teamCard"
                        cityName="Edmonton"
                        teamName="Oilers"
                        teamValue="24"
                        onClick={this.props.handleClick}
                    />
                    <Card 
                        cardType="teamCard"
                        cityName="Los Angeles"
                        teamName="Kings"
                        teamValue="28"
                        onClick={this.props.handleClick}
                    />
                    <Card 
                        cardType="teamCard"
                        cityName="San Jose"
                        teamName="Sharks"
                        teamValue="26"
                        onClick={this.props.handleClick}
                    />
                    <Card 
                        cardType="teamCard"
                        cityName="Vancouver"
                        teamName="Canucks"
                        teamValue="21"
                        onClick={this.props.handleClick}
                    />
                    <Card 
                        cardType="teamCard"
                        cityName="Las Vegas"
                        teamName="Golden Knights"
                        teamValue="142"
                        onClick={this.props.handleClick}
                    />
                </section>
        </div>
    )}
}
        export default TeamList