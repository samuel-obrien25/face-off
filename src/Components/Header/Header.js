import React, {useState, useEffect} from 'react';
import LoadingCircle from '../Loading/LoadingCircle';
import styled from 'styled-components';
import '../../Styles/league-colors.css';


//#region Styles
const StyledHeader = styled.header`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    background-color: ${props => props.headerStyle === "homeHeader" ? "#222" : ""};
    width: 100%;
    height: 35px;
    padding: 20px 0;
    color: white;
    position: fixed;
    top:0;
    left:0;
    text-align:center;
    transition: .25s ease-in-out;
    z-index: 8000;

    & h1, h2, h3{
        margin: auto;
        padding-left: 0px;
    }

    h1 {
        margin-left: 25px;
        margin-bottom: 0px;
        font-size: ${props => props.activeTeamID ? '24px' : '42px'};
    }

    h2 {
        font-size: ${props => props.activeTeamID ? '42px' : '24px'};
        margin-top: 10px;
    }
`;

//#endregion Styles
const Header = (props) => {

    const [isLoading, setIsLoading] = useState(true);
    const { activeTeamID, children, headerH1, headerH2, headerStyle } = props;

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
                <h1>{headerH1}</h1>
                <h2>{headerH2}</h2>
                    {children}
            </StyledHeader>
        );
    }

}

export default Header;
    