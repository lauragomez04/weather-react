import React from "react";
import axios from "axios";

export default function WeatherOnPosition(props) {
  function searchLocation(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let units = "metric";
    let apiKey = "362d842884ac0563209bde57166078ce";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(props.currentLocation);
  }

  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }
  return (
    <div className="WeatherOnPosition">
      <button
        className="input-group-text border-0 on-location"
        onClick={getCurrentLocation}
      >
        <i className="bi bi-geo-alt"></i>
      </button>
    </div>
  );
}
