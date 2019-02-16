import React from 'react';
import styled from 'styled-components';

const StyledCardContainer = styled.div`
        position: relative;
        top: 50px;
        width: 80%;
        margin: auto;
        height: inherit;
        display: inline-block;
        text-align: center;
        scroll-behavior: smooth;
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
        margin-top: -25px;
        padding-bottom: 100px;
        scroll-snap-type: x proximity;
`

class CardContainer extends React.Component {

    constructor(props){
        super(props);
    }

    addCardScale(){
        /*
        let cardsList = document.getElementsByClassName("schedule-card"),
            viewCenterPoint = window.outerWidth / 2,
            i = 0;

        for (i; i < cardsList.length; i++) {
            let cardScrollPoint = cardsList[i].offsetLeft,
                cardsListContainer = cardsList[i].parentElement.scrollLeft + 300,
                scaleValue = (((cardsListContainer - cardScrollPoint) / viewCenterPoint) * 1.2);

            cardsList[i].style.transform = "scale(" + scaleValue + ")";
        }
        */
    }

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