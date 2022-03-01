import React from "react";
import "./Date.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Date() {
  return (
    <div className="date-format">
      <div className="time">18:06</div>
      <div className="date">sat, 19 feb.</div>
      <div className="last-update">Last updated</div>
    </div>
  );
}
