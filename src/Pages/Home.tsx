import React, {useState} from 'react';
import Header from '../Components/Header/Header';
import ApiCall from '../API/ApiCall';
import GetTeamStats from '../API/GetTeamStats';
import TeamList from '../Components/Cards/TeamCard/TeamList';
import Fab from '../Components/Buttons/Fab';
import MonthContainer from '../Components/Containers/MonthContainer';
import styled from 'styled-components';
import '../Styles/league-colors.css';

//#region STYLES
const StyledWrapper = styled.main`
        position: relative;
        margin-top: 175px;
`

//#endregion STYLES

interface HomeProps {
    currentTeamRecord: string,
}

const Home: React.FC<HomeProps> = (props) => {

    const [activeTeamID, setActiveTeamID] = useState('');
    const [headerH1, setHeaderH1] = useState('Face Off');
    const [headerH2, setHeaderH2] = useState('');
    const [headerH3, setHeaderH3] = useState('');
    const [isFabActive, setIsFabActive] = useState(false);
    const [isScheduleListActive, setIsScheduleListActive] = useState(false);
    const [isTeamListActive, setIsTeamListActive] = useState(true);
    const [scheduleQueryRecipe, setScheduleQueryRecipe] = useState('');
    const [teamStatsQueryRecipe, setTeamStatsQueryRecipe] = useState('');

    const { currentTeamRecord } = props;


   function handleClick(e: Event) {
        //Properly handles clicks to nested elements. Deep down in my heart I know this isn't right.
        let targetTeam = (e.target as HTMLElement).closest(".card") as HTMLElement,
            targetTeamValue = targetTeam.dataset.teamid as any,

            //Gets chosen card, then derives teamName and teamCity from its inner HTML
            currentTeamName = (targetTeam.firstChild as HTMLElement).innerHTML,
            currentTeamCityEl = (targetTeam.firstChild as HTMLElement),
            currentTeamCity = currentTeamCityEl.nextElementSibling!.innerHTML,
            scheduleBaseURL = 'https://api.mysportsfeeds.com/v2.0/pull/nhl/2019-2020-regular/games.json?team=',
            teamStatsBaseURL = 'https://api.mysportsfeeds.com/v2.0/pull/nhl/2019-2020-regular/team_stats_totals.json?team=',
            divisionContainer = document.getElementById("division-container");
        //Transitions TeamCards Out
        divisionContainer!.classList.remove("fade-in");
        divisionContainer!.classList.add("fade-out");

        if (!currentTeamName) { return }

        setActiveTeamID(targetTeamValue);
        setHeaderH1(currentTeamName);
        setHeaderH2(currentTeamCity);
        setHeaderH3(currentTeamRecord);
        setIsFabActive(true);
        setIsScheduleListActive(true);
        setIsTeamListActive(false);
        setScheduleQueryRecipe(scheduleBaseURL + targetTeamValue);
        setTeamStatsQueryRecipe(teamStatsBaseURL + targetTeamValue);
    };

    function resetAPICall() {
        let scheduleQueryBaseURL = 'https://api.mysportsfeeds.com/v2.1/pull/nhl/2019-2020-regular/games.json?team=',
            teamStatsBaseURL = 'https://api.mysportsfeeds.com/v2.1/pull/nhl/2019-2020-regular/team_stats_totals.json?team='

            setActiveTeamID('');
            setHeaderH1('Face Off');
            setHeaderH2('');
            setHeaderH3('');
            setIsFabActive(false);
            setIsScheduleListActive(false);
            setIsTeamListActive(true);
            setScheduleQueryRecipe(scheduleQueryBaseURL);
            setTeamStatsQueryRecipe(teamStatsBaseURL);

            window.scrollTo(0,0);
    };


        if (isScheduleListActive) {
            //Good to have reference to the API link...
            console.log("The current TeamStatsQueryRecipe is " + teamStatsQueryRecipe);
            console.log("The current scheduleQueryRecipe is " + scheduleQueryRecipe);

            return (
                <>
                    <Header headerStyle="TeamHeader" activeTeamID={activeTeamID} headerH1={headerH1} headerH2={headerH2}>
                        <GetTeamStats teamStatsLocation="header" ApiLink="teamStatsQuery" url={teamStatsQueryRecipe} />
                    </Header>

                    <div className="wrapper wrapper__home">
                        <h2 className="page__title page__title_schedule">Choose a Game</h2>
                        <MonthContainer />
                        <ApiCall activeTeamID={activeTeamID} ApiLink="gameScheduleQuery" url={scheduleQueryRecipe}/>
                        <Fab activeTeamID={activeTeamID} visible={isFabActive} isActive={isFabActive} handleClick={resetAPICall} />
                    </div>
                </>

            )
        }

        if (isTeamListActive) {

            return (
                <>
                    <Header headerStyle="homeHeader" headerH1={headerH1} headerH2={headerH2} />
                    <StyledWrapper>
                        <TeamList handleClick={handleClick} {...props} />
                    </StyledWrapper>
                </>
            )
        }

        else return null
}
export default Home;