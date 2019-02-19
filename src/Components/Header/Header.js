import React from 'react';
import LoadingCircle from '../Loading/LoadingCircle';
import styled from 'styled-components';
import '../../Utilities/league-colors.css';


//#region Styles
const StyledHeader = styled.header`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    background-color: #222;
    width: auto;
    height: 150px;
    margin-bottom: 25px;
    padding: 20px;
    color: white;
    position: relative;
    text-align:center;
    transition: .25s ease-in-out;

    h1 {
        margin: auto;
        margin-bottom: 0px;
        font-size: ${props => props.activeTeamID ? '24px' : '42px'};
    }

    h2 {
        font-size: ${props => props.activeTeamID ? '42px' : '24px'};
        margin-top: 10px;
    }

    h3 {
        margin: auto;
    }
`
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
        
        const { activeTeamID, children, headerH1, headerH2 } = this.props;
        if(this.state.isLoading) {
            return (
                <StyledHeader className={`team${activeTeamID}`}>
                    <LoadingCircle />
                </StyledHeader>
            )
        } else{
            return (
            <StyledHeader className={`team${activeTeamID}`}>
                <h1>{headerH1}</h1>
                <h2>{headerH2}</h2>
                    {children}
            </StyledHeader>
            );
        }
    }
}
export default Header;
    