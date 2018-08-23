import React from 'react';
import '../Cards/card.css';

export default class TeamCard extends React.Component{
    constructor(props){
        super(props);
    }

    render() {

        //Team Cards
                  let rawTeamName = this.props.cityName,
                      combinedTeamName = rawTeamName.replace(' ', '-').replace('.', '').toLowerCase();
                      console.log(combinedTeamName);
                  return (
                      <button className={`card teamCard ${combinedTeamName}`}
                              onClick={this.props.onClick}
                              value={this.props.value}
                              >
                          <h2>{this.props.cityName}</h2>
                          <h3>{this.props.teamName}</h3>
                      </button>
                  )
                } 
        }
