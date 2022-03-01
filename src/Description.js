import React from "react";

import ReactAnimatedWeather from "react-animated-weather";
import "./Description.css";

export default function Description() {
  return (
    <div>
      <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="#77529e"
        size={50}
        animate={true}
      />
      <h3 className="description">Clear Sky</h3>
    </div>
  );
}
