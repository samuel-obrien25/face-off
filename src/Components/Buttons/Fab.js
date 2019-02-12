import React from 'react';
import styled from 'styled-components';
//import '../Buttons/Buttons.css';

const StyledFab = styled.button`
  border-radius: 8px;
  background-color: #fff;
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
const Fab = (props) => {

  const {fabClass, onClick, isActive} = props;

  return (
    <StyledFab onClick={onClick} visibile={isActive}>   
        <h2>{props.fabText}</h2>
    </StyledFab>
  );
};

export default Fab;
