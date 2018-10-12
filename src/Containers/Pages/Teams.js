import React from 'react';
import Header from '../Header/Header';
import TeamList from '../../Components/Cards/TeamList/TeamList';

class Teams extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentTeam: 'all'
        }
    }

    render() {
        return (

        <div>
            <Header 
                activeLink="teams"
            />
                <div className="wrapper wrapper__teams">
                    <h2 className="page__title page__title_teams">Pick a team</h2>

                    <TeamList />

                </div>
        </div>
        )
    }
}

export default Teams;