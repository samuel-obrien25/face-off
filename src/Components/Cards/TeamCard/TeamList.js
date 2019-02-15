import React from 'react';

import CardContainer from '../../Containers/CardContainer';
import DivisionContainer from '../../Containers/DivisionContainer';
import Card from '../../Cards/Card';


const TeamList = (props) => {

        return (

            <CardContainer containerType="division-container">
                <DivisionContainer divisionTitle="Atlantic">
                    <Card
                        cardType="teamCard"
                        cityName="Boston"
                        teamName="Bruins"
                        teamValue="11"
                        onClick={props.handleClick}
                    />
                    <Card
                        cardType="teamCard"
                        cityName="Buffalo"
                        teamName="Sabres"
                        teamValue="15"
                        onClick={props.handleClick}
                    />
                    <Card
                        cardType="teamCard"
                        cityName="Detroit"
                        teamName="Red Wings"
                        teamValue="16"
                        onClick={props.handleClick}
                    />
                    <Card
                        cardType="teamCard"
                        cityName="Florida"
                        teamName="Panthers"
                        teamValue="4"
                        onClick={props.handleClick}
                    />
                    <Card
                        cardType="teamCard"
                        cityName="Montreal"
                        teamName="Canadians"
                        teamValue="14"
                        onClick={props.handleClick}
                    />
                    <Card
                        cardType="teamCard"
                        cityName="Ottawa"
                        teamName="Senators"
                        teamValue="13"
                        onClick={props.handleClick}
                    />
                    <Card
                        cardType="teamCard"
                        cityName="Tampa Bay"
                        teamName="Lightning"
                        teamValue="1"
                        onClick={props.handleClick}
                    />
                    <Card
                        cardType="teamCard"
                        cityName="Toronto"
                        teamName="Maple Leafs"
                        teamValue="12"
                        onClick={props.handleClick}
                    />
                </DivisionContainer>
                <DivisionContainer divisionTitle="Metropolitan">
                    <Card
                        cardType="teamCard"
                        cityName="Carolina"
                        teamName="Hurricanes"
                        teamValue="3"
                        onClick={props.handleClick}
                    />
                    <Card
                        cardType="teamCard"
                        cityName="Columbus"
                        teamName="Blue Jackets"
                        teamValue="19"
                        onClick={props.handleClick}
                    />
                    <Card
                        cardType="teamCard"
                        cityName="New Jersey"
                        teamName="Devils"
                        teamValue="7"
                        onClick={props.handleClick}
                    />
                    <Card
                        cardType="teamCard"
                        cityName="New York"
                        teamName="Islanders"
                        teamValue="8"
                        onClick={props.handleClick}
                    />
                    <Card
                        cardType="teamCard"
                        cityName="New York"
                        teamName="Rangers"
                        teamValue="9"
                        onClick={props.handleClick}
                    />

                    <Card
                        cardType="teamCard"
                        cityName="Philadelphia"
                        teamName="Flyers"
                        teamValue="6"
                        onClick={props.handleClick}
                    />

                    <Card
                        cardType="teamCard"
                        cityName="Pittsburgh"
                        teamName="Penguins"
                        teamValue="10"
                        onClick={props.handleClick}
                    />
                    <Card
                        cardType="teamCard"
                        cityName="Washington"
                        teamName="Capitals"
                        teamValue="5"
                        onClick={props.handleClick}
                    />
                </DivisionContainer>
                <DivisionContainer divisionTitle="Central">
                    <Card
                        cardType="teamCard"
                        cityName="Chicago"
                        teamName="Black Hawks"
                        teamValue="20"
                        onClick={props.handleClick}
                    />
                    <Card
                        cardType="teamCard"
                        cityName="Colorado"
                        teamName="Avalanche"
                        teamValue="22"
                        onClick={props.handleClick}
                    />
                    <Card
                        cardType="teamCard"
                        cityName="Dallas"
                        teamName="Stars"
                        teamValue="27"
                        onClick={props.handleClick}
                    />
                    <Card
                        cardType="teamCard"
                        cityName="Minnesota"
                        teamName="Wild"
                        teamValue="25"
                        onClick={props.handleClick}
                    />
                    <Card
                        cardType="teamCard"
                        cityName="Nashville"
                        teamName="Predators"
                        teamValue="18"
                        onClick={props.handleClick}
                    />
                    <Card
                        cardType="teamCard"
                        cityName="St. Louis"
                        teamName="Blues"
                        teamValue="17"
                        onClick={props.handleClick}
                    />
                    <Card
                        cardType="teamCard"
                        cityName="Winnipeg"
                        teamName="Jets"
                        teamValue="2"
                        onClick={props.handleClick}
                    />
                </DivisionContainer>
                <DivisionContainer divisionTitle="Pacific">
                    <Card
                        cardType="teamCard"
                        cityName="Anaheim"
                        teamName="Ducks"
                        teamValue="29"
                        onClick={props.handleClick}
                    />
                    <Card
                        cardType="teamCard"
                        cityName="Arizona"
                        teamName="Coyotes"
                        teamValue="30"
                        onClick={props.handleClick}
                    />
                    <Card
                        cardType="teamCard"
                        cityName="Calgary"
                        teamName="Flames"
                        teamValue="23"
                        onClick={props.handleClick}
                    />
                    <Card
                        cardType="teamCard"
                        cityName="Edmonton"
                        teamName="Oilers"
                        teamValue="24"
                        onClick={props.handleClick}
                    />
                    <Card
                        cardType="teamCard"
                        cityName="Los Angeles"
                        teamName="Kings"
                        teamValue="28"
                        onClick={props.handleClick}
                    />
                    <Card
                        cardType="teamCard"
                        cityName="San Jose"
                        teamName="Sharks"
                        teamValue="26"
                        onClick={props.handleClick}
                    />
                    <Card
                        cardType="teamCard"
                        cityName="Vancouver"
                        teamName="Canucks"
                        teamValue="21"
                        onClick={props.handleClick}
                    />
                    <Card
                        cardType="teamCard"
                        cityName="Las Vegas"
                        teamName="Golden Knights"
                        teamValue="142"
                        onClick={props.handleClick}
                    />
                </DivisionContainer>
            </CardContainer>

        )
    }
export default TeamList