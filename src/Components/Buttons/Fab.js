import React from 'react';
import styled, {keyframes} from 'styled-components';
import '../../Utilities/league-colors.css';

//#region STYLES
const StyledFab = styled.button`
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 2px 2px 6px rgba(0,0,0,.4);
  transition: .5s ease-in-out;
  border: 2px solid rgba(255,255,255,.5);
  position: fixed;
  bottom: 15px;
  right: 15px;
  height: 75px;
  width: 75px;
    &:focus {
      outline: none;
    }
`;
const StyledHamburger = styled.div`
    width: 30px;
    height: 2px;
    margin: auto;
    margin-top:-11px;
    background-color: currentColor;
    transition: .25s ease-in-out;

    ::before, ::after{
      content:'';
      width: 30px;
      height: 2px;
      background-color: inherit;
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      transition: .2s ease-in-out;
    }

    ::before{
      top: 15px;
    }

    ::after{
      bottom: 35px;
    }
`;

const StyledActiveHamburger = styled(StyledHamburger)`
  transform: rotate(90deg);

  ::after{
    display: none;
  }
`;
const StyledFabH2 = styled.h2`
    margin: auto;
    margin-right: ${props => props.isFabActive ? "75px" : "auto"};
    padding: 0px 10px;
    color: currentColor;
    position: absolute;
    width: ${props => props.isFabActive ? "200px" : "auto"};
    right: 0;
    left: 0;
    bottom: ${props => props.isFabActive ? "25px" : "10px"};
    text-align: ${props => props.isFabActive ? "right" : "center"};
`;

const ActiveFabWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,.4);
    z-index: 9999;
`;

const ActiveFabOne = styled(StyledFab)`

`;

const FabSlideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(125px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`

const ActiveFabTwo = styled(StyledFab)`
    animation: ${FabSlideUp} .45s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    bottom: 115px;
`

const ActiveFabThree = styled(StyledFab)`
    animation: ${FabSlideUp} .6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    bottom: 215px;
`
//#endregion STYLES


class Fab extends React.Component{

  constructor(props) {
    super(props);
      this.state = {
        isFabActive: false,
        isFabHidden: true,
        CurrentFabText: "Menu",
      };
    }

  handleMenuClick = () => {
    this.setState({
      isFabActive: !this.state.isFabActive,
      CurrentFabText: this.state.CurrentFabText === "Close" ? "Menu" : "Close",
    })
  }

  Handle

  scrollToNextGame = () => {
      document.querySelector('[data-pastfuture="future"]').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      this.handleMenuClick();
  }

  render(){
    const { activeTeamID } = this.props,
          { isFabActive, isFabHidden, CurrentFabText } = this.state;

          if(isFabActive) {
            return (
              <ActiveFabWrapper>
                <ActiveFabThree className={`team${activeTeamID}`} onClick={this.scrollToNextGame}>
                  <StyledFabH2 isFabActive={isFabActive}>Next Game</StyledFabH2>
                </ActiveFabThree>

                <ActiveFabTwo className={`team${activeTeamID}`} onClick={this.props.handleClick}>
                  <StyledFabH2 isFabActive={isFabActive}>Teams</StyledFabH2>
                </ActiveFabTwo>

                <ActiveFabOne className={`team${activeTeamID}`} isActive="true" onClick={this.handleMenuClick}>
                  <StyledFabH2 isFabActive={isFabActive}>Close</StyledFabH2>
                </ActiveFabOne>
              </ActiveFabWrapper>
            );
          }

    return (
      <div>
        <StyledFab className={`team${activeTeamID}`} onClick={this.handleMenuClick} isFabHidden={isFabHidden}>
          <StyledHamburger></StyledHamburger>
          <StyledFabH2>{CurrentFabText}</StyledFabH2>
        </StyledFab>
      </div>
    );

  }
};

export default Fab;
