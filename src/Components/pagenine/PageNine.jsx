import React, { useState, useEffect } from "react";
import pagenine from "../../assets/PageNine.png";
import launchingsoon from "../../assets/launchingsoon.png";
import "./PageNine.css";

const PageNine = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const svgContainer = document.getElementById("svg-container");
    const containerRect = svgContainer.getBoundingClientRect();
    const blobGroup = document.getElementById("blob-group");

    const x = e.clientX - containerRect.left;
    const y = e.clientY - containerRect.top;

    blobGroup.setAttribute("transform", `translate(${x}, ${y})`);
  };

  useEffect(() => {
    const svgContainer = document.getElementById("svg-container");
    const blobGroup = document.getElementById("blob-group");

    const updateBlobPosition = () => {
      const { x, y } = mousePosition;

      blobGroup.setAttribute("cx", x);
      blobGroup.setAttribute("cy", y);
    };

    if (svgContainer) {
      svgContainer.addEventListener("mousemove", handleMouseMove);
      updateBlobPosition();
    }

    return () => {
      if (svgContainer) {
        svgContainer.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [mousePosition]);

  return (
    <div className="page-nine">
      <div className="svgblob" id="svg-container">
        <svg viewBox="0 0 -100 100" xmlns="http://www.w3.org/2000/svg">
          <mask id="blobmask" className="">
            <rect width="100%" height="100%" fill="#fff"></rect>
            <g id="blob-group">
              <path
                fill="#000"
                d=" M401.000000,148.000000 
          C401.000000,163.020889 401.000000,178.041794 400.705078,193.198395 
          C397.524841,200.102921 394.970490,207.037384 391.683167,213.604965 
          C385.461914,226.033981 376.955750,236.931854 367.261871,246.799225 
          C360.599243,253.581070 353.502869,259.984100 346.202393,266.079865 
          C337.352875,273.469086 328.218750,280.537720 318.957855,287.408203 
          C310.127930,293.958954 300.945648,300.032898 291.977692,306.400177 
          C286.157684,310.532410 280.452148,314.825500 274.681305,319.027344 
          C265.908051,325.415192 257.173767,331.858276 248.331909,338.149963 
          C228.666367,352.143616 209.395813,366.763367 189.088120,379.758759 
          C175.361343,388.542877 160.387772,395.570618 144.145325,399.096680 
          C143.649185,399.204376 143.376740,400.342346 143.000000,401.000000 
          C128.312439,401.000000 113.624878,401.000000 98.800369,400.719482 
          C94.714058,398.729279 90.643814,397.251831 86.836082,395.270020 
          C69.658257,386.329590 54.563477,374.629211 42.303459,359.635559 
          C35.734592,351.602051 29.264841,343.257324 24.304604,334.201691 
          C19.081558,324.666260 15.627618,314.149475 11.556830,303.998840 
          C7.816787,294.672974 4.103995,285.342804 3.863234,275.026917 
          C3.823628,273.329926 1.999428,271.674591 0.999997,270.000000 
          C1.000000,244.312439 1.000000,218.624878 1.310506,192.820267 
          C2.429619,188.477356 2.986647,184.184143 4.096110,180.038803 
          C6.920718,169.485107 9.748994,158.920456 13.046459,148.509247 
          C15.430126,140.983231 18.342674,133.600037 21.439119,126.331985 
          C24.065199,120.167969 26.964090,114.068504 30.336773,108.287308 
          C34.563099,101.042854 39.181721,94.000854 44.021908,87.147545 
          C50.198997,78.401291 56.256550,69.480377 63.322273,61.479588 
          C69.324318,54.683239 76.462929,48.817188 83.500694,43.028294 
          C91.558144,36.400654 99.612564,29.574572 108.493332,24.197277 
          C117.413040,18.796412 127.160263,14.594637 136.898438,10.766979 
          C144.473114,7.789704 152.617935,6.283446 160.445633,3.913002 
          C162.105576,3.410328 163.489120,1.994892 165.000000,0.999999 
          C187.687561,1.000000 210.375122,1.000000 233.193863,1.322315 
          C233.983002,2.086953 234.584396,2.758626 235.307449,2.936948 
          C245.001144,5.327680 254.734360,7.560559 264.412872,10.009965 
          C277.933258,13.431661 290.677368,18.947941 302.568787,26.073563 
          C313.928406,32.880531 325.339020,39.885445 335.554504,48.237720 
          C345.398651,56.286415 354.063263,65.877556 362.668518,75.317551 
          C374.502472,88.299446 383.100677,103.478683 389.831940,119.612701 
          C393.428284,128.232651 395.929779,137.307373 399.026978,146.141235 
          C399.292419,146.898331 400.324219,147.386749 401.000000,148.000000 
        z"
              />
            </g>
          </mask>
          <rect
            width="100%"
            height="100%"
            mask="url('#blobmask')"
            fill="#144BEE"
          ></rect>
        </svg>

        <img
          src={launchingsoon}
          alt="Launching Soon"
          className="launching-soon-image"
        />

        <img src={pagenine} alt="" className="w-screen h-screen" />
      </div>
    </div>
  );
};

export default PageNine;
