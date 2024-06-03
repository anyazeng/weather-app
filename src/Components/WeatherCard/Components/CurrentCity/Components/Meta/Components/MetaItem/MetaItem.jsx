import React from "react";
import Image from "../../../Image";

const MetaItem = ({ imageUrl, alt, value }) => {
  return (
    <div className="">
      <Image imageUrl={imageUrl} alt={alt} className="w-6 h-6" />
      {value}
    </div>
  );
};

export default MetaItem;
