import React from "react";
import Forecast from "./Forecast";
import FormattedDate from "./FormattedDate";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div>
        <img
          src={`../weather-icons/${props.data.icon}.svg`}
          className="icon"
          alt="sunny"
        />
        <h3 className="description">{props.data.description}</h3>
      </div>
      <div className="date-format">
        <FormattedDate date={props.data.date} />
      </div>
      <div className="container-2">
        <div className="row">
          <div className="col">
            <i className="bi bi-thermometer-half"></i>
            <span className="current-highest-temp">
              {Math.round(props.data.maxTemp)}
            </span>
            º /
            <span className="current-lowest-temp">
              {Math.round(props.data.lowTemp)}
            </span>
            <span className="degree">º</span>
          </div>
          <div className="col">
            <i className="bi bi-wind"></i>{" "}
            <span> {Math.round(props.data.wind)}</span>km/h
          </div>
          <div className="col">
            <i className="bi bi-moisture"></i>{" "}
            <span> {props.data.humidity}</span>%
          </div>
        </div>
      </div>
      <div className="container-fluid" id="weather-forecast">
        <Forecast />
      </div>
    </div>
  );
}
