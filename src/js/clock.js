"use strict";

const clock = document.querySelector('#clock');
const subClock = document.querySelector('#subClock');

function getClock() {
    const clockTime = new Date();
    const clockHours = String(clockTime.getHours()).padStart(2,'0');
    const clockMinutes = String(clockTime.getMinutes()).padStart(2,'0');;
    const clockSeconds = String(clockTime.getSeconds()).padStart(2,'0');;
    clock.innerText = `${clockHours}:${clockMinutes}:${clockSeconds}`;
    subClock.innerText = `${clockHours}:${clockMinutes}:${clockSeconds}`;
}
getClock();
setInterval(getClock,1000);
