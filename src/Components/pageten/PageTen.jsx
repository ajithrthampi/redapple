import React from "react";
import locationgreen from "../../assets/locationgreen.png";
import sendgreen from "../../assets/sendgreen.png";
import callgreen from "../../assets/callgreen.png";
import button from "../../assets/SecondPageButton.png";

const PageTen = () => {
  return (
    <div className=" w-[100%] h-screen flex flex-col justify-center items-center">
      {/* first section */}
      <div className=" flex flex-col justify-center items-center sm:mb-[50px] sm:mt-[60px] vsm:mt-[60px] vvsm:mt-[60px]">
        <div className="font-Forum lg:text-[50px]  sm:text-[40px] vsm:text-[35px] vvsm:text-[30px]">
          Let's build a{" "}
        </div>
        <div className="font-Forum  lg:text-[50px]  sm:text-[40px] vsm:text-[35px] vvsm:text-[30px]">
          great textile network
        </div>
      </div>
      {/* second section */}
      <div className=" flex sm:flex-row vvsm:flex-col justify-center items-center vvsm:w-[100%] sm:mt-0 vsm:mt-[20px] vvsm:mt-[10px] sm:mb-[50px]">
        <div className="flex flex-col justify-center items-center gap-3 sm:border-r-2 sm:border-b-0  lg:w-[300px] md:w-[250px]  md:text-[15px] sm:w-[200px] sm:h-[80px] vvsm:text-sm vvsm:w-[100%]   vvsm:border-b-2  ">
          <img src={locationgreen} alt="" className=" vvsm:w-7 " />
          <div className="fontAdd">Hilite Platino, Maradu, Kochi</div>
        </div>

        <div className=" flex flex-col justify-center items-center gap-3 sm:border-r-2 sm:border-b-0  lg:w-[300px]   md:text-[15px] md:w-[250px] sm:w-[200px] sm:h-[80px] vvsm:text-sm vvsm:w-[100%]   vvsm:border-b-2 ">
          <img src={sendgreen} alt="" className=" vvsm:w-7 " />
          <div className="fontAdd">info@redappleapparels.com</div>
        </div>

        <div className=" flex flex-col justify-center items-center gap-3  lg:w-[300px]   md:text-[15px] md:w-[250px] sm:h-[80px] sm:w-[200px] vvsm:text-sm vvsm:w-[100%]   ">
          <img src={callgreen} alt="" className=" vvsm:w-7 " />
          <div className="fontAdd">+91 9946470099</div>
        </div>
      </div>
      {/* third section */}

      <div className=" flex justify-center  sm:mb-[30px] sm:mt-0 vsm:mt-[20px] vvsm:mt-[10px]">
        <img
          src={button}
          alt=""
          className="vsm:w-[220px] vsm:h-[50px] vvsm:w-[150px] vvsm:h-[40px] "
        />
      </div>

      {/* fourth section */}
      <div className=" flex sm:flex-row vvsm:flex-col items-center justify-evenly w-[100%] sm:mb-[10px] sm:mt-[20px] vsm:mt-[20px] vvsm:mt-[10px]">
        <div className="border-b-2 w-[100%] sm:hidden"></div>
        <div className=" flex justify-center items-center  w-[100%] ">
          <a
            href="#"
            class=" no-underline font-Lora font-normal lg:text-[22px] vvsm:text-[18px]"
          >
            INSTAGRAM
          </a>
        </div>

        <div className="border-r-2 h-[45px] vvsm:hidden sm:block"></div>
        <div className="border-b-2 w-[100%] sm:hidden"></div>

        <div className="  flex justify-center items-center w-[100%] sm:h-0 vvsm:h-[30px]">
          <a
            href="#"
            class=" no-underline font-Lora font-normal lg:text-[22px] vvsm:text-[18px]"
          >
            INSTAGRAM
          </a>
        </div>

        <div className="border-r-2 h-[45px] vvsm:hidden sm:block"></div>
        <div className="border-b-2 w-[100%] sm:hidden"></div>

        <div className="  flex justify-center items-center  w-[100%] sm:h-0 vvsm:h-[30px]">
          <a
            href="#"
            className=" no-underline font-Lora font-normal lg:text-[22px] vvsm:text-[18px]"
          >
            INSTAGRAM
          </a>
        </div>

        <div className="border-r-2 h-[45px] vvsm:hidden sm:block"></div>
        <div className="border-b-2 w-[100%] sm:hidden"></div>

        <div className="  flex justify-center items-center  w-[100%] sm:h-0 vvsm:h-[30px] ">
          <a
            href="#"
            class=" no-underline font-Lora font-normal lg:text-[22px] vvsm:text-[18px]"
          >
            INSTAGRAM
          </a>
        </div>

        <div className="border-r-2 h-[45px] vvsm:hidden sm:block"></div>
        <div className="border-b-2 w-[100%] sm:hidden"></div>

        <div className="  flex justify-center items-center  w-[100%]  sm:h-0 vvsm:h-[30px]">
          <a
            href="#"
            class=" no-underline font-Lora font-normal lg:text-[22px] vvsm:text-[18px]"
          >
            INSTAGRAM
          </a>
        </div>
        <div className="border-b-2 w-[100%] sm:hidden"></div>
      </div>

      {/* fifthpart */}
      <div className="fontAdd sm:text-[14px] vvsm:text-[10px] vsm:mt-[10px]">
        Copyright &copy; redappleapparels.com All Rights Reserved
      </div>
    </div>
  );
};

export default PageTen;
