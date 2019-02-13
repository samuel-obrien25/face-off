import React from 'react';

import '../Cards/card.css';

const DivisionContainer = (props) => {
    window.scrollTo(0,0);
    
    return(
        <section className="division">
            <h2 className="division-name">{props.divisionTitle}</h2>
            {props.children}
        </section>
    )
    
}

export default DivisionContainer;