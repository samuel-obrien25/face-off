import React, {useState, useEffect} from 'react';
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
    background-color: ${(props: ScheduleCardProps) => props.isPast === "past" ? "lightgray" : "#fff"};
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    scroll-behavior: smooth;
    scroll-snap-align: center;
    opacity: ${(props: ScheduleCardProps) => props.isPast === "past" ? ".6" : "1"};

    @media (min-width: 600px) {
        width: 350px;
        height: 450px;
        margin: auto 20px;

            :hover{
                box-shadow: 0 2px 6px rgba(0,0,0,0.2), 0 2px 4px rgba(0,0,0,0.4);
                transform: translateY(-5px);
                opacity: .85;
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
interface ScheduleCardProps {
    activeTeamID: string,
    awayTeamID: string,
    awayTeamScore: string,
    awayTeamName: string,
    awayTeamCity: string,
    gameDateTime: Date,
    homeTeamID: number,
    homeTeamName: string,
    homeTeamCity: string,
    homeTeamScore: string,
    teamCity?: string,
    teamName: string,
    isPast?: string
    isHomeTeam?: string,
    onClick: () => void,
    month: string,
    cardType: string
}

const ScheduleCard: React.FC<ScheduleCardProps> = (props) => {


    const [isGamePast, setIsGamePast] = useState(true);
    const { activeTeamID, awayTeamID, awayTeamScore, gameDateTime, homeTeamID, homeTeamScore, teamCity, teamName} = props;

    const pastOrFuture = isGamePast ? "past" : "future";

    let currentGameDate = new Date(gameDateTime),
        month = currentGameDate.getMonth(),
        didHomeWin;

    if (homeTeamScore > awayTeamScore){
        didHomeWin = "homeWin";
    } else {
        didHomeWin = "homeLose"; 
    }

    function dateCheck() {
        let currentDate: Date = new Date(),
            currentGameDate = new Date(gameDateTime);

        if (currentDate < currentGameDate) {
            setIsGamePast(true);
        }

    }

    useEffect(() => {
        dateCheck();
    }, []);


    return (

        <StyledScheduleCard data-month={month} data-pastfuture={pastOrFuture} cardType={"scheduleCard"} isPast={isGamePast ? 'past' : 'future'} {...props}>
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
                    homeTeamID={homeTeamID}
                    homeTeamScore={homeTeamScore}
                />
                <p>At</p>
                <Team
                    isHomeTeam={true}
                    didHomeWin={didHomeWin}
                    homeTeamID={homeTeamID}
                    teamName={teamName}
                    teamCity={teamCity}
                    homeTeamScore={homeTeamScore}
                    awayTeamID={awayTeamID}
                    awayTeamScore={awayTeamScore}
                />
            </StyledGameScore>
        </StyledScheduleCard>
    )

}

export default ScheduleCard;