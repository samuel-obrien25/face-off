import React from 'react';

import '../Cards/card.css';

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
        window.scrollTo(0, 0);
 
        return (
            <div onScroll={this.addCardScale} id={this.props.containerType} className="card-container">
                { this.props.children }
            </div>
        )

    }
}
export default CardContainer;