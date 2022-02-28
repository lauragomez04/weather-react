import React from "react";
import "./Humidity.css";

export default function Humidity() {
  return (
    <div className="row">
      <div className="col">
        <i className="bi bi-thermometer-half"></i>
        <span className="current-highest-temp"> 10</span>º /
        <span className="current-lowest-temp">6</span>
        <span className="degree">º</span>
      </div>
      <div className="col">
        <i className="bi bi-wind"></i> <span> 39</span>km/h
      </div>
      <div className="col">
        <i className="bi bi-moisture"></i> <span> 54</span>%
      </div>
    </div>
  );
}
