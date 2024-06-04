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
    <div className="flex flex-col items-center shadow-md">
      <Image imageUrl={bg} alt="cloud" className="absolute top-0 right-0" />
      <Date
        value="20 July, Sunday 12:00"
        className="text-white absolute left-8 mt-4"
      />
      <div>
        <Name
          value="Melbourne"
          className="text-white text-3xl font-bold mt-20 mb-12"
        />
      </div>
      <Temperature value="28" className="text-slate-200 text-8xl font-bold" />
      <TempRange value="26-29" className="text-white" />
      <WeatherIcon
        imageUrl={icon}
        alt="cloudyIcon"
        className="w-160 h-160 mb-16"
      />
      <Meta className="mb-10" />
    </div>
  );
};

export default CurrentCity;
