const API_URL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const API_KEY = "7810bf7b9ab404dc7b2c33ce1016ee43";

async function checkWeather(city) {
  const response = await fetch(API_URL + city + `&appid=${API_KEY}`);
  var data = await response.json();

  console.log(data);

  document.querySelector("#city").innerHTML = data["name"];
  document.querySelector("#temperature").innerHTML = data.main.temp;
  document.querySelector("#wind-Speed").innerHTML = data.wind["speed"];
  document.querySelector("#humidity").innerHTML = data.main["humidity"];

  // change the image displayed above the weather status based on the weather condition 

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "icons/cloudy-forecast-svgrepo-com.svg";
    console.log(weatherIcon);
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "icons/sunny-sun-svgrepo-com.svg";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "icons/rain-svgrepo-com.svg";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "icons/drizzle-svgrepo-com.svg";
  } else if (data.weather[0].main == "Thunderstorm") {
    weatherIcon.src = "icons/thunderstorm-wind-gale-svgrepo-com.svg";
  } else if (data.weather[0].main == "Snow") {
    weatherIcon.src = "icons/snow-svgrepo-com.svg";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "icons/mist-svgrepo-com.svg";
  } else if (data.weather[0].main == "Haze") {
    weatherIcon.src = "icons/";
  }

  // output the weather condition as a msg 
  document.querySelector("#current-condition").innerHTML = data.weather[0].main ;
}

let searchInput = document.querySelector("#search-input");
let searchButton = document.querySelector("#search-button");
let weatherIcon = document.querySelector("#weather-icon");
searchButton.addEventListener("click", () => {
  checkWeather(searchInput.value);
});

// Here is an example of the json object we are getting from the api
/*
{
    "coord": { "lon": 31.2497, "lat": 30.0626 },
    "weather": [
      { "id": 801, "main": "Clouds", "description": "few clouds", "icon": "02d" }
    ],
    "base": "stations",
    "main": {
      "temp": 32.42,
      "feels_like": 31.71,
      "temp_min": 32.42,
      "temp_max": 32.42,
      "pressure": 1009,
      "humidity": 33
    },
    "visibility": 10000,
    "wind": { "speed": 5.66, "deg": 340 },
    "clouds": { "all": 20 },
    "dt": 1686752048,
    "sys": {
      "type": 1,
      "id": 2514,
      "country": "EG",
      "sunrise": 1686711200,
      "sunset": 1686761828
    },
    "timezone": 10800,
    "id": 360630,
    "name": "Cairo",
    "cod": 200
  }
  */
