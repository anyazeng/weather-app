import React from "react";

const TempRange = ({ value, className }) => {
  return <div className={className}>{value}°C</div>;
};

export default TempRange;
