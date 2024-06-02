import React from "react";
import Date from "../../../Date";
import Name from "../../../Name";
import TempRange from "../../../TempRange";
import WeatherIcon from "../../../WeatherIcon";
import Meta from "./Components/Meta";

const CurrentCity = () => {
  return (
    <div>
      <Date />
      <Name />
      <TempRange />
      <WeatherIcon />
      <Meta />
    </div>
  );
};

export default CurrentCity;
