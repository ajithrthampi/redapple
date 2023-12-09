import React from "react";
import "./HomePage.css"; // Make sure to import your CSS file
import Landingpage from "../../assets/Homepageimage.png";
import MaskSvg from "../../assets/rectanglesvg.svg";

const YourSvgComponent = () => {
  return (
    <div className="bgimage">
      <img className="masked-image" src={Landingpage} alt="Homepage Image" />
      <svg
        className="clip-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
      >
        <defs>
          <clipPath id="svg-clip">
            <image
              href={MaskSvg}
              width="100%"
              height="100%"
              preserveAspectRatio="none"
            />
          </clipPath>
        </defs>
        <rect
          width="100%"
          height="100%"
          clipPath="url(#svg-clip)"
          fill="#fff"
        />
      </svg>
    </div>
  );
};

export default YourSvgComponent;
