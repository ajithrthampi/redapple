// import React from "react";
// import backgroundImage from "../../assets/pageEightbgimg.png";
// import blackshade from "../../assets/blackshade.png";
// import pageEightfooter from "../../assets/PageEightfooter.png";
// import vsmbgEightfooter from "../../assets/vsmbackgroundimage.png";
// import image from "../../assets/image.png";
// import truck from "../../assets/truck.png";
// import money from "../../assets/money.png";
// import hover from "../../assets/Hover.png";

// const PageEight = () => {
//   return (
//     <div
//       className="relative flex justify-center items-center bg-cover w-[100%] sm:h-screen vvsm:h-[800px] overflow-hidden "
//       style={{ backgroundImage: `url(${backgroundImage})` }}
//     >
//       <div
//         className="absolute z-10 bg-cover w-[100%] sm:h-screen vvsm:h-[800px]"
//         style={{ backgroundImage: `url(${blackshade})`, opacity: 0.5 }}
//       ></div>

//       <div className="absolute z-20 font-Forum text-[#ffff]   md:text-[45px] sm:mb-0 ssm:text-[35px] vvsm:text-[32px] md:mb-[25px]  sm:-mt-[70px] vsm:mb-0 vsm:-mt-[270px] vvsm:mb-[300px]">
//         Together, let’s create the{" "}
//       </div>
//       <div className="absolute z-20 font-Forum text-[#ffff]   md:text-[45px] sm:mb-0 ssm:text-[35px] vvsm:text-[32px] vsm:mb-[190px] vvsm:mb-[230px] ">
//         next generation{" "}
//       </div>
//       <div className="absolute z-20 font-Forum text-[#ffff]   md:text-[45px] sm:mb-0 ssm:text-[35px] vvsm:text-[32px] md:mt-[110px] sm:mt-[90px] vsm:mb-[100px]  vvsm:mb-[150px]">
//         of textile network
//       </div>

//       {/* Footer Part */}
//       <div className="absolute z-20 bottom-0 w-[90%] h-[170px] sm:mb-0 vvsm:mb-[210px] ml-40    ">
//         <img
//           src={pageEightfooter}
//           alt=""
//           className="absolute z-30 bottom-0 right-0 w-[95%] h-[170px] sm:block  vvsm:hidden "
//         />

//         <img
//           src={vsmbgEightfooter}
//           alt=""
//           className=" sm:hidden vvsm:w-[700px]   vvsm:h-[380px]"
//         />

//         {/* Additional Content (Sections) */}

