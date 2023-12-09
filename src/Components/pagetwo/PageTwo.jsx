import React, { useEffect, useState } from "react";
import "./PageTwo.css";
import redapplepagetwo from "../../assets/SecondPageRedapple.png";
import LiquidButton from "../liquidbutton/LiquidButton";

const PageTwo = () => {
  const [letterAnimation, setLetterAnimation] = useState([]);
  const text = "e are here for you";

  useEffect(() => {
    const animationElements = [];
    const words = text.split(" ");

    words.forEach((word, wordIndex) => {
      const letters = word.split("");
      letters.forEach((letter, letterIndex) => {
        animationElements.push(
          <span
            key={`${wordIndex}-${letterIndex}`}
            className="animated-letter"
            style={{
              animationDelay: `${wordIndex * 0.5 + letterIndex * 0.1}s`,
            }}
          >
            {letter}
          </span>
        );
      });

      if (wordIndex < words.length - 1) {
        animationElements.push(" ");
      }
    });

    setLetterAnimation(animationElements); // Update the state variable with the animation elements
  }, []);
  return (
    <div className="  landscape flex flex-col justify-center items-center h-[100vh]  gap-[10px] ">
      {/* upper division */}
      <div className=" flex flex-col justify-center items-center  sm:w-[100%] vvsm:w-[90%]  vvsm:mt-[40px]     ">
        <p className="  font-Forum font-normal  lg:text-[50px] md:text-[45px]  ssm:text-[40px] vsm:text-[36px]  vvsm:text-[25px]  ">
          W{letterAnimation}
        </p>

        {/* paragraph */}
        <div className="sm:block hidden">
          <div className=" flex flex-col justify-center items-center  w-[100%] sm:h-[120px] sm:mt-0   ">
            <div className="fontAdd      lg:text-[16px] md:text-[15px] sm:text-[13px]  ssm:text-[13px] vsm:text-[13px] vvsm:text-[11px] ">
              We are one of the unique apparel industries in India where trend
              is handy to all. Explore our daily arrivals{" "}
            </div>
            <div className="fontAdd      lg:text-[16px] md:text-[15px] sm:text-[13px]  ssm:text-[13px] vsm:text-[13px] vvsm:text-[11px] ">
              to view the modish designer clothing, footwear and accessories in
              the market. Red Apple Apparels
            </div>
            <div className="fontAdd      lg:text-[16px] md:text-[15px] sm:text-[13px]  ssm:text-[13px] vsm:text-[13px] vvsm:text-[11px] ">
              essentially targeted at the domestic and international brands, we
              are primarily manufacturers of all
            </div>
            <div className="fontAdd      lg:text-[16px] md:text-[15px] sm:text-[13px]  ssm:text-[13px] vsm:text-[13px] vvsm:text-[11px] ">
              categories of casual and formal apparels.
            </div>
          </div>
        </div>
        {/* smaller screen ssm */}
        <div className="ssm:block sm:hidden">
          <div className=" flex flex-col justify-center items-center  w-[100%] sm:h-[120px] sm:mt-0   ">
            <div className="fontAdd      lg:text-[16px] md:text-[15px] sm:text-[13px]  ssm:text-[13px] vsm:text-[13px] vvsm:text-[11px] ">
              We are one of the unique apparel industries in India where trend
              is handy to all. Explore our daily arrivals to view the modish
              designer clothing, footwear and accessories in the market. Red
              Apple Apparels essentially targeted at the domestic and
              international brands, we are primarily manufacturers of all
              categories of casual and formal apparels.
            </div>
            {/* <div className="fontAdd      lg:text-[16px] md:text-[15px] sm:text-[13px]  ssm:text-[13px] vsm:text-[13px] vvsm:text-[11px] ">
              to view the modish designer clothing, footwear and accessories in
              the market. Red Apple Apparels
            </div>
            <div className="fontAdd      lg:text-[16px] md:text-[15px] sm:text-[13px]  ssm:text-[13px] vsm:text-[13px] vvsm:text-[11px] ">
              essentially targeted at the domestic and international brands, we
              are primarily manufacturers of all
            </div>
            <div className="fontAdd      lg:text-[16px] md:text-[15px] sm:text-[13px]  ssm:text-[13px] vsm:text-[13px] vvsm:text-[11px] ">
              categories of casual and formal apparels.
            </div> */}
          </div>
        </div>
      </div>

      {/* Lowerdivision */}

      <div className=" flex  sm:flex-row justify-center items-center vvsm:flex-col  sm:gap-[10%] w-[100%]  vsm:gap-[10px]  ">
        <img
          src={redapplepagetwo}
          alt=""
          className=" md:w-[300px] md:h-[350px] ssm:w-[200px] ssm:h-[240px] vsm:w-[200px] vsm:h-[220px] vvsm:w-[150px] vvsm:h-[170px]"
        />

        <div className="    flex flex-col justify-center items-start sm:w-[40%]  vvsm:w-[90%]">
          <div className="   font-Forum font-normal lg:text-[80px] md:text-[70px]  ssm:text-[45px] vsm:text-[35px] vvsm:text-[25px]">
            About Us
          </div>
          <p className=" fontAdd font-400 md:text-[16px] vsm:text-[13px] vvsm:text-[11px] ">
            Our products come with the highest quality standards, which is the
            most important aspects all our customer expect from us. Our creative
            designs and to multinational conglomerates. We have creativity and
            technology that will help you attain your desired results.
          </p>

          <div>
            <div className="sm:w-[60%]  sm:mt-[20px] hidden sm:block ">
              <LiquidButton className="arrow">
                Book a call<span className="arrow">&rarr;</span>
              </LiquidButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
