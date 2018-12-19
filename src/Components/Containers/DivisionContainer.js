import React from 'react';

import '../Cards/card.css';

const DivisionContainer = (props) => {

    return(
        <section className="division slide-in">
            <h2>{props.divisionTitle}</h2>
            {props.children}
        </section>
    )
    
}

export default DivisionContainer;