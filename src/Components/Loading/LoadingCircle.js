import React from 'react';
import styled, { keyframes } from 'styled-components';

//#region Styles
const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`

const StyledLoadingCircle = styled.div`
    .loading-circle{
        width: 2vw;
        height: 2vw;
        border-radius: 50%;
        border: 1vw solid #999;
        border-top-color: #444;
        animation: 2s ${spin} infinite linear;
        margin:auto;
    }`
//#endregion Styles

const LoadingCircle = () => {
    return(
        <StyledLoadingCircle/>
    )
}
    
export default LoadingCircle;