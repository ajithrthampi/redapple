// import React from "react";
// import "./LiquidButton.css";

// const LiquidButton = ({ children }) => {
//   return (
//     <div className="parallax-container">
//       <div className="parallax-content">
//         <div className="liquidButton">
//           <span className="liquidButton__text">{children}</span>
//           <span className="liquidButton__liquid"></span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LiquidButton;
import React, { useState } from "react";
import "./LiquidButton.css";

const LiquidButton = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`liquidButton ${isHovered ? "hovered" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="liquidButton__text">{children}</span>
      <div className="liquidButton__liquid"></div>
    </div>
  );
};

export default LiquidButton;
