const API_KEY = `0b1d65980a927e4e21321739f245a7dd`;
const weatherList = document.querySelector("#weather-list");
let dailyWeather = [];

const weatherIcons = {
    "Thunderstorm": "⚡",
    "Drizzle": "💧",
    "Rain": "☔",
    "Snow": "⛄",
    "Atmosphere": "⛅",
    "Clear": "🌞",
    "Clouds": "⛅"
  }
  

function formatDate(date) {
    return `${monthList[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

function onGeoValid(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response  => response.json())
    .then(data=> {
        dailyWeather = data.daily;
        console.log(dailyWeather);
        dailyWeather.forEach((day) => {
            const weather = document.createElement("li");
            weather.innerText = `${formatDate(new Date(day.dt*1000))}\n${weatherIcons[day.weather[0].main]} ${parseFloat(day.temp.min).toFixed(1)}~${parseFloat(day.temp.max).toFixed(1)}℃\n`
            weather.style="margin: 1vh 0";
            weatherList.appendChild(weather);
        })
    });
}

function onGeoInvalid() {
    const weather = document.createElement("li");
    weather.innerText = `Unable to find your location 😥\nWe need your location info\nto provide weather forecast 🚨`;
    weatherList.appendChild(weather);
}

navigator.geolocation.getCurrentPosition(onGeoValid, onGeoInvalid);
