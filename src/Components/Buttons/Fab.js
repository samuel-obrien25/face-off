import React from 'react';
import styled, {keyframes} from 'styled-components';
import '../../Utilities/league-colors.css';

//#region STYLES
const StyledFab = styled.button`
  border-radius: 50%;
  border: none;
  box-shadow: 2px 2px 6px rgba(0,0,0,.4);
  transition: .5s ease-in-out;
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
      top: 35%;
    }

    ::after{
      bottom: 35%;
    }
`;

const StyledFabH2 = styled.h2`
    margin: auto;
    color: currentColor;
    position: relative;
    text-align: center;
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
        isActive: false
      };
    }

  handleMenuClick = () => {
    this.setState({
      isActive: !this.state.isActive,
    })
  }

  scrollToNextGame = () => {
    if(!document.querySelector('[data-pastfuture="future"]')){
      document.getElementById('card_container_schedule_list').lastElementChild.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      this.handleMenuClick();
      return;
    } else {
      document.querySelector('[data-pastfuture="future"]').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      this.handleMenuClick();

    }
  }

  render(){
    const { activeTeamID } = this.props,
          { isActive } = this.state;

          if(isActive) {
            return (
              <ActiveFabWrapper>
                <ActiveFabThree className={`team${activeTeamID}`} onClick={this.scrollToNextGame}>
                  <StyledFabH2>Next Game</StyledFabH2>
                </ActiveFabThree>

                <ActiveFabTwo className={`team${activeTeamID}`} onClick={this.props.handleClick}>
                  <StyledFabH2>Teams</StyledFabH2>
                </ActiveFabTwo>

                <ActiveFabOne className={`team${activeTeamID}`} isActive="true" onClick={this.handleMenuClick}>
                  <StyledFabH2>Close</StyledFabH2>
                </ActiveFabOne>
              </ActiveFabWrapper>
            );
          }

    return (
      <div>
        <StyledFab className={`team${activeTeamID}`} onClick={this.handleMenuClick}>
          <StyledHamburger></StyledHamburger>
        </StyledFab>
      </div>
    );

  }
};

export default Fab;
