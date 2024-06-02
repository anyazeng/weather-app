import React from "react";
import bg from "../../assets/bg.png";

const BackgroundImage = ({
  imageUrl,
  alt = "Descriptive alt text",
  children,
  className,
}) => {
  return (
    <div className={className} style={{ backgroundImage: `url(${imageUrl})` }}>
      <img src={imageUrl} alt={alt} className="hidden" />
      {children}
    </div>
  );
};

export default BackgroundImage;

// const BackgroundImage = () => {
//     return (
//       <div className="min-h-dvh bg-gradient-to-r from-violet-500 to-fuchsia-500">
//         <div className="absolute bottom-0 right-0">
//           <img src={bg} alt="" />
//         </div>
//       </div>
//     );
//   };