//         <div className=" flex sm:flex-row justify-evenly items-center absolute   z-30  sm:w-[85%] sm:h-[80%] sm:mr-0   ssm:top-0 ssm:right-0    vvsm:flex-col vvsm:w-[90%] vvsm:h-[360px] vvsm:top-0 vvsm:right-0  vvsm:mt-[30px] vsm:mr-[20px] vvsm:mr-[15px]">
//           {/* footer division one */}
//           <div className=" flex flex-col justify-center xl:w-[15%]   lg:w-[30%] md:w-[160px]  sm:w-[160px]  sm:border-b-0  ssm:w-[70%]  ssm:border-b-2 vvsm:w-[70%] vvsm:h-[100px] vvsm:border-b-2  -ml-20 ">
//             <div className=" font-Lora font-normal text-[#ffff]  lg:text-[35px] vvsm:text-[25px]">
//               Benifits
//             </div>
//             <div className="fontAdd text-[#ffff]  lg:text-[16px] sm:text-[14px] vvsm:text-[13px]">
//               Get your reselling hassle free from no where
//             </div>
//           </div>
//           <div className=" h-[50px]  border-r-[1px] vvsm:hidden sm:block -ml-4"></div>
//           {/* footer division two */}
//           <div className="group relative hover:h-48 hover:bg-violet-900 hover:-translate-y-6 hover:pt-7 lg:w-[210px] md:w-[140px] sm:w-[160px] sm:border-b-0 vvsm:w-[70%] vvsm:h-[100px] vvsm:border-b-2 transition-all duration-500 rounded-t-md -ml-3 ">
//             <div className="flex flex-col justify-center items-center">
//               <img
//                 src={money}
//                 alt=""
//                 className="md:w-[50px] md:h-[50px] sm:w-[40px] sm:h-[40px] vvsm:w-[35px] vvsm:h-[35px]"
//               />
//               <p className="font-Lora font-normal text-[#ffff] sm:text-[16px] ssm:text-[15px] ssm:mt-[10px] vvsm:text-[18px] vvsm:mt-[5px]">
//                 No Capital Needed
//               </p>
//               <p className="hidden group-hover:block text-sm font-Lora text-white mt-3 ml-7 transition-transform duration-300 transform ">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               </p>
//               {/* Image to be shown on hover */}
//               <img
//                 src={hover}
//                 alt=""
//                 className="opacity-0 transition-all ease-in-out duration-300 group-hover:opacity-100 group-hover:top-0 group-hover:right-0 absolute w-[80px] h-[100px] -top-30 -right-30"
//               />
//             </div>
//           </div>
//           {/* <div className=" h-[50px]  border-r-[1px] vvsm:hidden sm:block"></div> */}
//           {/* footer division three */}
//           <div className="group hover:h-48 hover:bg-violet-900 hover:-translate-y-6 hover:pt-7  lg:w-[210px]  sm:w-[160px] sm:h-[100px]  vvsm:w-[70%] vvvsm:h-[130px]  rounded-t-md transition-all duration-500 -ml-3 ">
//             <div className="flex flex-col justify-center items-center">
//               <img
//                 src={truck}
//                 alt=""
//                 className=" vvsm:w-[40px] vvsm:h-[40px]"
//               />
//               <p className="font-Lora font-normal text-[#ffff] lg:text-[18px] vvsm:text-[17px]">
//                 Drop shipping facility
//               </p>
//               <p className=" fontAdd text-[#ffff]  vvsm:text-[13px] ">
//                 All popular on our all outlets.
//               </p>
//               <p className="hidden group-hover:block text-sm font-Lora text-white mt-3 ml-6 transition-transform duration-300 transform ">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               </p>
//               <img
//                 src={hover}
//                 alt=""
//                 className="opacity-0 transition-all ease-in-out duration-300 group-hover:opacity-100 group-hover:top-0 group-hover:right-0 absolute w-[80px] h-[100px] -top-30 -right-30"
//               />
//             </div>
//           </div>
//           {/* <div className=" h-[50px]  border-r-[1px] vvsm:hidden sm:block"></div> */}
//           {/* footer division four */}
//           <div className=" group hover:h-48 hover:bg-violet-900 hover:-translate-y-6 hover:pt-7 lg:w-[210px]  md:w-[130px]  sm:w-[100px] sm:h-[100px] sm:block hidden rounded-t-md transition-all duration-500 -ml-3  ">
//             <div className="flex flex-col  justify-center items-center  ">
//               <img src={image} alt="" className="sm:w-[40px] sm:h-[40px]" />
//               <p className="font-Lora font-normal text-[#ffff]  sm:text-[16px] sm:mt-[15px] ">
//                 Use our Image
//               </p>
//               <p className="hidden group-hover:block text-sm font-Lora text-white mt-3 ml-5 transition-transform duration-300 transform ">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               </p>
//               <img
//                 src={hover}
//                 alt=""
//                 className="opacity-0 transition-all ease-in-out duration-300 group-hover:opacity-100 group-hover:top-0 group-hover:right-0 absolute w-[80px] h-[100px] -top-30 -right-30"
//               />
//             </div>
//           </div>
//           {/* <div className=" h-[50px]  border-r-[1px] vvsm:hidden sm:block"></div> */}
//           {/* footer division five */}
//           <div className=" group hover:h-48 hover:bg-violet-900 hover:-translate-y-6 hover:pt-7 lg:w-[210px]  md:w-[130px]  sm:w-[100px] sm:h-[100px] sm:block hidden rounded-t-md transition-all duration-500 mr-24 ">
//             <div className="flex flex-col  justify-center items-center  ">
//               <img src={image} alt="" className="sm:w-[40px] sm:h-[40px]" />
//               <p className="font-Lora font-normal text-[#ffff]  sm:text-[16px] sm:mt-[15px] ">
//                 Use our Image
//               </p>
//               <p className="hidden group-hover:block text-sm font-Lora text-white mt-3 ml-5 transition-transform duration-300 transform ">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               </p>
//               <img
//                 src={hover}
//                 alt=""
//                 className="opacity-0 transition-all ease-in-out duration-300 group-hover:opacity-100 group-hover:top-0 group-hover:right-0 absolute w-[80px] h-[100px] -top-30 -right-30"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PageEight;

