import React from "react";
import Icon from "../weather-icons/01d.sgv";
import "./Description.css";

export default function Description() {
  return (
    <div>
      <img className="mainIcon" src={Icon} alt="sunny" />
      <h3 className="description">Clear Sky</h3>
    </div>
  );
}
