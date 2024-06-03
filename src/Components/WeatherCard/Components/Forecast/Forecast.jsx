import React from "react";
import DayOfWeek from "./Components /DayOfWeek";

const Forecast = () => {
  return (
    <div className="flex">
      <DayOfWeek />
      <DayOfWeek />
      <DayOfWeek />
      <DayOfWeek />
    </div>
  );
};

export default Forecast;