// <div className=" flex sm:flex-row justify-evenly items-center absolute   z-30  sm:w-[85%] sm:h-[80%] sm:mr-0   ssm:top-0 ssm:right-0    vvsm:flex-col vvsm:w-[90%] vvsm:h-[360px] vvsm:top-0 vvsm:right-0  vvsm:mt-[30px] vsm:mr-[20px] vvsm:mr-[15px]">
//           footer division one
//           <div className=" flex flex-col justify-center xl:w-[15%]   lg:w-[30%] md:w-[160px]  sm:w-[160px]  sm:border-b-0  ssm:w-[70%]  ssm:border-b-2 vvsm:w-[70%] vvsm:h-[100px] vvsm:border-b-2  -ml-20 ">
//             <div className=" font-Lora font-normal text-[#ffff]  lg:text-[35px] vvsm:text-[25px]">
//               Benifits
//             </div>
//             <div className="fontAdd text-[#ffff]  lg:text-[16px] sm:text-[14px] vvsm:text-[13px]">
//               Get your reselling hassle free from no where
//             </div>
//           </div>

//           <div className=" h-[50px]  border-r-[1px] vvsm:hidden sm:block -ml-4"></div>

//           footer division two
//           <div className="group relative hover:h-48 hover:bg-violet-900 hover:-translate-y-6 hover:pt-7 lg:w-[210px] md:w-[140px] sm:w-[160px] sm:border-b-0 vvsm:w-[70%] vvsm:h-[100px] vvsm:border-b-2 transition-all duration-500 rounded-t-md -ml-3 ">
//             <div className="flex flex-col justify-center items-center">
//               <img
//                 src={money}
//                 alt=""
//                 className="md:w-[50px] md:h-[50px] sm:w-[40px] sm:h-[40px] vvsm:w-[35px] vvsm:h-[35px]"
//               />
//               <p className="font-Lora font-normal text-[#ffff] sm:text-[16px] ssm:text-[15px] ssm:mt-[10px] vvsm:text-[18px] vvsm:mt-[5px]">
//                 No Capital Needed
//               </p>
//               <p className="hidden group-hover:block text-sm font-Lora text-white mt-3 ml-7 transition-transform duration-300 transform ">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               </p>
//               Image to be shown on hover

//               <img
//                 src={hover}
//                 alt=""
//                 className="opacity-0 transition-all ease-in-out duration-300 group-hover:opacity-100 group-hover:top-0 group-hover:right-0 absolute w-[80px] h-[100px] -top-30 -right-30"
//               />
//             </div>
//           </div>

//           <div className=" h-[50px]  border-r-[1px] vvsm:hidden sm:block"></div>
//           footer division three

//           <div className="group hover:h-48 hover:bg-violet-900 hover:-translate-y-6 hover:pt-7  lg:w-[210px]  sm:w-[160px] sm:h-[100px]  vvsm:w-[70%] vvvsm:h-[130px]  rounded-t-md transition-all duration-500 -ml-3 ">
//             <div className="flex flex-col justify-center items-center">
//               <img
//                 src={truck}
//                 alt=""
//                 className=" vvsm:w-[40px] vvsm:h-[40px]"
//               />
//               <p className="font-Lora font-normal text-[#ffff] lg:text-[20px] vvsm:text-[17px]">
//                 Drop shipping facility
//               </p>
//               <p className=" fontAdd text-[#ffff]  vvsm:text-[13px] ">
//                 All popular on our all outlets.
//               </p>
//               <p className="hidden group-hover:block text-sm font-Lora text-white mt-3 ml-6 transition-transform duration-300 transform ">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               </p>
//               <img
//                 src={hover}
//                 alt=""
//                 className="opacity-0 transition-all ease-in-out duration-300 group-hover:opacity-100 group-hover:top-0 group-hover:right-0 absolute w-[80px] h-[100px] -top-30 -right-30"
//               />
//             </div>
//           </div>

//           <div className=" h-[50px]  border-r-[1px] vvsm:hidden sm:block"></div>

