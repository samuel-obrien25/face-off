import React from 'react';
import Header from '../Header/Header';

const Home = () => {
    return(
        <div>
        <Header />
        <div className="wrapper wrapper__home">
            <h2 className="page__title page__title_home">Pick a team</h2>
        </div>
        </div>
    )
}

export default Home;