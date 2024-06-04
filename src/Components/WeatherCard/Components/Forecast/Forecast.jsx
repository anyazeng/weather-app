import React from "react";
import DayOfWeek from "./Components /DayOfWeek";

const Forecast = () => {
  return (
    <div className="flex mt-6 pt-6 justify-between">
      <DayOfWeek />
      <DayOfWeek />
      <DayOfWeek />
      <DayOfWeek />
    </div>
  );
};

export default Forecast;
