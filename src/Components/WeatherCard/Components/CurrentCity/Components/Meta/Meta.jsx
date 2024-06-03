import React from "react";
import MetaItem from "./Components/MetaItem";
import Humidity from "./assets/humidity.svg";
import Wind from "./assets/wind.svg";
import AirQuality from "./assets/airQuality.svg";
import Somatosensory from "./assets/somatosensory.svg";

const Meta = () => {
  return (
    <div className="flex justify-between bg-slate-50 rounded-2xl w-4/5 p-5">
      <MetaItem imageUrl={Humidity} alt="Humidity" value="85%" />
      <MetaItem imageUrl={Wind} alt="Wind" value="9km/h" />
      <MetaItem imageUrl={AirQuality} alt="AirQuality" value="75pg" />
      <MetaItem imageUrl={Somatosensory} alt="Somatosensory" value="26°C" />
    </div>
  );
};

export default Meta;
