import React from 'react';
import Header from '../Header/Header';
<<<<<<< HEAD

const Home = () => {
    return(
        <div>
        <Header />
        <div className="wrapper wrapper__home">
            <h2 className="page__title page__title_home">Pick a team</h2>
=======
import ApiCall from '../../Components/API/ApiCall';
import TeamList from '../../Components/Cards/TeamList/TeamList';
import Fab from '../../Components/Buttons/Fab';
import MenuCards from '../../Containers/Header/Menu/MenuCards';

let baseURL = 'https://api.mysportsfeeds.com/v1.2/pull/nhl/2018-2019-regular/full_game_schedule.json?team=',
    cardContainerTeamList = document.getElementById("card_container_team_list"),
    scheduleCards = document.getElementById("card_container_schedule_list");


class Home extends React.Component{
    
    constructor(props){
        super(props);
        this.getTeamValue = this.getTeamValue.bind(this);
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.resetAPICall = this.resetAPICall.bind(this);
        this.state = {
            teamID: '',
            queryRecipe: '',
            isFabActive: false,
            isMenuCardsActive: false
        };
    }

    

    getTeamValue(e) {            
        
            let currentTeam = e.target.tagName === "BUTTON" ? e.target.value : e.target.parentElement.value; //Handles clicks to H2/H3's.

            const cardContainerTeamList = document.getElementById("card_container_team_list"),
            cardContainerMenuChooser = document.getElementById("card_container_menu_chooser"),
            cardContainerScheduleList = document.getElementById("card_container_schedule_list");

            cardContainerTeamList.classList.remove("fade-in");
            cardContainerTeamList.classList.add("fade-out");

            if(cardContainerMenuChooser){
                cardContainerScheduleList.classList.remove("fade-out");
                cardContainerScheduleList.classList.add("fade-in");
            }


        this.setState(() => {
           return {
                isMenuCardsActive: true,
                teamID: currentTeam
           };
        }, () => {
            console.log(this.state.queryRecipe);
            console.log(currentTeam);
        });

};



    resetAPICall() {
        this.setState(()=>{
            return{
                queryRecipe: baseURL,
                isFabActive: false
            };
        }, () => {
            console.log(this.state.queryRecipe);
            scheduleCards.classList.remove("fade-in");
            scheduleCards.classList.add("fade-out");
            cardContainerTeamList.classList.remove("fade-out");
            cardContainerTeamList.classList.add("fade-in");
        });
    };

    handleMenuClick(e) {
            console.log(e.target);
    }

    render(){
        return (
            <div>
            <Header />
            <div className="wrapper wrapper__home">
                <h2 className="page__title page__title_schedule">Choose Team</h2>
            <br/>

            <TeamList 
             handleClick = {this.getTeamValue}
            />

        <ApiCall 
            url={this.state.queryRecipe}
            ApiLink="gameScheduleQuery"
        />

        <MenuCards 
            visible={this.state.isMenuCardsActive}
            onClick={this.handleMenuClick}
            />

        <Fab visible={this.state.isFabActive}
             onClick={this.resetAPICall}
        />

>>>>>>> 01dce747b2cfd2fae35ad5a24098c8dce6e6d439
        </div>
        </div>
    )
}
<<<<<<< HEAD
=======
}
>>>>>>> 01dce747b2cfd2fae35ad5a24098c8dce6e6d439

export default Home;