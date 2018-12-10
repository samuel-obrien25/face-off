import React from 'react';
import Logo from '../Logo/Logo';
import ThreeDotMenu from '../Buttons/ThreeDotMenu';
import '../Cards/card.css';

export default class TeamCard extends React.Component{

    //onClick is set in Schedule.js
    //teamValue is the team ID used for API query AND Logo. It logs an error that I need to look at.
    //value, cityName, and teamName are recieved from the TeamList component, NOT the API.
    //As of now, TeamCards are STATIC.
    
    render() {

        //Team Cards
        return (
            <div className= "card team-card slide-in"
                    onClick={this.props.onClick}
                    teamValue={this.props.teamValue}
                    >
                    <h2>{this.props.cityName}</h2>
                    <h3>{this.props.teamName}</h3>
                    <Logo teamValue={this.props.teamValue} />
            </div>
        )
    }
}