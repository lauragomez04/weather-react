import React, { useState } from "react";
import axios from "axios";
import Forecast from "./Forecast";
import ReactAnimatedWeather from "react-animated-weather";
import Image from "./images/01d.png";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
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
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="row">
            <div className="col cover">
              <form>
                <div className="input-group input-group-lg">
                  <input
                    type="search"
                    id="search-input"
                    className="form-control form-control-lg rounded"
                    placeholder="Type a city..."
                    aria-label="Type Keywords"
                    aria-describedby="basic-addon2"
                  />
                  <button className="input-group-text border-0">
                    <i className="bi bi-search"></i>
                  </button>
                  <button className="input-group-text border-0 on-location">
                    <i className="bi bi-geo-alt"></i>
                  </button>
                </div>
              </form>

              <img src={Image} alt="" className="img-fluid illustration" />
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
              <div>
                <ReactAnimatedWeather
                  icon="CLEAR_DAY"
                  color="#77529e"
                  size={50}
                  animate={true}
                />
                <h3 className="description">{weatherData.description}</h3>
              </div>
              <div className="date-format">
                <div className="time">18:06</div>
                <div className="date">sat, 19 feb.</div>
              </div>
              <div className="container-2">
                <div className="row">
                  <div className="col">
                    <i className="bi bi-thermometer-half"></i>
                    <span className="current-highest-temp">
                      {Math.round(weatherData.maxTemp)}
                    </span>
                    º /
                    <span className="current-lowest-temp">
                      {Math.round(weatherData.lowTemp)}
                    </span>
                    <span className="degree">º</span>
                  </div>
                  <div className="col">
                    <i className="bi bi-wind"></i>{" "}
                    <span> {Math.round(weatherData.wind)}</span>km/h
                  </div>
                  <div className="col">
                    <i className="bi bi-moisture"></i>{" "}
                    <span> {weatherData.humidity}</span>%
                  </div>
                </div>
              </div>
              <div className="container-fluid" id="weather-forecast">
                <Forecast />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let city = "New York";
    let apiKey = "362d842884ac0563209bde57166078ce";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
