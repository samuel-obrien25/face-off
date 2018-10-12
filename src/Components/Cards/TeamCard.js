import React from 'react';
import Logo from '../../Containers/Header/Logo/Logo'
import '../Cards/card.css';

export default class TeamCard extends React.Component{

    render() {

        //Team Cards
                  let rawTeamName = this.props.cityName,
                      combinedTeamName = rawTeamName.replace(' ', '-').replace('.', '').toLowerCase();
                  return (
                      <button className={`card teamCard ${combinedTeamName}`}
                              onClick={this.props.onClick}
                              value={this.props.value}
                              >
                          <h2>{this.props.cityName}</h2>
                          <h3>{this.props.teamName}</h3>
                          <Logo value={this.props.value} />
                      </button>
                  )
                } 
}