//           footer division four
//           <div className=" group hover:h-48 hover:bg-violet-900 hover:-translate-y-6 hover:pt-7 lg:w-[210px]  md:w-[130px]  sm:w-[100px] sm:h-[100px] sm:block hidden rounded-t-md transition-all duration-500 -ml-3  ">
//             <div className="flex flex-col  justify-center items-center  ">
//               <img src={image} alt="" className="sm:w-[40px] sm:h-[40px]" />
//               <p className="font-Lora font-normal text-[#ffff]  sm:text-[16px] sm:mt-[15px] ">
//                 Use our Image
//               </p>
//               <p className="hidden group-hover:block text-sm font-Lora text-white mt-3 ml-5 transition-transform duration-300 transform ">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               </p>
//               <img
//                 src={hover}
//                 alt=""
//                 className="opacity-0 transition-all ease-in-out duration-300 group-hover:opacity-100 group-hover:top-0 group-hover:right-0 absolute w-[80px] h-[100px] -top-30 -right-30"
//               />
//             </div>
//           </div>
//           <div className=" h-[50px]  border-r-[1px] vvsm:hidden sm:block"></div>
//           footer division five
//           <div className=" group hover:h-48 hover:bg-violet-900 hover:-translate-y-6 hover:pt-7 lg:w-[210px]  md:w-[130px]  sm:w-[100px] sm:h-[100px] sm:block hidden rounded-t-md transition-all duration-500 mr-24 ">
//             <div className="flex flex-col  justify-center items-center  ">
//               <img src={image} alt="" className="sm:w-[40px] sm:h-[40px]" />
//               <p className="font-Lora font-normal text-[#ffff]  sm:text-[16px] sm:mt-[15px] ">
//                 Use our Image
//               </p>
//               <p className="hidden group-hover:block text-sm font-Lora text-white mt-3 ml-5 transition-transform duration-300 transform ">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               </p>
//               <img
//                 src={hover}
//                 alt=""
//                 className="opacity-0 transition-all ease-in-out duration-300 group-hover:opacity-100 group-hover:top-0 group-hover:right-0 absolute w-[80px] h-[100px] -top-30 -right-30"
//               />
//             </div>
//           </div>
//         </div>
import React from "react";
import backgroundImage from "../../assets/pageEightbgimg.png";
import blackshade from "../../assets/blackshade.png";
import pageEightfooter from "../../assets/PageEightfooter.png";
import vsmbgEightfooter from "../../assets/vsmbackgroundimage.png";
import image from "../../assets/image.png";
import truck from "../../assets/truck.png";
import money from "../../assets/money.png";
import hover from "../../assets/Hover.png";

