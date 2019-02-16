import React from 'react';
import Logo from '../../Logo/Logo';
import styled from 'styled-components';
import '../../../Utilities/league-colors.css';

//#region STYLES
const StyledTeamCard = styled.div`
        margin: 10px auto;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        display: flex;
        flex-direction: column;
        height: 100px;
        width: 100%;
        transition: .25s ease-in-out;
        background: #fff;
        position: relative;
        border-radius: 5px;
        float: left;
        overflow: hidden;
        scroll-behavior: smooth;

        & h2, h3, .logo-container{
            position: relative;
            margin: auto;
            left: auto;
            right: auto;
        }

        & h2{
            font-size: 18px;
            padding-left:20px;
        }

        & h3{
            font-size: 28px;
            padding-left: 20px;
        }

        & .logo-container{
            width: 50%;
            max-width: 125px;
            position: absolute;
            left: 0px;

            & img{
                margin: auto;
                width: 60%;
                position: absolute;
                top: 0;
                bottom: 0;
                left: 10px;
            }
        }

        @media (min-width: 600px) {
            display:flex;
            flex-direction: column;

            :hover {
                cursor: pointer;
                transform:translateY(-5px);
                box-shadow: 2px 4px 6px rgba(0,0,0,.4);
            }
        }
`;

//#endregion STYLES



const TeamCard = (props) => {

    return (
        <StyledTeamCard className="card team-card" onClick={props.onClick} teamValue={props.teamValue} data-teamid={props.teamValue}>
            <h2>{props.cityName}</h2>
            <h3>{props.teamName}</h3>
            <Logo cardType={"teamCard"} teamValue={props.teamValue} />
        </StyledTeamCard>
    )
}

export default TeamCard;