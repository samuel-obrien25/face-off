import React, { forwardRef } from 'react';

import '../Cards/card.css';

class MonthContainer extends React.Component {

    constructor(props) {
        super(props);
        this.updateH2 = this.updateH2.bind(this);
        this.state = {
            currentMonth: 'October'
        }
    }

    updateH2 = () => {
        const SCHEDULE_LIST = document.getElementById("card_container_schedule_list"),
               MONTHS = {
                January:  document.querySelectorAll("[data-month='0']")[0].offsetLeft,
                February: document.querySelectorAll("[data-month='1']")[0].offsetLeft,
                March:    document.querySelectorAll("[data-month='2']")[0].offsetLeft,
                April:    document.querySelectorAll("[data-month='3']")[0].offsetLeft,
                October:  document.querySelectorAll("[data-month='9']")[0].offsetLeft,
                November: document.querySelectorAll("[data-month='10']")[0].offsetLeft,
                December: document.querySelectorAll("[data-month='11']")[0].offsetLeft
        };

        const setMonthState = (month) => {
                this.setState({
                    currentMonth: month,
                });
        };
        
            SCHEDULE_LIST.addEventListener("scroll", () => {
                let scheduleListCheckPoint = SCHEDULE_LIST.scrollLeft + 300;                

            //If the distance between the first card of month X to the left side of card_container_schedule_list is 
            //less than or equal to the distance the card_container_schedule_list has been scrolled (plus the size of one card)
            //set state of current month to month X.

            //Settimeout so function gets debounced.
            switch(true){
                case scheduleListCheckPoint > 0 && scheduleListCheckPoint < MONTHS.November:
                    setMonthState("October");
                    break;
                case scheduleListCheckPoint > MONTHS.October && scheduleListCheckPoint < MONTHS.December:
                    setMonthState("November");
                    break;
                case scheduleListCheckPoint > MONTHS.November && scheduleListCheckPoint < MONTHS.January:
                    setMonthState("December");
                    break;
                case scheduleListCheckPoint > MONTHS.December && scheduleListCheckPoint < MONTHS.February:
                    setMonthState("January");
                    break;
                case scheduleListCheckPoint > MONTHS.January && scheduleListCheckPoint < MONTHS.March:
                    setMonthState("February");
                    break;
                case scheduleListCheckPoint > MONTHS.February && scheduleListCheckPoint < MONTHS.April:
                    setMonthState("March");
                    break;
                case scheduleListCheckPoint > MONTHS.March:
                    setMonthState("April");
                    break;
            }
        });
    }

    componentDidMount() {
        //I need to figure out why #card_container_schedule_list returns null if I don't use setTimeout. 
        //Until then, setTimeout works around that
        setTimeout(this.updateH2, 1000);
    };

    componentDidUpdate(prevProps, prevState){
        if(this.state.currentMonth !== prevState.currentMonth){
            document.getElementById("divisionName").animate([
                {
                    opacity: 0,
                    transform: 'translateY(20px)'
                },
                {
                    opacity: 1,
                    transform: 'translateY(0px)'
                }
            ], {
                duration: 300,
                fill: "forwards",
                easing: "ease-in-out"
            })

        }
    }
    render() {

        return (
            <div className="month-wrapper">
                <h2 id="divisionName" className="division-name">{this.state.currentMonth}</h2>
            </div>
        )

    }

}

export default MonthContainer;