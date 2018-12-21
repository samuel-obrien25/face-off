
import React from 'react';
import '../../Cards/card.css'
import Logo from '../../Logo/Logo'

const AwayTeam = (props) => {

    let homeWin;
    
    if(props.didHomeWin) {
        props.didHomeWin === "homeWin" ? homeWin = "loser" : homeWin = "winner";
    }
    
    return (
        <div className={`team away-team ${homeWin}`}>
            <h2>{props.teamName}</h2>
            <h3>{props.teamCity}</h3>
            <Logo teamValue={props.logoValue} />
            <h2 className="score away-score">{props.awayTeamScore}</h2>
        </div>
    )
}

export default AwayTeam;