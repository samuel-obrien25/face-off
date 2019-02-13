import React from 'react';
import '../Cards/card.css';
import TeamCard from './TeamCard/TeamCard';
import ScheduleCard from './ScheduleCard/ScheduleCard';

class Card extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            isHidden: true
        }
    }
    toggleCardSlide = () => {
        let cardsList = document.getElementsByClassName("card").length;

            if (cardsList) {
                let cardDelayTime = cardsList * 100;

                //Creates a staggered decimal for animation delay
                //ex. 1 / 16 * 1000 = 628ms
                //    2 / 16 * 1000 = 1250ms
                //    3 / 16 * 1000 = .1850ms

                setTimeout(() => {
                    console.log("timeout delay: " + cardDelayTime);
                    this.setState({
                        isHidden: false
                    });
                }, cardDelayTime);
            }
        }

    componentDidMount() {
        this.toggleCardSlide();
    }

    componentWillUnmount() {
            console.log("timeout delay: ");
    }

render() {

    const { activeTeamID, awayTeamCity, awayTeamID, awayTeamName, awayTeamScore, cardType, cityName, gameDateTime, handleClick, homeTeamCity, homeTeamID, homeTeamName, homeTeamScore, onClick, month, teamName, teamValue } = this.props;
 
    let className = this.state.isHidden ? "slide-in" : "";
    
        //Team Cards
        if(cardType === "teamCard") {
            return (
                <TeamCard 
                    className={className}
                    cityName={cityName}
                    teamName={teamName}
                    onClick={onClick}
                    teamValue={teamValue}
                />
                );
            }

        //Schedule Cards
        if(cardType === "scheduleCard") {
            return(
                <ScheduleCard
                    className={className}
                    gameDateTime={gameDateTime}
                    awayTeamID={awayTeamID}
                    awayTeamName={awayTeamName}
                    awayTeamCity={awayTeamCity}
                    awayTeamScore={awayTeamScore}
                    homeTeamID={homeTeamID}
                    homeTeamName={homeTeamName}
                    homeTeamCity={homeTeamCity}
                    homeTeamScore={homeTeamScore}
                    onClick={handleClick}
                    activeTeamID={activeTeamID}
                    month={month}
                />
            )
        }
    }
}
    
export default Card;