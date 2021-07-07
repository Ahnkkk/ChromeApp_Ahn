'use strict';

const userNameKey = "username";
const hiddenClassName = "hidden";

const saveUserName = localStorage.getItem(userNameKey);
const loginForm = document.querySelector('#loginForm');
const inputName = document.querySelector('#inputName');
const subController = document.querySelector('#subController');
const greeting = document.querySelector('#greeting');
const nameContainer = document.querySelector('#headContainer');
const weather = document.querySelector('#weather');
const footer = document.querySelector('#footer');
const calendarHeaderList = document.querySelector('#calendarHeader');
const calendarList = document.querySelector('#calendar');

if(saveUserName === null){
    loginForm.classList.remove(hiddenClassName);
    loginForm.addEventListener("submit",event => onLoginSubmit(event));
    weather.style.display='none';
}else{
    paintGreeting(saveUserName);
    subController.classList.remove(hiddenClassName);
}
function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(hiddenClassName);
    const userName = inputName.value;
    localStorage.setItem(userNameKey, userName);
    paintGreeting(userName);
}
function paintGreeting(username) {
    subController.classList.remove(hiddenClassName);
    nameContainer.classList.remove(hiddenClassName);
    footer.classList.remove(hiddenClassName);
    calendarHeaderList.classList.remove(hiddenClassName);
    calendarList.classList.remove(hiddenClassName);
    weather.style.display='flex';
    greeting.innerText = `Seize the Day,\n${username}`;

}

