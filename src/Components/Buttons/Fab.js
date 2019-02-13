import React from 'react';
import styled from 'styled-components';
import '../../Utilities/league-colors.css';

//#region STYLES
const StyledFab = styled.button`
  border-radius: 8px;
  box-shadow: 2px 2px 6px rgba(0,0,0,.4);
  transition: .5s ease-in-out;
  border: 2px solid rgba(255,255,255,.5);
  display: flex;
  margin:auto;
  margin-right:0;
  height: 100%;
    &:hover {
      cursor: pointer;
      transform: scale(1.25);
      box-shadow: 2px 2px 9px rgba(0,0,0,.65);
    }
    &:focus {
      outline: none;
    }
`;

const StyledFabH2 = styled.h2`
    margin: auto;
    padding: 0px 10px;
    color: currentColor;
`;
//#endregion STYLES


const Fab = (props) => {

  const {activeTeamID, onClick, isActive} = props;

  return (
    <StyledFab className={`team${ activeTeamID }`} onClick={onClick} visibile={isActive}>   
        <StyledFabH2>{ props.fabText }</StyledFabH2>
    </StyledFab>
  );
};

export default Fab;
