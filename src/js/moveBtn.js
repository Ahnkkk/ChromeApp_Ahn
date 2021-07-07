"use strict";

const arrowBtnDown = document.querySelector('#arrowBtnDown');
const arrowBtnUp = document.querySelector('#arrowBtnUp');
arrowBtnDown.addEventListener('click',moveDownPage);
arrowBtnUp.addEventListener('click',moveUpPage);

function moveDownPage() {
    document.querySelector ( '#subController'). scrollIntoView ({behavior : 'smooth'});
}
function moveUpPage() {
    document.querySelector ( '#mainController'). scrollIntoView ({behavior : 'smooth'});
}