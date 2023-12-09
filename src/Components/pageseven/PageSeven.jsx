import React from "react";
import backgroundImage from "../../assets/PageSevenbgimg2.png";
import PageSevenMobile from "../../Components/pageseven/PageSevenMobile";
import PageSevenSm from "../../Components/pageseven/PageSevenSm";
import "./PageSeven.css";

const PageSeven = () => {
  return (
    <div
      className=" bg-cover w-[100%]  h-[100vh] vvsm:h-[130vh]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className=" flex flex-col justify-center items-center w-[100%] h-screen vvsm:pt-52 sm:pt-10  ">
        <div className="font-Lora font- text-[#ffff] md:text-[40px] sm:text-[35px]  vsm:text-[30px] vvsm:text-[25px] ">
          What our Client Says
        </div>
        <div className="fontAdd text-[#ffff] lg:text-[16px] md:text-[15px] sm:text-[13px]  sm:block vvsm:hidden">
          This is the right place if you are in search for the best women
          outfits. Let’s redefine your styling system with
        </div>
        <div className="fontAdd text-[#ffff] lg:text-[16px] md:text-[15px] sm:text-[13px] sm:block vvsm:hidden">
          our huge store of trendy particulars. You can take online at us from
          the comfort of your home and get your
        </div>
        <div className="fontAdd text-[#ffff] lg:text-[16px] md:text-[15px] sm:text-[13px] sm:block vvsm:hidden">
          your favourites delivered right to your doorstep
        </div>

        {/* sm Paragraph */}

        <div className="fontAdd text-[#ffff] vsm:text-[15px] vvsm:text-[13px] sm:hidden">
          This is the right place if you are in search for the
        </div>
        <div className="fontAdd text-[#ffff] vsm:text-[15px] vvsm:text-[13px] sm:hidden">
          best women outfits. Let’s redefine your styling
        </div>
        <div className="fontAdd text-[#ffff] vsm:text-[15px] vvsm:text-[13px] sm:hidden">
          system with our huge store of trendy particulars.
        </div>

        <div className=" hidden sm:block h-[900vh] w-[85%] pt-28 ">
          <PageSevenSm />
        </div>
        <div className=" vvsm:block sm:hidden h-[900vh]">
          <PageSevenMobile />
        </div>

        {/* <div className="flex justify-center vsm:mt-[40px] vvsm:mt-[20px]">
          <img
            src={PageSevenButton}
            alt=""
            className="md:w-[200px] md:h-[40px] vvsm:w-[150px] vvsm:h-[40px]"
          />
        </div> */}
      </div>
    </div>
  );
};

export default PageSeven;
