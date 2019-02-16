import React from 'react';
import styled from 'styled-components';

const StyledDivisionContainer = styled.section`
    width:100%;
    height: 100%;
    overflow: auto;
    padding-bottom: 25px;
    position: relative;
`;

const StyledDivisionName = styled.h2`
    text-align: left;
`

const DivisionContainer = (props) => {
    window.scrollTo(0,0);
    
    return(
        <StyledDivisionContainer>
            <StyledDivisionName>{ props.divisionTitle }</StyledDivisionName>
            {props.children}
        </StyledDivisionContainer>
    )
    
}

export default DivisionContainer;