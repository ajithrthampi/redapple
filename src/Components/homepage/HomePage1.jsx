import React, { useEffect, useState } from "react";
import HomepageImage from "../../assets/Homepageimage.png";
import "./HomePage.css"; // Import your CSS file

const HomePage1 = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newScale = 1 + scrollPosition / 1000; // Adjust the factor based on your preference

      setScale(Math.max(1, newScale));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const containerStyle = {
    transform: `scale(${scale})`,
    transformOrigin: "center",
    height: "100vh",
    overflow: "hidden",
    position: "relative",
  };

  const backgroundStyle = {
    backgroundImage: `url(${HomepageImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  };

  return (
    <div className="landing-page" style={containerStyle}>
      <div style={backgroundStyle}></div>
      {/* Your content goes here */}
    </div>
  );
};

export default HomePage1;
