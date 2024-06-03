import React from "react";
import Humidity from "./Components/Humidity";
import Wind from "./Components/Wind";
import AirQuality from "./Components/AirQuality/AirQuality";
import Somatosensory from "./Components/Somatosensory/Somatosensory";

const Meta = () => {
  return (
    <div>
      <Humidity />
      <Wind />
      <AirQuality />
      <Somatosensory />
    </div>
  );
};

export default Meta;
