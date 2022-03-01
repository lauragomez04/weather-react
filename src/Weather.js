import React from "react";
import axios from "axios";
import Image from "./images/01d.png";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="input-group input-group-lg">
          <input
            type="search"
            id="search-input"
            className="form-control form-control-lg rounded"
            placeholder="Type a city..."
            aria-label="Type Keywords"
            aria-describedby="basic-addon2"
          />
          <button className="input-group-text border-0">
            <i className="bi bi-search"></i>
          </button>
          <button className="input-group-text border-0 on-location">
            <i className="bi bi-geo-alt"></i>
          </button>
        </div>
      </form>

      <img src={Image} alt="" className="img-fluid illustration" />
      <h1>
        <span className="current-temperature">12</span>
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
      <h2>New York, USA</h2>
    </div>
  );
}
