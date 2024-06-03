import React from "react";

const Temperature = ({ value, className }) => {
  return <div className={className}>{value}°C</div>;
};

export default Temperature;
