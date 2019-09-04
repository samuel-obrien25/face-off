import React from 'react';
import TeamCard from './TeamCard/TeamCard';
import ScheduleCard from './ScheduleCard/ScheduleCard';


interface CardProps {
    activeTeamID?: string,
    activeTeamName?: string,
    awayTeamCity?: string,
    awayTeamID?: number,
    awayTeamName?: string, 
    awayTeamScore?: string,
    cardType: string, 
    cityName?: string,
    gameID?: number,
    gameDateTime?: Date, 
    handleClick?: any,
    homeTeamCity?: string, 
    homeTeamID?: number, 
    homeTeamName?: string, 
    homeTeamScore?: string,
    isPast?: string,
    key?: string,
    onClick?: any,
    month?: string,
    teamName?: string,
    teamValue?: string
}

const Card: React.FC<CardProps> = (props) => {

    const { activeTeamID, awayTeamCity, awayTeamID, awayTeamName, awayTeamScore, cardType, cityName, gameDateTime, handleClick, homeTeamCity, homeTeamID, homeTeamName, homeTeamScore, isPast, onClick, month, teamName, teamValue } = props;
     
        //Team Cards
        if(cardType === "teamCard") {
            return (
                <TeamCard
                    cityName={cityName!}
                    teamName={teamName!}
                    onClick={onClick!}
                    teamValue={teamValue!}
                />
                );
            }
        //Schedule Cards
        if(cardType === "scheduleCard") {
            return(
                <ScheduleCard
                    gameDateTime={gameDateTime!}
                    awayTeamID={awayTeamID!}
                    awayTeamName={awayTeamName!}
                    awayTeamCity={awayTeamCity!}
                    awayTeamScore={awayTeamScore!}
                    homeTeamID={homeTeamID!}
                    homeTeamName={homeTeamName!}
                    homeTeamCity={homeTeamCity!}
                    homeTeamScore={homeTeamScore!}
                    onClick={handleClick!}
                    activeTeamID={activeTeamID!}
                    month={month!}
                    teamName={teamName!}
                    isPast={isPast}
                    cardType={'ScheduleCard'}
                />
            )
        }

        else return null
    }

export default Card;