import React from "react";

export default function FormattedDate(props) {
  let days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayDate = props.date.getDate();
  let months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];
  let month = months[props.date.getMonth()];

  return (
    <div className="FormattedDate">
      <div className="time">
        {hours}:{minutes}
      </div>
      <div className="date">
        {day}, {dayDate} {month}.
      </div>
    </div>
  );
}
