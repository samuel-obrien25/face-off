import React, { Children } from 'react';
import styled from 'styled-components';

//#region STYLES
const StyledLogoContainer = styled.div<LogoProps>`
    border-radius: 50%;
    width: 80px;
    height: 100%;
    position: relative;
    margin: auto;
    display: -ms-flexbox;
    display: flex;
    margin-left: 0;
    position: ${ (props) => props.cardType === "teamCard" ? "absolute" : "relative"};
    left: ${ (props) => props.cardType === "teamCard" ? "20px" : "0px"};

    img{
        margin: auto;
        width: 100%;
        position: relative;
        height: auto;
    }
    
    @media screen and (min-width:600px){
        position: relative;
        height: auto;
        left: auto;
        margin: auto;
        width: 125px;
    }
`;
//#endregion STYLES

interface LogoProps {
    cardType?: string,
    teamName: string,
    teamValue: string,
}

const Logo: React.FC<LogoProps> = (props) => {

    const { cardType, teamName, teamValue } = props;
    let currentLogo;

    //Huge switch statement that determines the logo based on team value. Also added some logic to check for card type.
    //If cardType===teamCard, some teams go to *light* version of logo.
    switch(teamValue) {
        case "1":
            if(cardType === "teamCard"){
                currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-14-light.svg";
                break;
            } else {
                currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-14-dark.svg";
                break;
            }
        case "2":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-52-dark.svg";
            break;
        case "3":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-12-dark.svg" ;
            break;
        case "4":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-13-dark.svg" ;
            break;
        case "5":
            if (cardType === "teamCard") {
                currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-15-light.svg";
                break;
            } else {
                currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-15-dark.svg";
                break;
            }
        case "6":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-4-dark.svg" ;
            break;
        case "7":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-1-dark.svg" ;
            break;
        case "8":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-2-dark.svg" ;
            break;
        case "9":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-3-dark.svg" ;
            break;
        case "10":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-5-dark.svg" ;
            break;
        case "11":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-6-dark.svg" ;
            break;
        case "12":
            if (cardType === "teamCard") {
                currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-10-light.svg";
                break;
            } else {
                currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-10-dark.svg";
                break;
            }
        case "13":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-9-dark.svg" ;
            break;
        case "14":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-8-dark.svg" ;
            break;
        case "15":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-7-dark.svg" ;
            break;
        case "16":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-17-dark.svg" ;
            break;
        case "17":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-19-dark.svg" ;
            break;        
        case "18":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-18-dark.svg" ;
            break;       
        case "19":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-29-dark.svg" ;
            break;
        case "20":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-16-dark.svg" ;
            break;
        case "21":
            if (cardType === "teamCard") {
                currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-23-light.svg";
                break;
            } else {
                currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-23-dark.svg" ;
                break;
            }
        case "22":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-21-dark.svg" ;
            break;        
        case "23":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-20-dark.svg" ;
            break;        
        case "24":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-22-dark.svg" ;
            break;        
        case "25":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-30-dark.svg" ;
            break;        
        case "26":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-28-dark.svg" ;
            break;        
        case "27":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-25-dark.svg" ;
            break;        
        case "28":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-26-dark.svg" ;
            break;        
        case "29":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-24-dark.svg" ;
            break;        
        case "30":
            currentLogo = "https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-53-dark.svg" ;
            break;        
        case "142":
            currentLogo = "https://www-league.nhlstatic.com/images/logos/teams-current-circle/54.svg"
            break;
        default:
            currentLogo = 'https://www-league.nhlstatic.com/images/logos/league-light/133.svg';
            break;        
    }

    return(
        <StyledLogoContainer cardType = {cardType} teamName = {teamName} teamValue = {teamValue} >
            <img src = {currentLogo}
                 alt = {`${teamName} logo`}
            />
        </StyledLogoContainer>
    )
}

export default Logo