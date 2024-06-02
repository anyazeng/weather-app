import React from "react";
import CurrentCity from "./Components/CurrentCity";
import Forecast from "./Components/Forecast";
import SearchBar from "./Components/SearchBar";
import SearchHistory from "./Components/SearchHistory";

const WeatherCard = () => {
  return (
    <div className="w-4/5 h4/5 mx-auto rounded-3xl bg-white overflow-hidden">
      <CurrentCity />
      <Forecast />
      <SearchBar />
      <SearchHistory />
    </div>
  );
};

export default WeatherCard;
