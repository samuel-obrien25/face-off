import React from 'react';
import LoadingCircle from '../Loading/LoadingCircle';
import styled from 'styled-components';
import '../../Utilities/league-colors.css';


//#region Styles
const StyledHeader = styled.header`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    background-color: ${props => props.headerStyle === "homeHeader" ? "#222" : ""};
    width: 100%;
    height: 150px;
    padding: 20px 0;
    color: white;
    position: fixed;
    top:0;
    left:0;
    text-align:center;
    transition: .25s ease-in-out;
    z-index:8000;

    & h1, h2, h3{
        width: 80%;
        margin: auto;
        padding-left: 0px;
    }

    h1 {
        margin: auto;
        margin-bottom: 0px;
        font-size: ${props => props.activeTeamID ? '24px' : '42px'};
    }

    h2 {
        font-size: ${props => props.activeTeamID ? '42px' : '24px'};
        margin-top: 10px;
    }
`;

//#endregion Styles

class Header extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
        };
    }

    componentDidMount(){
        this.setState({isLoading: false});
    }
    
    render() {
        
        const { activeTeamID, children, headerH1, headerH2, headerStyle } = this.props;
        if(this.state.isLoading) {
            return (
                <StyledHeader headerStyle={headerStyle} className={`team${activeTeamID}`}>
                    <LoadingCircle />
                </StyledHeader>
            )
        } else{
            return (
            <StyledHeader headerStyle={headerStyle} className={`team${activeTeamID}`}>
                <h1>{headerH1}</h1>
                <h2>{headerH2}</h2>
                    {children}
            </StyledHeader>
            );
        }
    }
}
export default Header;
    