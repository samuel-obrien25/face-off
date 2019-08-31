import React, {useState, useEffect} from 'react';
import styled from 'styled-components';


const StyledMonthContainer = styled.div`
    height: 50px;
    border-bottom: 2px solid #000;
    width: 200px;
    margin-left: 20px;
    top: 180px;
    position: fixed;
    padding-bottom: 10px;

    & h2{
        text-align: left;
        padding-left: 10px;
        transition: .3s ease-in-out;
        opacity: ${props => props.visible ? "1" : "0"};
        transform: ${props => props.visible ? "" : "translateY(15px)"};
        padding-bottom: 10px;
    }

    @media (min-width: 600px) {
        margin-left: 45px;
    }
`;

const MonthContainer = (props) => {

    const [currentMonth, setCurrentMonth] = useState('October');
    const [isVisible, setIsVisible] = useState(true);

    function updateH2 (){
        //Issue
         const scheduleList = document.getElementById("card_container_schedule_list"),
               Months = {
                January:  document.querySelectorAll("[data-month='0']")[0].offsetLeft,
                February: document.querySelectorAll("[data-month='1']")[0].offsetLeft,
                March:    document.querySelectorAll("[data-month='2']")[0].offsetLeft,
                April:    document.querySelectorAll("[data-month='3']")[0].offsetLeft,
                October:  document.querySelectorAll("[data-month='9']")[0].offsetLeft,
                November: document.querySelectorAll("[data-month='10']")[0].offsetLeft,
                December: document.querySelectorAll("[data-month='11']")[0].offsetLeft
        };

        const setMonthState = (month) => {
            setIsVisible(false)

            setTimeout(()=>{
               setIsVisible(true);
               setCurrentMonth(month);
            }, 600);

        };
        
        scheduleList.addEventListener("scroll", () => {

                let scheduleListCheckPoint = scheduleList.scrollLeft + 300;                

            //If the distance between the first card of month X to the left side of card_container_schedule_list is 
            //less than or equal to the distance the card_container_schedule_list has been scrolled (plus the size of one card)
            //set state of current month to month X.

            switch(true){
                case scheduleListCheckPoint > 0 && scheduleListCheckPoint < Months.November:
                    if (currentMonth === "October") { break; }
                        setMonthState("October");
                        break;
                case scheduleListCheckPoint > Months.October && scheduleListCheckPoint < Months.December:
                    if (currentMonth === "November") { break; }
                        setMonthState("November");
                        break;
                case scheduleListCheckPoint > Months.November && scheduleListCheckPoint < Months.January:
                    if (currentMonth === "December") { break; } 
                        setMonthState("December");
                        break;
                case scheduleListCheckPoint > Months.December && scheduleListCheckPoint < Months.February:
                    if (currentMonth === "January") { break; }
                        setMonthState("January");
                        break;
                case scheduleListCheckPoint > Months.January && scheduleListCheckPoint < Months.March:
                    if (currentMonth === "February") { break; }
                        setMonthState("February");
                        break;
                case scheduleListCheckPoint > Months.February && scheduleListCheckPoint < Months.April:
                    if (currentMonth === "March") { break; }
                        setMonthState("March");
                        break;
                case scheduleListCheckPoint > Months.March:
                    if (currentMonth === "April") { break; }
                        setMonthState("April");
                        break;
                default:
                    break;
            }
        });
    }
//I need to figure out why #card_container_schedule_list returns UNDEFINED if I don't use setTimeout. 
        //Until then, setTimeout works around that

useEffect(() => {
    setTimeout(() => {
        updateH2();
        setIsVisible(true);    
    }, 1000);
})
 
    return (
        <StyledMonthContainer visible={isVisible}>
            <h2> { currentMonth } </h2>
        </StyledMonthContainer>
    )
}

export default MonthContainer;