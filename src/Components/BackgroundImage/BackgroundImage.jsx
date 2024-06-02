import React from "react";
import bg from "../../assets/bg.png";

const BackgroundImage = () => {
  return (
    <div imageUrl={bg} className="h-screen bg-cover flex item-center"></div>
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
