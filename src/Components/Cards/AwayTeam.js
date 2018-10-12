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
        </div>
    )}
}
 export default AwayTeam;