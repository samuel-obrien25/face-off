import React from 'react';
import styled from 'styled-components';

const StyledDivisionContainer = styled.section`
    width:100%;
    height: 100%;
    overflow: auto;
    padding-bottom: 25px;
    position: relative;

    @media (min-width: 600px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

`;

const StyledDivisionName = styled.h2`
    text-align: left;
    width: 100%;
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