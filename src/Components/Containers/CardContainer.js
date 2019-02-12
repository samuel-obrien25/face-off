import React from 'react';

import '../Cards/card.css';

const CardContainer = (props) => {
    window.scrollTo(0,0);

    return(
        <div id={props.containerType} className="card-container slide-in">
            {props.children}
        </div>
    )

}

export default CardContainer;