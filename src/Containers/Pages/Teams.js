import React from 'react';
import Header from '../Header/Header';
import TeamList from '../../Components/Cards/TeamList/TeamList';

class Teams extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            currentTeam: 'all'
        }
    }
    handleClick(e) {
        console.log(e.target.props.value);
    }

    render() {
        return (

        <div>
            <Header />
                <div className="wrapper wrapper__teams">
                    <h2 className="page__title page__title_teams">Pick a team</h2>

                    <TeamList 
                        handleClick = {this.handleClick}
                    />

                </div>
        </div>
        )
    }
}

export default Teams;