import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form id="search-bar">
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
  );
}
