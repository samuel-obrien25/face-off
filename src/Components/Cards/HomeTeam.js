import React from 'react';
import '../Cards/card.css';
import Logo from '../../Containers/Header/Logo/Logo';
class HomeTeam extends React.Component{

    render() {
        return(
        <div className="team homeTeam">
            <h2>{this.props.homeTeamName}</h2>
            <h3>{this.props.homeTeamCity}</h3>
            <Logo
                value={this.props.homeTeamValue}
                />
        </div>
    )}
}
 export default HomeTeam;