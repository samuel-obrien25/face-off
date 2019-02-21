import React from 'react';
import Team from '../TeamCard/Team';
import GameDateContainer from './GameDateContainer';
import styled from 'styled-components';

//#region STYLES
const StyledScheduleCard = styled.div`
    margin: auto 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    height: 300px;
    width: 100%;
    min-width: 350px;
    transition: .25s ease-in-out;
    background-color: ${props => props.isPast === "past" ? "lightgray" : "#fff"};
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    scroll-behavior: smooth;
    scroll-snap-align: center;
    opacity: ${props => props.isPast === "past" ? ".6" : "1"};

    @media (min-width: 600px) {
        width: 350px;
        height: 450px;
        margin: auto 20px;

            :hover{
                box-shadow: 0 2px 6px rgba(0,0,0,0.2), 0 2px 4px rgba(0,0,0,0.4);
                transform: translateY(-5px);
            }
    }
`;

const StyledGameScore = styled.div`
    position: absolute;
    top: 15px;
    height: calc(100% - 15px);
    width: 100%;
    display: flex;
    flex-direction: column;

    & *{
        margin: auto;
    }

    & p{
        font-weight: 600;
    }
`

//#endregion STYLES



class ScheduleCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGamePast: true,
        };
    }

    dateCheck () {
        const { gameDateTime } = this.props;

        let currentDate = new Date(),
            currentGameDate = new Date(gameDateTime);

        if (currentDate < currentGameDate) {
            this.setState({
                isGamePast: false,
            })
    }
}

    addCardScale() {
        let cardsList = document.getElementsByClassName("schedule-card"),
            viewCenterPoint = window.outerWidth / 2,
            scaleValue,
            i = 0;

        for (i; i < cardsList.length; i++) {
            let cardScrollPoint = cardsList[i].offsetLeft,
                cardsListContainer = cardsList[i].parentElement.scrollLeft + 300;

                if(cardsList[i].scrollLeft )
                scaleValue = (((cardsListContainer - cardScrollPoint) / viewCenterPoint) * 1.2);

            cardsList[i].style.transform = "scale(" + scaleValue + ")";
        }
    }

    componentDidMount() {
        this.dateCheck();
    }

    render() {

        const {activeTeamID, awayTeamID, awayTeamScore, gameDateTime, homeTeamID, homeTeamScore, teamCity, teamName} = this.props,
                pastOrFuture= this.state.isGamePast ? "past" : "future";

        let currentGameDate = new Date(gameDateTime),
            month = currentGameDate.getMonth(),
            didHomeWin;

        if (homeTeamScore > awayTeamScore){
            didHomeWin = "homeWin";
        } else {
            didHomeWin = "homeLose"; 
        }

        return (

            <StyledScheduleCard data-month={month} data-pastfuture={pastOrFuture} cardType={"scheduleCard"} isPast={this.state.isGamePast ? 'past' : 'future'}>
                <GameDateContainer
                    gameDateTime={currentGameDate}
                    activeTeamID={activeTeamID}
                />
                <StyledGameScore>
                    <Team
                        didHomeWin={didHomeWin}
                        awayTeamID={awayTeamID}
                        teamName={teamName}
                        teamCity={teamCity}
                        awayTeamScore={awayTeamScore}
                    />
                    <p>At</p>
                    <Team
                        isHomeTeam={true}
                        didHomeWin={didHomeWin}
                        homeTeamID={homeTeamID}
                        teamName={teamName}
                        teamCity={teamCity}
                        homeTeamScore={homeTeamScore}
                    />
                </StyledGameScore>
            </StyledScheduleCard>
        )

    };
}

export default ScheduleCard;

