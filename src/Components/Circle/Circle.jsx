import React, { useEffect, useState } from "react";

const RotatingTextCircle = () => {
  const [transformedText, setTransformedText] = useState([]);
  const textColorClass = "your-text-color-class"; // Replace with your desired class

  useEffect(() => {
    const originalText = "SCROLL DOWN • SCROLL DOWN •";
    const transformed = originalText.split("").map((char, i) => (
      <span key={i} style={{ transform: `rotate(${i * 11}deg)` }}>
        {char}
      </span>
    ));

    setTransformedText(transformed);
  }, []);

  return (
    <div
      className={`circle flex justify-center items-center absolute -bottom-[10%] left-[46%] w-[150px] h-[150px] top-0 z-0 ${textColorClass}`}
    >
      <div className="logo"></div>
      <div className="text animate-spin-slow z-50">
        {transformedText.map((char, i) => (
          <span key={i} style={{ transform: `rotate(${i * 2}deg)` }}>
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default RotatingTextCircle;
