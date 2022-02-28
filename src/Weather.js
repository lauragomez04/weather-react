import React from "react";
import Image from "./images/01d.png";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "New York, USA",
    temperature: 12,
  };
  return (
    <div className="Weather">
      <img src={Image} alt="" className="img-fluid illustration" />
      <h1>
        <span>{weatherData.temperature}</span>
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
      <h2>{weatherData.city}</h2>
    </div>
  );
}
