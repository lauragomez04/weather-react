import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      country: response.data.sys.country,
      description: response.data.weather[0].description,
      lowTemp: response.data.main.temp_min,
      maxTemp: response.data.main.temp_max,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    let apiKey = "362d842884ac0563209bde57166078ce";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="row">
            <div className="col cover">
              <form onSubmit={handleSubmit}>
                <div className="input-group input-group-lg">
                  <input
                    type="search"
                    id="search-input"
                    className="form-control form-control-lg rounded"
                    placeholder="Type a city..."
                    aria-label="Type Keywords"
                    aria-describedby="basic-addon2"
                    onChange={handleCityChange}
                  />
                  <button className="input-group-text border-0">
                    <i className="bi bi-search"></i>
                  </button>
                  <button className="input-group-text border-0 on-location">
                    <i className="bi bi-geo-alt"></i>
                  </button>
                </div>
              </form>
              <img
                src={`../images/${weatherData.icon}.png`}
                alt={weatherData.description}
                className="img-fluid illustration"
              />
              <h1>
                <span className="current-temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="units">
                  <a className="active celsius" href="/">
                    ºC
                  </a>
                  |
                  <a className="fahrenheit" href="/">
                    ºF
                  </a>
                </span>
              </h1>
              <h2>
                {weatherData.city}, {weatherData.country}
              </h2>
            </div>

            <div className="col main-data">
              <WeatherInfo data={weatherData} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
