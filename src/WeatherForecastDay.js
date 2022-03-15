import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <p className="day">{day()}</p>
      <img
        className="forecast-icon"
        src={`../weather-icons/${props.data.weather[0].icon}.svg`}
        alt=""
      />
      <br />
      <p className="high-temp">{maxTemperature()}º</p>
      <p className="low-temp">{minTemperature()}º</p>
    </div>
  );
}
