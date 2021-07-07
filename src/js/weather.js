"use strict";

const apiKey= "ca4d3f490492d787bce1b65452138a1a";

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoFail);

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherImage =`http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
            const weatherIcon = document.createElement('img');
            const weatherIcon1 = document.createElement('img');
            weatherIcon.src = weatherImage;
            weatherIcon1.src = weatherImage;
            document.querySelector('.weather').prepend(weatherIcon);
            document.querySelector('#subHeadRight').prepend(weatherIcon1);
            const weatherCondition = document.querySelector('.weatherControl');
            const subWeatherCondition = document.querySelector('#subWeatherControl');
            weatherCondition.innerText = `City : ${data.name}\n\nTemperature : ${data.main.temp} ℃\n\nCondition : ${data.weather[0].main}`;
            subWeatherCondition.innerText = `City : ${data.name}\n\nTemperature : ${data.main.temp} ℃\n\nCondition : ${data.weather[0].main}`;
        });
}

function onGeoFail() {
    alert("Can't find you. No weather for you");
}
