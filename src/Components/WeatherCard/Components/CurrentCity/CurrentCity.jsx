import React from "react";
import Date from "../../../Date";
import Name from "../../../Name";
import TempRange from "../../../TempRange";
import WeatherIcon from "../../../WeatherIcon";
import Meta from "./Components/Meta";
import Image from "./Components/Image";
import bg from "./assets/Cloudy_day_background.png";
import Temperature from "./Components/Temperature ";
import icon from "../../../WeatherIcon/assets/Cloudy_day.png";

const CurrentCity = () => {
  return (
    <div className="flex flex-col items-center space-y-6">
      <Image imageUrl={bg} alt="cloud" className="absolute top-0 right-0" />
      <Date value="20 July, Sunday 12:00" className="text-white" />
      <Name value="Melbourne" className="text-white text-3xl font-bold" />
      <Temperature value="28" className="text-slate-200 text-3xl font-bold" />
      <TempRange value="26-29" className="text-white" />
      <WeatherIcon imageUrl={icon} alt="cloudyIcon" className="" />
      <Meta />
    </div>
  );
};

export default CurrentCity;
