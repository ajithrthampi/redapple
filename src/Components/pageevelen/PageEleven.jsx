import React from "react";
import subscribe from "../../assets/subscribe.png";
import applelogo from "../../assets/applelogo.png";
import round from "../../assets/round.png";

const PageEleven = () => {
  return (
    <div className="bg-[#D9D9D9] relative   flex sm:flex-row vvsm:flex-col sm:justify-around vvsm:justify-center sm:gap-0 vvsm:gap-[30px] items-center w-[100%] sm:h-[250px] vvsm:h-[350px]">
      <div>
        <div className="font-Forum font-normal text-[#000000] md:text-[32px] vvsm:text-[25px] ">
          Subscribe now and join the{" "}
        </div>
        <div className="font-Forum font-normal text-[#000000] md:text-[32px] vvsm:text-[25px]">
          fashion-forward revolution!
        </div>
      </div>
      <div className="relative">
        <input
          type="text"
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block md:w-[400px] sm:w-[300px] vvsm:w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pl-10"
          placeholder="Enter Email Address"
        />
        <img
          className="absolute right-0 top-1/2 transform -translate-y-1/2 md:w-[200px] md:h-[40px] vvsm:w-[140px]   vvsm:h-[40px]"
          src={subscribe}
          alt=""
        />
      </div>

      <div className=" flex justify-center items-center absolute -bottom-[75px]  z-30 w-[150px] h-[150px]">
        <img
          src={round}
          alt=""
          className=" animate-spin-slow vsm:w-[130px] vsm:h-[130px] vvsm:w-[80px] vvsm:h-[80px]"
        />
        <img
          src={applelogo}
          alt=""
          className=" absolute vsm:w-[40px] vsm:h-[50px] vvsm:h-[40px] vvsm:w-[30px]"
        />
      </div>
    </div>
  );
};

export default PageEleven;
