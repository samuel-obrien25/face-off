import React, {useState, useEffect} from 'react';
import LoadingCircle from '../Loading/LoadingCircle';
import styled from 'styled-components';
import '../../Styles/league-colors.css';
import Logo from '../Logo/Logo';


//#region Styles
const StyledHeader = styled.header`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    background-color: ${props => props.headerStyle === "homeHeader" ? "#222" : ""};
    width: 100%;
    height: auto;
    max-height: 25vh;
    padding: 20px;
    color: white;
    position: fixed;
    top:0;
    left:0;
    transition: .25s ease-in-out;
    z-index: 8000;
`;
    
const TeamNameWrapper = styled.div`

@media screen and (min-width: 600px) {
    width: 75%;
}
    width: 60%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding-left: 60px;

    h1, h2, h3{
        margin: auto;
        margin-left: 0;
        padding-left: 0px;
    }

    h1 {
        margin-bottom: 0px;
        font-size: ${props => props.activeTeamID ? '24px' : '42px'};
    }

    h2, h3 {
        font-size: ${props => props.activeTeamID ? '42px' : '24px'};
        margin-top: 10px;
    }
    
`;

//#endregion Styles
const Header = (props) => {

    const [isLoading, setIsLoading] = useState(true);
    const { activeTeamID, children, headerH1, headerH2, headerStyle } = props;
    const logo = activeTeamID ? <Logo teamValue={activeTeamID}/> : null;

    useEffect(() => {
        setIsLoading(false);
    }, []);

    if(isLoading){
        return (
            <StyledHeader headerStyle={headerStyle} className={`team${activeTeamID}`}>
                <LoadingCircle />
            </StyledHeader>
        )
    } else {
        return (
            <StyledHeader headerStyle={headerStyle} className={`team${activeTeamID}`}>
                {logo}
                <TeamNameWrapper>
                    <h1>{headerH1}</h1>
                    <h2>{headerH2}</h2>
                    {children}
                </TeamNameWrapper>
            </StyledHeader>
        );
    }
}
export default Header;
    