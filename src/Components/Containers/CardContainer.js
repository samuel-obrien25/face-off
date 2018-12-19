import React from 'react';

import '../Cards/card.css';

const CardContainer = (props) => {

    return(
        <div id={props.containerType} className= "card-container slide-in">
            {props.children}
        </div>
    )

}

export default CardContainer;