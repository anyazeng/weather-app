import React from "react";
import TempRange from "../../../../../TempRange";
import Name from "../../../../../Name";
import WeatherIcon from "../../../../../WeatherIcon";
import Icon from "../../../../../WeatherIcon/assets/Rain.png";

const City = () => {
  return (
    <div className="flex flex-col items-center rounded-2xl bg-dark-blue space-x-4 bg-indigo-400 w-48">
      <div>
        <WeatherIcon imageUrl={Icon} alt="rain" className="max-w-16 m-2" />
      </div>
      <div>
        <Name value="Sydney" className="text-2xl text-bold text-white mb-2" />
      </div>
      <div>
        <TempRange value="28 ~ 32" className="text-sm text-white pb-3" />
      </div>
    </div>
  );
};

export default City;
