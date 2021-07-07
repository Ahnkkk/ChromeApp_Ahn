"use strict";

const dates = new Date();
const today = dates.getDate();
let nowYear = dates.getFullYear();
let nowMonth = dates.getMonth();
//console.log(nowMonth);
let firstDay = new Date(nowYear,nowMonth,1).getDate();
//console.log(firstDay);
let lastDay = new Date(nowYear,nowMonth+1,0).getDate();
//console.log(lastDay);
let firstDate = new Date(nowYear,nowMonth,1).getDay();
//console.log(firstDate);
const calendar = document.querySelector('#calendar');
const calToday = document.querySelector('.calToday');
calToday.innerText = `${nowYear}년  ${nowMonth+1}월`;

makeCalendar();
todayPointCalendar();
calNow();

const calPrev = document.querySelector('#calPrev');
const calNext = document.querySelector('#calNext');
calPrev.addEventListener('click',prevMonth);
calNext.addEventListener('click',nextMonth);

function makeCalendar() {
    //make <tr>
    let row = calendar.insertRow();
    for(let i=0; i<firstDate; i++){
        //make <td>
        row.insertCell();
    }
    for(let i=1; i<=lastDay; i++){
        if(firstDate !== 7){
            let cell = row.insertCell();
            cell.setAttribute('id',`${[i]}`);
            cell.innerText = `${[i]}`;
            if(firstDate === 0){cell.style.color="red"};
            if(firstDate === 6){cell.style.color=`#03e9f4`};
            firstDate += 1;
        }else{
            row = calendar.insertRow();
            let cell = row.insertCell();
            cell.setAttribute('id',`${[i]}`);
            cell.innerText = `${[i]}`;
            cell.style.color = "red";
            firstDate = firstDate-6;
        }
    }
}

function todayPointCalendar() {
    const dates = new Date()
    const year = dates.getFullYear();
    const month = dates.getMonth();
    if((year === nowYear) && (month === nowMonth)){
    const todayPoint = document.getElementById(`${today}`);
    todayPoint.style.color = `#34ff00`;
    }
}

function prevMonth() {
    while (calendar.rows.length>2){
        calendar.deleteRow(calendar.rows.length-1);
    }
    nowMonth -= 1;
    if(nowMonth === -1){
        nowYear -= 1;
        nowMonth = 11;
    }
    calToday.innerText = `${nowYear}년  ${nowMonth+1}월`;
    firstDay = new Date(nowYear,nowMonth,1).getDate();
    lastDay = new Date(nowYear,nowMonth+1,0).getDate();
    firstDate = new Date(nowYear,nowMonth,1).getDay();
    makeCalendar();
    todayPointCalendar();
}
function nextMonth() {
    while (calendar.rows.length>2){
        calendar.deleteRow(calendar.rows.length-1);
    }
    nowMonth += 1;
    if(nowMonth === 12){
        nowYear += 1;
        nowMonth = 0;
    }
    calToday.innerText = `${nowYear}년  ${nowMonth+1}월`;
    firstDay = new Date(nowYear,nowMonth,1).getDate();
    lastDay = new Date(nowYear,nowMonth+1,0).getDate();
    firstDate = new Date(nowYear,nowMonth,1).getDay();
    makeCalendar();
    todayPointCalendar();
}

function calNow() {
    const dates = new Date();
    const year = dates.getFullYear();
    const month = dates.getMonth();
    const day = dates.getDate();
    const dayOfWeek = dates.getDay();
    const days = ["일요일","월요일","화요일","수요일","목요일","금요일","토요일",];
    const calNow = document.querySelector('#calStatus');
    const subCalNow = document.querySelector('#subCalStatus');
    calNow.innerText = `${year}년 ${month+1}월 ${day}일 ${days[dayOfWeek]}`;
    subCalNow.innerText = `${year}년 ${month+1}월 ${day}일 ${days[dayOfWeek]}`;
    calNow.addEventListener('click',() => {
        firstDate = new Date(year,month,1).getDay();
        lastDay = new Date(year,month+1,0).getDate();
        nowYear = year;
        nowMonth = month;
        while (calendar.rows.length>2){
            calendar.deleteRow(calendar.rows.length-1);
        }
        calToday.innerText = `${year}년  ${month+1}월`;
        makeCalendar();
        todayPointCalendar();
    });
}





























