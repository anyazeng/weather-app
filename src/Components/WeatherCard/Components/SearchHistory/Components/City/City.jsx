import React from "react";
import TempRange from "../../../../../TempRange";
import Name from "../../../../../Name";
import WeatherIcon from "../../../../../WeatherIcon";

const City = () => {
  return (
    <div>
      <WeatherIcon />
      <Name />
      <TempRange />
    </div>
  );
};

export default City;
