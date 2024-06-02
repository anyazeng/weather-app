import React from "react";
import WeatherIcon from "../../../../../WeatherIcon";
import TempRange from "../../../../../TempRange";
import Name from "../../../../../Name";
import Date from "../../../../../Date";

const DayOfWeek = () => {
  return (
    <div>
      <Name />
      <Date />
      <WeatherIcon />
      <TempRange />
    </div>
  );
};

export default DayOfWeek;
