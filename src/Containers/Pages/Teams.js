import React from 'react';
import Header from '../Header/Header';
import Card from '../../Components/Cards/Card';

class Teams extends React.Component{
    
    render() {
        return (
        <div>
            <Header />
                <div className="wrapper wrapper__teams">
                    <h2 className="page__title page__title_teams">Pick a team</h2>
                    
                    <Card
                        cardType="teamCard"
                        value=""
                    />

                </div>
        </div>
        )
    }
}

export default Teams;