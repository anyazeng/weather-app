import React from "react";
import CurrentCity from "./Components/CurrentCity";
import Forecast from "./Components/Forecast";
import SearchBar from "./Components/SearchBar";
import SearchHistory from "./Components/SearchHistory";

const WeatherCard = () => {
  return (
    <div className="w-4/5 h-4/5 mx-auto rounded-[45px] bg-white overflow-hidden shadow-2xl shadow-blue-800 grid grid-cols-6 grid-rows-6 gap-4">
      <div
        className="col-span-2 row-span-6 m-6 border-8 rounded-[45px] relative"
        style={{
          background:
            "linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(120,160,250,1) 0%, rgba(110,146,232,1) 43%, rgba(48,100,249,1) 100%)",
        }}
      >
        <CurrentCity />
      </div>
      <div className="col-span-4 row-span-3 border-8 mr-6">
        <Forecast />
      </div>
      <div className="col-span-4 row-span-1 border-8 mr-6">
        <SearchBar />
      </div>
      <div className="col-span-4 row-span-2 border-8 mr-6">
        <SearchHistory />
      </div>
    </div>
  );
};

export default WeatherCard;
