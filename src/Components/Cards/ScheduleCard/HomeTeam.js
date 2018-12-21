
import React from 'react';
import '../../Cards/card.css'
import Logo from '../../Logo/Logo'

const HomeTeam = (props) => {

    let homeWin;
    
    if(props.didHomeWin) {
        props.didHomeWin === "homeWin" ? homeWin = "winner" : homeWin = "loser";
    }

    return (
        <div className={`team home-team ${homeWin}`}>
            <h2>{props.teamName}</h2>
            <h3>{props.teamCity}</h3>
            <Logo teamValue={props.logoValue} />
            <h2 className="score home-score">{props.homeTeamScore}</h2>
        </div>
    )
}

export default HomeTeam;