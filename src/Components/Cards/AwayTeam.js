import React from 'react';
import '../Cards/card.css'
import Logo from '../../Containers/Header/Logo/Logo'
class AwayTeam extends React.Component{

    render() {
        return(
        <div className="team away-team">
            <h2>{this.props.awayTeamName}</h2>
            <h3>{this.props.awayTeamCity}</h3>
            <Logo 
                value={this.props.awayTeamValue}
            />
            <h2>{this.props.awayTeamScore}</h2>
        </div>
    )}
}
 export default AwayTeam;