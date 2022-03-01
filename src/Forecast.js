import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="row">
      <div className="col forecast">
        <p>Sun</p>
        <ReactAnimatedWeather
          icon="CLEAR_DAY"
          color="#77529e"
          size={30}
          animate={true}
        />
        <br />
        <p className="high-temp">18º</p>
        <p className="low-temp">9º</p>
      </div>
      <div className="col forecast">
        <p>Mon</p>
        <ReactAnimatedWeather
          icon="RAIN"
          color="#77529e"
          size={30}
          animate={true}
        />
        <img src="" alt="" />
        <br />
        <p className="high-temp">18º</p>
        <p className="low-temp">10º</p>
      </div>
      <div className="col forecast">
        <p>Tue</p>
        <ReactAnimatedWeather
          icon="PARTLY_CLOUDY_DAY"
          color="#77529e"
          size={30}
          animate={true}
        />
        <img src="" alt="" />
        <br />
        <p className="high-temp">20º</p>
        <p className="low-temp">8º</p>
      </div>
      <div className="col forecast">
        <p>Wed</p>
        <ReactAnimatedWeather
          icon="CLOUDY"
          color="#77529e"
          size={30}
          animate={true}
        />
        <img src="" alt="" />
        <br />
        <p className="high-temp">20º</p>
        <p className="low-temp">11º</p>
      </div>
      <div className="col forecast">
        <p>Thu</p>
        <ReactAnimatedWeather
          icon="WIND"
          color="#77529e"
          size={30}
          animate={true}
        />
        <img src="" alt="" />
        <br />
        <p className="high-temp">20º</p>
        <p className="low-temp">11º</p>
      </div>
    </div>
  );
}
