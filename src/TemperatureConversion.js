import React, { useState } from "react";

export default function TemperatureConversion(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <h1>
        <span className="current-temperature">{Math.round(props.celsius)}</span>
        <span className="units">
          ºC |
          <a className="fahrenheit" href="/" onClick={showFahrenheit}>
            ºF
          </a>
        </span>
      </h1>
    );
  } else {
    return (
      <h1>
        <span className="current-temperature">{Math.round(fahrenheit())}</span>
        <span className="units">
          <a className="active celsius" href="/" onClick={showCelsius}>
            ºC
          </a>
          | ºF
        </span>
      </h1>
    );
  }
}