const PageEight = () => {
  return (
    <div
      className=" relative flex  justify-center items-center bg-cover w-[100%] sm:h-screen vvsm:h-[1000px]  "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div
        className="absolute z-10 bg-cover w-[100%] sm:h-screen vvsm:h-[1000px]"
        style={{ backgroundImage: `url(${blackshade})`, opacity: 0.5 }}
      ></div>

      <div className=" absolute z-20 font-Forum text-[#ffff]   md:text-[45px] sm:mb-0 ssm:text-[35px] vvsm:text-[32px] md:mb-[25px]  sm:-mt-[70px] vsm:mb-0 vsm:-mt-[550px] vvsm:mb-[300px]">
        Together, let’s create the{" "}
      </div>
      <div className=" absolute z-20 font-Forum text-[#ffff]   md:text-[45px] sm:mb-0 ssm:text-[35px] vvsm:text-[32px] vsm:mb-[470px] vvsm:mb-[230px] ">
        next generation{" "}
      </div>
      <div className=" absolute z-20 font-Forum text-[#ffff]   md:text-[45px] sm:mb-0 ssm:text-[35px] vvsm:text-[32px] md:mt-[110px] sm:mt-[90px] vsm:mb-[380px]  vvsm:mb-[150px]">
        of textile network
      </div>

      {/* footer part */}

      <div className=" bg-red-10 absolute z-20 bottom-0 w-[100%] h-[170px] sm:mb-0 vvsm:mb-[210px] ">
        <img
          src={pageEightfooter}
          alt=""
          className="absolute z-30 bottom-0 right-0 lg:w-[90%] md:w-[92%] sm:w-[90%] h-[170px] sm:block  vvsm:hidden "
        />

        <img
          src={vsmbgEightfooter}
          alt=""
          className=" sm:hidden vvsm:w-[700px]   vvsm:h-[500px] -mt-24"
        />
        <div className=" flex sm:flex-row justify-evenly items-center absolute   z-30  sm:w-[85%] sm:h-[80%] sm:mr-0   ssm:top-0 ssm:right-0    vvsm:flex-col vvsm:w-[90%] vvsm:h-[360px] vvsm:top-0 vvsm:right-0  vvsm:mt-[30px] vsm:mr-[20px] vvsm:mr-[15px]">
          {/* fotter division one */}
          <div className=" flex flex-col justify-center  lg:w-[200px] md:w-[150px]  sm:w-[120px]  sm:border-b-0  ssm:w-[67%]  ssm:border-b-2 vvsm:w-[70%] vvsm:h-[100px] vvsm:border-b-2 md:-ml-8 vvsm:-mt-32 sm:mt-0 ">
            <div className=" font-Lora font-normal text-[#ffff]  lg:text-[35px] md:text-[28px] vvsm:text-[25px] sm:text-left vvsm:text-center ">
              Benifits
            </div>
            <div className="fontAdd text-[#ffff] lg:text-[16px] sm:text-[13px] vvsm:text-[13px] vvsm:hidden  sm:block">
              Get your reselling hassle-free from nowhere
            </div>
          </div>

          <div className=" h-[50px]  border-r-[1px] vvsm:hidden sm:block md:ml-4 xl:-ml-10"></div>

          {/* footer division two */}

          <div className="group relative hover:h-48 hover:bg-violet-900 hover:-translate-y-6 hover:pt-7 transition-all duration-500 rounded-t-md -ml-3   lg:w-[200px]   md:w-[200px]  sm:w-[160px]  sm:border-b-0   vvsm:w-[70%] vvsm:h-[100px] vvsm:border-b-2">
            <div className="flex flex-col justify-center items-center ">
              <img
                src={money}
                alt=""
                className=" md:w-[50px] md:h-[50px] sm:w-[40px] sm:h-[40px] vvsm:w-[35px] vvsm:h-[35px]"
              />
              <p className="font-Lora font-normal text-[#ffff]  sm:text-[16px] ssm:text-[15px] ssm:mt-[10px] vvsm:text-[18px] vvsm:mt-[5px]">
                No Capital Needed
              </p>
              <p className="hidden group-hover:block text-sm font-Lora text-white mt-3 ml-7 transition-transform duration-300 transform ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              {/* Image to be shown on hover */}

              <img
                src={hover}
                alt=""
                className="opacity-0 transition-all ease-in-out duration-300 group-hover:opacity-100 group-hover:top-0 group-hover:right-0 absolute w-[80px] h-[100px] -top-30 -right-30"
              />
            </div>
          </div>

          {/* <div className=" h-[50px]  border-r-[1px] vvsm:hidden sm:block"></div> */}
          {/* footer division three */}

          <div className=" group relative hover:h-48 hover:bg-violet-900 hover:-translate-y-6 hover:pt-7 transition-all duration-500 rounded-t-md -ml-3   lg:w-[250px]  sm:w-[200px] sm:h-[100px]  vvsm:w-[70%] vvvsm:h-[130px] sm:border-b-0  vvsm:border-b-2 ">
            <div className="flex flex-col justify-center items-center vvsm:mb-9 sm:mb-0 ">
              <img
                src={truck}
                alt=""
                className=" vvsm:w-[40px] vvsm:h-[40px]"
              />
              <p className="font-Lora font-normal text-[#ffff] lg:text-[20px] vvsm:text-[17px]">
                Drop shipping facility
              </p>
              <p className=" fontAdd text-[#ffff]  vvsm:text-[13px]  ">
                All popular on our all outlets.
              </p>
              <p className="hidden group-hover:block text-sm font-Lora text-white mt-3 ml-7 transition-transform duration-300 transform ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              {/* Image to be shown on hover */}

              <img
                src={hover}
                alt=""
                className="opacity-0 transition-all ease-in-out duration-300 group-hover:opacity-100 group-hover:top-0 group-hover:right-0 absolute w-[80px] h-[100px] -top-30 -right-30"
              />
            </div>
          </div>

          {/* <div className=" h-[50px]  border-r-[1px] vvsm:hidden sm:block"></div> */}

          {/* footer division four */}
          <div className="group relative hover:h-48 hover:bg-violet-900 hover:-translate-y-6 hover:pt-7 transition-all duration-500 rounded-t-md -ml-3   lg:w-[200px]   md:w-[200px]  sm:w-[160px]  sm:border-b-0   vvsm:w-[70%] vvsm:h-[100px]  ">
            <div className="flex flex-col  justify-center items-center  ">
              <img
                src={image}
                alt=""
                className="sm:w-[40px] sm:h-[40px] vvsm:w-[40px]"
              />
              <p className="font-Lora font-normal text-[#ffff]  sm:text-[16px] sm:mt-[15px] ">
                Use our Image
              </p>
              <p className="hidden group-hover:block text-sm font-Lora text-white mt-3 ml-7 transition-transform duration-300 transform ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              {/* Image to be shown on hover */}

              <img
                src={hover}
                alt=""
                className="opacity-0 transition-all ease-in-out duration-300 group-hover:opacity-100 group-hover:top-0 group-hover:right-0 absolute w-[80px] h-[100px] -top-30 -right-30"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageEight;
