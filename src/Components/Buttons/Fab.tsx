import React, {useState} from 'react';
import styled, {keyframes} from 'styled-components';
import '../../Styles/league-colors.css';

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

interface FabProps {
  activeTeamID: String,
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
  isActive: String,
}

const Fab: React.FC<FabProps> = (props) => {

  const [isActive, setIsActive] = useState<boolean>(false);
  
  const { activeTeamID, handleClick } = props;

  function scrollToNextGame() {
    
    /* Those exlamation marks are non-null assertion operators. Need to read more about them.
    * https://www.logicbig.com/tutorials/misc/typescript/non-null-assertion-operator.html
    */

    const lastGame = document.getElementById('card_container_schedule_list')!.lastElementChild;
    const nextGame = document.querySelector('[data-pastfuture="future"]')!;

    if(!document.querySelector('[data-pastfuture="future"]')){
      if(lastGame){
        lastGame.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
      setIsActive(!isActive);
      return;
    } else {
      nextGame.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setIsActive(!isActive);
    }

  }

    if(isActive) {
      return (
        <ActiveFabWrapper>
          <ActiveFabThree className={`team${activeTeamID}`} onClick={scrollToNextGame}>
            <StyledFabH2>Next Game</StyledFabH2>
          </ActiveFabThree>

          <ActiveFabTwo className={`team${activeTeamID}`} onClick={handleClick}>
            <StyledFabH2>Teams</StyledFabH2>
          </ActiveFabTwo>

          <ActiveFabOne className={`team${activeTeamID}`} onClick={() => setIsActive(!isActive)}>
            <StyledFabH2>Close</StyledFabH2>
          </ActiveFabOne>
        </ActiveFabWrapper>
      );
    }

    return (
      <>
        <StyledFab className={`team${activeTeamID}`} onClick={() => setIsActive(!isActive)}>
          <StyledHamburger></StyledHamburger>
        </StyledFab>
      </>
    );
}

export default Fab;
