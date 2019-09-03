(window["webpackJsonpface-off"]=window["webpackJsonpface-off"]||[]).push([[0],{12:function(e,a,t){},27:function(e,a,t){e.exports=t(39)},32:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(19),i=t.n(c),o=(t(32),t(1)),s=t(22),m=t(8),l=t(2),u=t(3);function d(){var e=Object(o.a)(["\n    .loading-circle{\n        width: 2vw;\n        height: 2vw;\n        border-radius: 50%;\n        border: 1vw solid #999;\n        border-top-color: #444;\n        animation: 2s "," infinite linear;\n        margin:auto;\n    }"]);return d=function(){return e},e}function b(){var e=Object(o.a)(["\n    from {\n        transform: rotate(0deg);\n    }\n    to{\n        transform: rotate(360deg);\n    }\n"]);return b=function(){return e},e}var h=Object(l.b)(b()),g=l.a.div(d(),h),f=function(){return r.a.createElement(g,null)};t(12);function p(){var e=Object(o.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    background-color: ",";\n    width: 100%;\n    height: 35px;\n    padding: 20px 0;\n    color: white;\n    position: fixed;\n    top:0;\n    left:0;\n    text-align:center;\n    transition: .25s ease-in-out;\n    z-index: 8000;\n\n    & h1, h2, h3{\n        margin: auto;\n        padding-left: 0px;\n    }\n\n    h1 {\n        margin-left: 25px;\n        margin-bottom: 0px;\n        font-size: ",";\n    }\n\n    h2 {\n        font-size: ",";\n        margin-top: 10px;\n    }\n"]);return p=function(){return e},e}var w=l.a.header(p(),function(e){return"homeHeader"===e.headerStyle?"#222":""},function(e){return e.activeTeamID?"24px":"42px"},function(e){return e.activeTeamID?"42px":"24px"}),v=function(e){var a=Object(n.useState)(!0),t=Object(u.a)(a,2),c=t[0],i=t[1],o=e.activeTeamID,s=e.children,m=e.headerH1,l=e.headerH2,d=e.headerStyle;return Object(n.useEffect)(function(){i(!1)},[]),c?r.a.createElement(w,{headerStyle:d,className:"team".concat(o)},r.a.createElement(f,null)):r.a.createElement(w,{headerStyle:d,className:"team".concat(o)},r.a.createElement("h1",null,m),r.a.createElement("h2",null,l),s)};function y(){var e=Object(o.a)(["\n        overflow: auto;\n        overflow-y: hidden;\n        white-space: nowrap;\n        display: flex;\n        position: relative;\n        height: auto;\n        padding: 20px 0px;\n        width: 95vw;\n        left: 0;\n        margin-top: 200px;\n        scroll-snap-type: x proximity;\n\n        @media (min-width: 600px) {\n            display: flex;\n            flex-direction: row;\n            max-width: 98vw;\n        }\n"]);return y=function(){return e},e}function k(){var e=Object(o.a)(["\n        position: relative;\n        width: 85%;\n        margin: 15px auto;\n        height: inherit;\n        display: inline-block;\n        text-align: center;\n        scroll-behavior: smooth;\n\n        @media (min-width: 600px) {\n        display: inline-block;\n        max-width: 1100px;\n        }\n"]);return k=function(){return e},e}var T=l.a.div(k()),x=Object(l.a)(T)(y()),E=function(e){var a=e.containerType;return Object(n.useEffect)(function(){window.scrollTo(0,0)},[]),"division-container"===a?r.a.createElement(T,{id:a},e.children):"card_container_schedule_list"===a?r.a.createElement(x,{id:a},e.children):null};function C(){var e=Object(o.a)(["\n    border-radius: 50%;\n    width: 80px;\n    height: 100%;\n    position: relative;\n    margin: auto;\n    display: -ms-flexbox;\n    display: flex;\n    margin-left: 0;\n    position: ",";\n    left: ",";\n\n    img{\n        margin: auto;\n        width: 100%;\n        position: relative;\n        height: auto;\n    }\n    \n    @media screen and (min-width:600px){\n        position: relative;\n        height: auto;\n        left: auto;\n        margin: auto;\n        width: 125px;\n    }\n"]);return C=function(){return e},e}var O=l.a.div(C(),function(e){return"teamCard"===e.cardType?"absolute":"relative"},function(e){return"teamCard"===e.cardType?"20px":"0px"}),j=function(e){var a,t=e.cardType,n=e.teamName,c=e.teamValue;switch(c){case"1":if("teamCard"===t){a="https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-14-light.svg";break}a="https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-14-dark.svg";break;case"2":a="https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-52-dark.svg";break;case"3":a="https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-12-dark.svg";break;case"4":a="https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-13-dark.svg";break;case"5":if("teamCard"===t){a="https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-15-light.svg";break}a="https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-15-dark.svg";break;case"6":a="https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-4-dark.svg";break;case"7":a="https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-1-dark.svg";break;case"8":a="https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-2-dark.svg";break;case"9":a="https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-3-dark.svg";break;case"10":a="https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-5-dark.svg";break;case"11":a="https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-6-dark.svg";break;case"12":if("teamCard"===t){a="https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-10-light.svg";break}a="https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-10-dark.svg";break;case"13":a="https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-9-dark.svg";break;case"14":a="https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-8-dark.svg";break;case"15":a="https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-7-dark.svg";break;case"16":a="https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-17-dark.svg";break;case"17":a="https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-19-dark.svg";break;case"18":a="https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-18-dark.svg";break;case"19":a="https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-29-dark.svg";break;case"20":a="https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-16-dark.svg";break;case"21":if("teamCard"===t){a="https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-23-light.svg";break}a="https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-23-dark.svg";break;case"22":a="https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-21-dark.svg";break;case"23":a="https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-20-dark.svg";break;case"24":a="https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-22-dark.svg";break;case"25":a="https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-30-dark.svg";break;case"26":a="https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-28-dark.svg";break;case"27":a="https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-25-dark.svg";break;case"28":a="https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-26-dark.svg";break;case"29":a="https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-24-dark.svg";break;case"30":a="https://www-league.nhlstatic.com/nhl.com/builds/site-core/3358ed0ede20e7e33cb07ec6be0713405ff6b894_1539029735/images/logos/team/current/team-53-dark.svg";break;case"142":a="https://www-league.nhlstatic.com/images/logos/teams-current-circle/54.svg";break;default:a="https://www-league.nhlstatic.com/images/logos/league-light/133.svg"}return r.a.createElement(O,{cardType:t,teamName:n,teamValue:c},r.a.createElement("img",{src:a,alt:"".concat(n," logo")}))};function N(){var e=Object(o.a)(["\n    font-size: ",";\n    padding-left: 20px;\n"]);return N=function(){return e},e}var S=l.a.h3(N(),function(e){return"header"===e.teamStatsLocation?"24px":"16px"}),_=function(e){var a,t=Object(n.useState)(),c=Object(u.a)(t,2),i=c[0],o=c[1],s=Object(n.useState)(!0),m=Object(u.a)(s,2),l=m[0],d=m[1];return Object(n.useEffect)(function(){!function(){var a=e.url,t={type:"GET",dataType:"json",async:!1,headers:{Authorization:"Basic "+btoa("sobrien:MYSPORTSFEEDS")}};fetch(a,t).then(function(e){return e.json()}).then(function(e){console.log(e),o(e),d(!1)}).catch(function(e){console.log("GetTeamStats Fetch Error: "+e)})}()},[e.url]),"teamStatsQuery"===e.ApiLink?l?r.a.createElement(f,null):(a=void 0!==i.teamStatsTotals[0]?i.teamStatsTotals[0].stats.standings.wins+", "+i.teamStatsTotals[0].stats.standings.losses+", "+i.teamStatsTotals[0].stats.standings.overtimeLosses:"0, 0, 0",r.a.createElement(S,Object.assign({teamStatsLocation:e.teamStatsLocation},e),"(",a,")")):r.a.createElement(r.a.Fragment,null)};function D(){var e=Object(o.a)(["\n    font-size: 28px;\n    padding-left: 20px;\n\n"]);return D=function(){return e},e}function V(){var e=Object(o.a)(["\n            font-size: 18px;\n            padding-left:20px;\n\n"]);return V=function(){return e},e}function L(){var e=Object(o.a)(["\n        margin: 10px auto;\n        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n        display: flex;\n        flex-direction: column;\n        height: 100px;\n        width: 100%;\n        transition: .25s ease-in-out;\n        position: relative;\n        border-radius: 5px;\n        float: left;\n        overflow: hidden;\n        scroll-behavior: smooth;\n\n        :hover {\n            cursor: pointer;\n        }\n\n        & h2, h3, .logo-container{\n            position: relative;\n            margin: auto;\n            left: auto;\n            right: auto;\n        }\n\n        @media (min-width: 600px) {\n            max-width: 45%;\n            height: 350px;\n            margin: 10px;\n\n           :hover {\n                transform:translateY(-5px);\n                box-shadow: 2px 4px 6px rgba(0,0,0,.4);\n            }\n\n            & h2, h3{\n                padding-left: 0px;\n                margin-bottom: 0px;\n            }\n\n        }\n\n        @media (min-width: 1000px) {\n            max-width: 22%;\n        }\n"]);return L=function(){return e},e}var I=l.a.div(L()),A=l.a.h2(V()),W=l.a.h3(D()),H=function(e){var a=e.cityName,t=e.onClick,n=e.teamName,c=e.teamValue,i="https://api.mysportsfeeds.com/v2.0/pull/nhl/2019-2020-regular/team_stats_totals.json?team="+c;return r.a.createElement(I,Object.assign({className:"card team-card team".concat(c),onClick:t,teamValue:c,"data-teamid":c},e),r.a.createElement(A,null,a),r.a.createElement(W,null,n),r.a.createElement(_,{teamStatsLocation:"teamCard",ApiLink:"teamStatsQuery",url:i}),r.a.createElement(j,{cardType:"teamCard",teamValue:c,teamName:n}))};function B(){var e=Object(o.a)(["\n    display: flex;\n    flex-direction: column;\n\n    & * {\n        margin: auto;\n    }\n"]);return B=function(){return e},e}function F(){var e=Object(o.a)(["\n    opacity: ",";\n    display: flex;\n    flex-direction: row;\n    height: auto;\n    width: 100%;\n    position: relative;\n    margin: auto;\n    padding: 30px 0;\n\n    & * {\n        margin: auto;\n    }\n"]);return F=function(){return e},e}var P=l.a.div(F(),function(e){return"homeWin"===e.didHomeWin?"1":".4"}),M=l.a.div(B()),z=function(e){var a=e.didHomeWin,t=e.homeTeamScore,n=e.logoValue,c=e.teamCity,i=e.teamName;return r.a.createElement(P,Object.assign({didHomeWin:a},e),r.a.createElement(j,{teamValue:n,teamName:i}),r.a.createElement(M,null,r.a.createElement("h3",null,c),r.a.createElement("h2",null,i)),r.a.createElement("h2",{className:"score home-score"},t))};function J(){var e=Object(o.a)(["\n    opacity: ",";\n    display: flex;\n    flex-direction: row;\n    position: relative;\n    margin: auto;\n    width: 100%;\n    height:auto;\n    padding: 30px 0;\n\n    & * {\n        margin: auto;\n    }\n\n    div{\n        display: flex;\n        flex-direction: column;\n\n        & *{\n            margin: auto;\n        }\n    }\n"]);return J=function(){return e},e}var Y=l.a.div(J(),function(e){return"homeWin"===e.didHomeWin?".4":"1"}),R=function(e){var a=e.awayTeamScore,t=e.didHomeWin,n=e.logoValue,c=e.teamCity,i=e.teamName;return r.a.createElement(Y,Object.assign({didHomeWin:t},e),r.a.createElement("h2",{className:"score away-score"},a),r.a.createElement("div",null,r.a.createElement("h2",null,i),r.a.createElement("h3",null,c)),r.a.createElement(j,{teamValue:n,teamName:i}))},q=function(e){var a,t,n="",c="",i=e.awayTeamID,o=e.awayTeamScore,s=e.didHomeWin,m=e.homeTeamID,l=e.homeTeamScore,u=e.isHomeTeam;switch(t=u?(a=m).toString():(a=i).toString(),a){case 1:n="Lightning",c="Tampa Bay";break;case 2:n="Jets",c="Winnipeg";break;case 3:n="Hurricanes",c="Carolina";break;case 4:n="Panthers",c="Florida";break;case 5:n="Capitals",c="Washington";break;case 6:n="Flyers",c="Philadelphia";break;case 7:n="Devils",c="New Jersey";break;case 8:n="Islanders",c="New York";break;case 9:n="Rangers",c="New York";break;case 10:n="Penguins",c="Pittsburgh";break;case 11:n="Bruins",c="Boston";break;case 12:n="Maple Leafs",c="Toronto";break;case 13:n="Senators",c="Ottawa";break;case 14:n="Canadians",c="Montreal";break;case 15:n="Sabres",c="Buffalo";break;case 16:n="Red Wings",c="Detroit";break;case 17:n="Blues",c="St. Louis";break;case 18:n="Predators",c="Nasheville";break;case 19:n="Blue Jackets",c="Columbus";break;case 20:n="Blackhawks",c="Chicago";break;case 21:n="Canucks",c="Vancouver";break;case 22:n="Avalanche",c="Colorado";break;case 23:n="Flames",c="Calgary";break;case 24:n="Oilers",c="Edmonton";break;case 25:n="Wild",c="Minnesota";break;case 26:n="Sharks",c="San Jose";break;case 27:n="Stars",c="Dallas";break;case 28:n="Kings",c="Los Angeles";break;case 29:n="Ducks",c="Anaheim";break;case 30:n="Coyotes",c="Arizona";break;case 142:n="Golden Knights",c="Los Vegas";break;default:console.log("error converting data")}return u?r.a.createElement(z,{teamName:n,teamCity:c,didHomeWin:s,homeTeamScore:l,logoValue:t}):r.a.createElement(R,Object.assign({teamName:n,teamCity:c,didHomeWin:s,awayTeamScore:o,logoValue:t},e))};function Q(){var e=Object(o.a)(["\n    margin: auto;\n"]);return Q=function(){return e},e}function G(){var e=Object(o.a)(["\n    position: absolute;\n    top:0;\n    width: 100%;\n    left:0;\n    right:0;\n    margin:auto;\n    color: #fff;\n    height: 1.2em;\n    padding-top: 5px;\n    display: flex;\n"]);return G=function(){return e},e}var K=l.a.div(G()),U=l.a.p(Q()),$=function(e){var a=e.activeTeamID,t=e.gameDateTime,n=new Date(t),c=new Array(7);c[0]="Sunday",c[1]="Monday",c[2]="Tuesday",c[3]="Wednesday",c[4]="Thursday",c[5]="Friday",c[6]="Saturday";var i=c[n.getDay()]+", "+n.toLocaleDateString()+" at "+n.toLocaleTimeString();return r.a.createElement(K,Object.assign({gameDateTime:e.gameDateTime,className:"team".concat(a)},e),r.a.createElement(U,null," ",i))};function X(){var e=Object(o.a)(["\n    position: absolute;\n    top: 15px;\n    height: calc(100% - 15px);\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n\n    & *{\n        margin: auto;\n    }\n\n    & p{\n        font-weight: 600;\n    }\n"]);return X=function(){return e},e}function Z(){var e=Object(o.a)(["\n    margin: auto 10px;\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n    height: 300px;\n    width: 100%;\n    min-width: 350px;\n    transition: .25s ease-in-out;\n    background-color: ",";\n    position: relative;\n    border-radius: 5px;\n    overflow: hidden;\n    scroll-behavior: smooth;\n    scroll-snap-align: center;\n    opacity: ",";\n\n    @media (min-width: 600px) {\n        width: 350px;\n        height: 450px;\n        margin: auto 20px;\n\n            :hover{\n                box-shadow: 0 2px 6px rgba(0,0,0,0.2), 0 2px 4px rgba(0,0,0,0.4);\n                transform: translateY(-5px);\n                opacity: .85;\n            }\n    }\n"]);return Z=function(){return e},e}var ee=l.a.div(Z(),function(e){return"past"===e.isPast?"lightgray":"#fff"},function(e){return"past"===e.isPast?".6":"1"}),ae=l.a.div(X()),te=function(e){var a,t=Object(n.useState)(!0),c=Object(u.a)(t,2),i=c[0],o=c[1],s=e.activeTeamID,m=e.awayTeamID,l=e.awayTeamScore,d=e.gameDateTime,b=e.homeTeamID,h=e.homeTeamScore,g=e.teamCity,f=e.teamName,p=i?"past":"future",w=new Date(d),v=w.getMonth();return a=h>l?"homeWin":"homeLose",Object(n.useEffect)(function(){new Date<new Date(d)&&o(!0)},[]),r.a.createElement(ee,Object.assign({"data-month":v,"data-pastfuture":p,cardType:"scheduleCard",isPast:i?"past":"future"},e),r.a.createElement($,{gameDateTime:w,activeTeamID:s}),r.a.createElement(ae,null,r.a.createElement(q,{didHomeWin:a,awayTeamID:m,teamName:f,teamCity:g,awayTeamScore:l,homeTeamID:b,homeTeamScore:h}),r.a.createElement("p",null,"At"),r.a.createElement(q,{isHomeTeam:!0,didHomeWin:a,homeTeamID:b,teamName:f,teamCity:g,homeTeamScore:h,awayTeamID:m,awayTeamScore:l})))},ne=function(e){var a=e.activeTeamID,t=e.awayTeamCity,n=e.awayTeamID,c=e.awayTeamName,i=e.awayTeamScore,o=e.cardType,s=e.cityName,m=e.gameDateTime,l=e.handleClick,u=e.homeTeamCity,d=e.homeTeamID,b=e.homeTeamName,h=e.homeTeamScore,g=e.isPast,f=e.onClick,p=e.month,w=e.teamName,v=e.teamValue;return"teamCard"===o?r.a.createElement(H,{cityName:s,teamName:w,onClick:f,teamValue:v}):"scheduleCard"===o?r.a.createElement(te,{gameDateTime:m,awayTeamID:n,awayTeamName:c,awayTeamCity:t,awayTeamScore:i,homeTeamID:d,homeTeamName:b,homeTeamCity:u,homeTeamScore:h,onClick:l,activeTeamID:a,month:p,teamName:w,isPast:g,cardType:"ScheduleCard"}):null},re=function(e){var a=Object(n.useState)(),t=Object(u.a)(a,2),c=t[0],i=t[1],o=Object(n.useState)(Boolean),s=Object(u.a)(o,2),m=s[0],l=s[1];if(Object(n.useEffect)(function(){!function(){var a=e.url,t={type:"GET",dataType:"json",async:!1,headers:{Authorization:"Basic "+btoa("sobrien:MYSPORTSFEEDS")}};fetch(a,t).then(function(e){return e.json()}).then(function(e){i(e),l(!0)}).catch(function(e){console.log("API call failed with error ",e)})}()},[]),"gameScheduleQuery"===e.ApiLink){if(m){var d=c.games.map(function(a){return r.a.createElement(ne,Object.assign({key:a.schedule.id,cardType:"scheduleCard",awayTeamName:e.awayTeamName,awayTeamCity:e.awayTeamCity,awayTeamID:a.schedule.awayTeam.id,awayTeamScore:a.score.awayScoreTotal,homeTeamName:e.homeTeamName,homeTeamCity:e.homeTeamCity,homeTeamID:a.schedule.homeTeam.id,homeTeamScore:a.score.homeScoreTotal,gameDateTime:a.schedule.startTime,gameID:a.schedule.id,activeTeamID:e.activeTeamID,activeTeamName:e.activeTeamName,cityName:e.cityName,teamValue:e.teamValue},e))});return r.a.createElement(E,{containerType:"card_container_schedule_list"},d)}return r.a.createElement(f,null)}return r.a.createElement(r.a.Fragment,null)};function ce(){var e=Object(o.a)(["\n    text-align: left;\n    width: 100%;\n"]);return ce=function(){return e},e}function ie(){var e=Object(o.a)(["\n    width:100%;\n    height: 100%;\n    overflow: auto;\n    padding-bottom: 25px;\n    position: relative;\n\n    @media (min-width: 600px) {\n        display: inline-block;\n    }\n\n"]);return ie=function(){return e},e}var oe=l.a.section(ie()),se=l.a.h2(ce()),me=function(e){return window.scrollTo(0,0),r.a.createElement(oe,null,r.a.createElement(se,null,e.divisionTitle),e.children)},le=function(e){var a=e.handleClick;return r.a.createElement(E,{containerType:"division-container"},r.a.createElement(me,{divisionTitle:"Atlantic"},r.a.createElement(ne,Object.assign({cardType:"teamCard",cityName:"Boston",teamName:"Bruins",teamValue:"11",onClick:a},e)),r.a.createElement(ne,Object.assign({cardType:"teamCard",cityName:"Buffalo",teamName:"Sabres",teamValue:"15",onClick:a},e)),r.a.createElement(ne,Object.assign({cardType:"teamCard",cityName:"Detroit",teamName:"Red Wings",teamValue:"16",onClick:a},e)),r.a.createElement(ne,Object.assign({cardType:"teamCard",cityName:"Florida",teamName:"Panthers",teamValue:"4",onClick:a},e)),r.a.createElement(ne,Object.assign({cardType:"teamCard",cityName:"Montreal",teamName:"Canadians",teamValue:"14",onClick:a},e)),r.a.createElement(ne,Object.assign({cardType:"teamCard",cityName:"Ottawa",teamName:"Senators",teamValue:"13",onClick:a},e)),r.a.createElement(ne,Object.assign({cardType:"teamCard",cityName:"Tampa Bay",teamName:"Lightning",teamValue:"1",onClick:a},e)),r.a.createElement(ne,Object.assign({cardType:"teamCard",cityName:"Toronto",teamName:"Maple Leafs",teamValue:"12",onClick:a},e))),r.a.createElement(me,{divisionTitle:"Metropolitan"},r.a.createElement(ne,Object.assign({cardType:"teamCard",cityName:"Carolina",teamName:"Hurricanes",teamValue:"3",onClick:a},e)),r.a.createElement(ne,Object.assign({cardType:"teamCard",cityName:"Columbus",teamName:"Blue Jackets",teamValue:"19",onClick:a},e)),r.a.createElement(ne,Object.assign({cardType:"teamCard",cityName:"New Jersey",teamName:"Devils",teamValue:"7",onClick:a},e)),r.a.createElement(ne,Object.assign({cardType:"teamCard",cityName:"New York",teamName:"Islanders",teamValue:"8",onClick:a},e)),r.a.createElement(ne,Object.assign({cardType:"teamCard",cityName:"New York",teamName:"Rangers",teamValue:"9",onClick:a},e)),r.a.createElement(ne,Object.assign({cardType:"teamCard",cityName:"Philadelphia",teamName:"Flyers",teamValue:"6",onClick:a},e)),r.a.createElement(ne,Object.assign({cardType:"teamCard",cityName:"Pittsburgh",teamName:"Penguins",teamValue:"10",onClick:a},e)),r.a.createElement(ne,Object.assign({cardType:"teamCard",cityName:"Washington",teamName:"Capitals",teamValue:"5",onClick:a},e))),r.a.createElement(me,{divisionTitle:"Central"},r.a.createElement(ne,Object.assign({cardType:"teamCard",cityName:"Chicago",teamName:"Black Hawks",teamValue:"20",onClick:a},e)),r.a.createElement(ne,Object.assign({cardType:"teamCard",cityName:"Colorado",teamName:"Avalanche",teamValue:"22",onClick:a},e)),r.a.createElement(ne,Object.assign({cardType:"teamCard",cityName:"Dallas",teamName:"Stars",teamValue:"27",onClick:a},e)),r.a.createElement(ne,Object.assign({cardType:"teamCard",cityName:"Minnesota",teamName:"Wild",teamValue:"25",onClick:a},e)),r.a.createElement(ne,Object.assign({cardType:"teamCard",cityName:"Nashville",teamName:"Predators",teamValue:"18",onClick:a},e)),r.a.createElement(ne,Object.assign({cardType:"teamCard",cityName:"St. Louis",teamName:"Blues",teamValue:"17",onClick:a},e)),r.a.createElement(ne,Object.assign({cardType:"teamCard",cityName:"Winnipeg",teamName:"Jets",teamValue:"2",onClick:a},e))),r.a.createElement(me,{divisionTitle:"Pacific"},r.a.createElement(ne,Object.assign({cardType:"teamCard",cityName:"Anaheim",teamName:"Ducks",teamValue:"29",onClick:a},e)),r.a.createElement(ne,Object.assign({cardType:"teamCard",cityName:"Arizona",teamName:"Coyotes",teamValue:"30",onClick:a},e)),r.a.createElement(ne,Object.assign({cardType:"teamCard",cityName:"Calgary",teamName:"Flames",teamValue:"23",onClick:a},e)),r.a.createElement(ne,Object.assign({cardType:"teamCard",cityName:"Edmonton",teamName:"Oilers",teamValue:"24",onClick:a},e)),r.a.createElement(ne,Object.assign({cardType:"teamCard",cityName:"Los Angeles",teamName:"Kings",teamValue:"28",onClick:a},e)),r.a.createElement(ne,Object.assign({cardType:"teamCard",cityName:"San Jose",teamName:"Sharks",teamValue:"26",onClick:a},e)),r.a.createElement(ne,Object.assign({cardType:"teamCard",cityName:"Vancouver",teamName:"Canucks",teamValue:"21",onClick:a},e)),r.a.createElement(ne,Object.assign({cardType:"teamCard",cityName:"Las Vegas",teamName:"Golden Knights",teamValue:"142",onClick:a},e))))};function ue(){var e=Object(o.a)(["\n    animation: "," .6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n    bottom: 215px;\n"]);return ue=function(){return e},e}function de(){var e=Object(o.a)(["\n    animation: "," .45s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n    bottom: 115px;\n"]);return de=function(){return e},e}function be(){var e=Object(o.a)(["\n  from {\n    opacity: 0;\n    transform: translateY(125px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n"]);return be=function(){return e},e}function he(){var e=Object(o.a)(["\n\n"]);return he=function(){return e},e}function ge(){var e=Object(o.a)(["\n    width: 100vw;\n    height: 100vh;\n    position: fixed;\n    top: 0;\n    left: 0;\n    background-color: rgba(0,0,0,.4);\n    z-index: 9999;\n"]);return ge=function(){return e},e}function fe(){var e=Object(o.a)(["\n    margin: auto;\n    color: currentColor;\n    position: relative;\n    text-align: center;\n"]);return fe=function(){return e},e}function pe(){var e=Object(o.a)(["\n    width: 30px;\n    height: 2px;\n    margin: auto;\n    background-color: currentColor;\n    transition: .25s ease-in-out;\n\n    ::before, ::after{\n      content:'';\n      width: 30px;\n      height: 2px;\n      background-color: inherit;\n      position: absolute;\n      left: 0;\n      right: 0;\n      margin: auto;\n      transition: .2s ease-in-out;\n    }\n\n    ::before{\n      top: 35%;\n    }\n\n    ::after{\n      bottom: 35%;\n    }\n"]);return pe=function(){return e},e}function we(){var e=Object(o.a)(["\n  border-radius: 50%;\n  border: none;\n  box-shadow: 2px 2px 6px rgba(0,0,0,.4);\n  transition: .5s ease-in-out;\n  position: fixed;\n  bottom: 15px;\n  right: 15px;\n  height: 75px;\n  width: 75px;\n    &:focus {\n      outline: none;\n    }\n"]);return we=function(){return e},e}var ve=l.a.button(we()),ye=l.a.div(pe()),ke=l.a.h2(fe()),Te=l.a.div(ge()),xe=Object(l.a)(ve)(he()),Ee=Object(l.b)(be()),Ce=Object(l.a)(ve)(de(),Ee),Oe=Object(l.a)(ve)(ue(),Ee),je=function(e){var a=Object(n.useState)(!1),t=Object(u.a)(a,2),c=t[0],i=t[1],o=e.activeTeamID,s=e.handleClick;return c?r.a.createElement(Te,null,r.a.createElement(Oe,{className:"team".concat(o),onClick:function(){var e=document.getElementById("card_container_schedule_list").lastElementChild,a=document.querySelector('[data-pastfuture="future"]');if(!document.querySelector('[data-pastfuture="future"]'))return e&&e.scrollIntoView({behavior:"smooth",block:"start"}),void i(!c);a.scrollIntoView({behavior:"smooth",block:"start"}),i(!c)}},r.a.createElement(ke,null,"Next Game")),r.a.createElement(Ce,{className:"team".concat(o),onClick:s},r.a.createElement(ke,null,"Teams")),r.a.createElement(xe,{className:"team".concat(o),onClick:function(){return i(!c)}},r.a.createElement(ke,null,"Close"))):r.a.createElement(r.a.Fragment,null,r.a.createElement(ve,{className:"team".concat(o),onClick:function(){return i(!c)}},r.a.createElement(ye,null)))};function Ne(){var e=Object(o.a)(["\n    height: 50px;\n    border-bottom: 2px solid #000;\n    width: 200px;\n    margin-left: 20px;\n    top: 180px;\n    position: fixed;\n    padding-bottom: 10px;\n\n    & h2{\n        text-align: left;\n        padding-left: 10px;\n        transition: .3s ease-in-out;\n        opacity: ",";\n        transform: ",";\n        padding-bottom: 10px;\n    }\n\n    @media (min-width: 600px) {\n        margin-left: 45px;\n    }\n"]);return Ne=function(){return e},e}var Se=l.a.div(Ne(),function(e){return e.visible?"1":"0"},function(e){return e.visible?"":"translateY(15px)"}),_e=function(e){var a=Object(n.useState)("October"),t=Object(u.a)(a,2),c=t[0],i=t[1],o=Object(n.useState)(!0),s=Object(u.a)(o,2),m=s[0],l=s[1];return Object(n.useEffect)(function(){setTimeout(function(){!function(){var e=document.getElementById("card_container_schedule_list"),a=document.querySelectorAll("[data-month='0']")[0].offsetLeft,t=document.querySelectorAll("[data-month='1']")[0].offsetLeft,n=document.querySelectorAll("[data-month='2']")[0].offsetLeft,r=document.querySelectorAll("[data-month='3']")[0].offsetLeft,o=document.querySelectorAll("[data-month='9']")[0].offsetLeft,s=document.querySelectorAll("[data-month='10']")[0].offsetLeft,m=document.querySelectorAll("[data-month='11']")[0].offsetLeft,u=function(e){l(!1),setTimeout(function(){l(!0),i(e)},600)};e.addEventListener("scroll",function(){var i=e.scrollLeft+300;switch(!0){case i>0&&i<s:if("October"===c)break;u("October");break;case i>o&&i<m:if("November"===c)break;u("November");break;case i>s&&i<a:if("December"===c)break;u("December");break;case i>m&&i<t:if("January"===c)break;u("January");break;case i>a&&i<n:if("February"===c)break;u("February");break;case i>t&&i<r:if("March"===c)break;u("March");break;case i>n:if("April"===c)break;u("April")}})}(),l(!0)},1e3)}),r.a.createElement(Se,{visible:m},r.a.createElement("h2",null," ",c," "))};function De(){var e=Object(o.a)(["\n        position: relative;\n        margin-top: 175px;\n"]);return De=function(){return e},e}var Ve=l.a.main(De()),Le=function(e){var a=Object(n.useState)(""),t=Object(u.a)(a,2),c=t[0],i=t[1],o=Object(n.useState)("Face Off"),s=Object(u.a)(o,2),m=s[0],l=s[1],d=Object(n.useState)(""),b=Object(u.a)(d,2),h=b[0],g=b[1],f=Object(n.useState)(""),p=Object(u.a)(f,2),w=(p[0],p[1]),y=Object(n.useState)(!1),k=Object(u.a)(y,2),T=k[0],x=k[1],E=Object(n.useState)(!1),C=Object(u.a)(E,2),O=C[0],j=C[1],N=Object(n.useState)(!0),S=Object(u.a)(N,2),D=S[0],V=S[1],L=Object(n.useState)(""),I=Object(u.a)(L,2),A=I[0],W=I[1],H=Object(n.useState)(""),B=Object(u.a)(H,2),F=B[0],P=B[1],M=e.currentTeamRecord;return O?(console.log("The current TeamStatsQueryRecipe is "+F),console.log("The current scheduleQueryRecipe is "+A),r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{headerStyle:"TeamHeader",activeTeamID:c,headerH1:m,headerH2:h},r.a.createElement(_,{teamStatsLocation:"header",ApiLink:"teamStatsQuery",url:F})),r.a.createElement("div",{className:"wrapper wrapper__home"},r.a.createElement("h2",{className:"page__title page__title_schedule"},"Choose a Game"),r.a.createElement(_e,null),r.a.createElement(re,{activeTeamID:c,ApiLink:"gameScheduleQuery",url:A}),r.a.createElement(je,{activeTeamID:c,visible:T,isActive:T,handleClick:function(){i(""),l("Face Off"),g(""),w(""),x(!1),j(!1),V(!0),W("https://api.mysportsfeeds.com/v2.1/pull/nhl/2019-2020-regular/games.json?team="),P("https://api.mysportsfeeds.com/v2.1/pull/nhl/2019-2020-regular/team_stats_totals.json?team="),window.scrollTo(0,0)}})))):D?r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{headerStyle:"homeHeader",headerH1:m,headerH2:h}),r.a.createElement(Ve,null,r.a.createElement(le,Object.assign({handleClick:function(e){var a=e.target.closest(".card"),t=a.dataset.teamid,n=a.firstChild.innerHTML,r=a.firstChild.nextElementSibling.innerHTML,c=document.getElementById("division-container");c.classList.remove("fade-in"),c.classList.add("fade-out"),n&&(i(t),l(n),g(r),w(M),x(!0),j(!0),V(!1),W("https://api.mysportsfeeds.com/v2.0/pull/nhl/2019-2020-regular/games.json?team="+t),P("https://api.mysportsfeeds.com/v2.0/pull/nhl/2019-2020-regular/team_stats_totals.json?team="+t))}},e)))):null};function Ie(){var e=Object(o.a)(["\n    text-align: center;\n    overflow: hidden;\n"]);return Ie=function(){return e},e}var Ae=l.a.div(Ie()),We=function(){return r.a.createElement(s.a,null,r.a.createElement(Ae,null,r.a.createElement(m.a,{path:"/face-off/",component:Le})))},He=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Be(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(r.a.createElement(We,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/face-off",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/face-off","/service-worker.js");He?(!function(e){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Be(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):Be(e)})}}()}},[[27,1,2]]]);
//# sourceMappingURL=main.fd40f3c6.chunk.js.map