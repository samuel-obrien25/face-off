import React from 'react';
import styled from 'styled-components';

const StyledCardContainer = styled.div`
        position: relative;
        width: 85%;
        margin: 15px auto;
        height: inherit;
        display: inline-block;
        text-align: center;
        scroll-behavior: smooth;

        @media (min-width: 600px) {
        display: inline-block;
        max-width: 1100px;
        }
`;

const StyledScheduleCardContainer = styled(StyledCardContainer)`
        overflow: auto;
        overflow-y: hidden;
        white-space: nowrap;
        display: flex;
        position: relative;
        height: auto;
        padding: 20px 0px;
        width: 95vw;
        left: 0;
        margin-top: 200px;
        scroll-snap-type: x proximity;
        @media (min-width: 600px) {
            display: flex;
            flex-direction: row;
            max-width: 98vw;
        }
`;

class CardContainer extends React.Component {

    render(){
        const { containerType } = this.props;
        window.scrollTo(0, 0);
 
        if (containerType === "division-container") {
            return (
                <StyledCardContainer id={containerType}>
                    {this.props.children}
                </StyledCardContainer>
            )
        }

        if (containerType === "card_container_schedule_list") {
            return (
                <StyledScheduleCardContainer onScroll={this.addCardScale} id={containerType}>
                    {this.props.children}
                </StyledScheduleCardContainer>
            )
        }

    }
}
export default CardContainer;