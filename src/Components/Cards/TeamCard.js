import React from 'react';
import Logo from '../Logo/Logo';
import ThreeDotMenu from '../Buttons/ThreeDotMenu';
import '../Cards/card.css';

export default class TeamCard extends React.Component{

    //onClick is set in Schedule.js
    //value is the team ID used for API query AND Logo.
    //value, cityName, and teamName are recieved from the TeamList component, NOT the API.
    //As of now, TeamCards are STATIC.
    
    render() {

        //Team Cards
        return (
            <button className= "card team-card"
                    onClick={this.props.onClick}
                    value={this.props.value}
                    >
                    <ThreeDotMenu />
                    <h2>{this.props.cityName}</h2>
                    <h3>{this.props.teamName}</h3>
                    <Logo value={this.props.value} />
            </button>
        )
    }
}