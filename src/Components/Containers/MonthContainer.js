import React from 'react';

import '../Cards/card.css';

class MonthContainer extends React.Component {

    constructor(props) {
        super(props);
        this.updateH2 = this.updateH2.bind(this);
        this.state = {
            currentMonth: 'October'
        }
    }
    updateH2(){
        document.getElementById("card_container_schedule_list").addEventListener("scroll", function(){
            let docCenter = document.body.offsetWidth / 2,
                  scheduleList = document.getElementById("card_container_schedule_list");
    
            console.log(scheduleList);
            if (document.querySelectorAll("[data-month='0']")[0].offsetLeft < scheduleList.scrollLeft - docCenter) {
                this.setState({
                    currentMonth: 'January'
                })
            }           
        });
    
    }


        /*
    function prependMonthSection() {
        let scheduleCardsList = document.getElementsByClassName("schedule-card"),

            january = document.createElement("H2"),
            february = document.createElement("H2"),
            march = document.createElement("H2"),
            april = document.createElement("H2"),
            october = document.createElement("H2"),
            november = document.createElement("H2"),
            december = document.createElement("H2");
            
            january.innerHTML = "January";
            february.innerHTML = "February";
            march.innerHTML = "March";
            april.innerHTML = "April";
            october.innerHTML = "October";
            november.innerHTML = "November";
            december.innerHTML = "December";

        let monthH2s = [january, february, march, april, october, november, december];

            for(let i = 0; i < monthH2s.length; i++){
                monthH2s[i].className = "month";
            }

        if(scheduleCardsList.length > 60){
            clearInterval(timer);

            document.querySelectorAll("[data-month='0']")[0].insertAdjacentElement('beforebegin', january);
            document.querySelectorAll("[data-month='1']")[0].insertAdjacentElement('beforebegin', february);
            document.querySelectorAll("[data-month='2']")[0].insertAdjacentElement('beforebegin', march);
            document.querySelectorAll("[data-month='3']")[0].insertAdjacentElement('beforebegin', april);
            document.querySelectorAll("[data-month='9']")[0].insertAdjacentElement('beforebegin', october);
            document.querySelectorAll("[data-month='10']")[0].insertAdjacentElement('beforebegin', november);
            document.querySelectorAll("[data-month='11']")[0].insertAdjacentElement('beforebegin', december);
        }
    } */

    render() {
        setTimeout(this.updateH2(), 1000);

        return (
            <div className="month-wrapper">
                <h2 className="division-name">{this.state.currentMonth}</h2>
            </div>
        )

    }

}

export default MonthContainer;