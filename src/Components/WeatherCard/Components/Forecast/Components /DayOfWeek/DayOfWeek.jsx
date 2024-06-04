import React from "react";
import WeatherIcon from "../../../../../WeatherIcon";
import TempRange from "../../../../../TempRange";
import Name from "../../../../../Name";
import Date from "../../../../../Date";
import Icon from "../../../../../WeatherIcon/assets/Sunny.png";

const DayOfWeek = () => {
  return (
    <div className="flex flex-col items-center">
      <Name value="Monday" className="text-2xl font-bold text-dark-blue" />
      <Date value="24 July" className="text-base text-dark-blue" />
      <WeatherIcon imageUrl={Icon} alt="sunny" className="max-w-40" />
      <TempRange value="20 ~ 25" className="text-lg text-dark-blue" />
    </div>
  );
};

export default DayOfWeek;
