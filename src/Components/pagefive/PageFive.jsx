import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import zoomimg from "../../assets/zoom.png";
import staytuned from "../../assets/Stay Tuned.png";

function PageFive() {
  const animationVariants = {
    initial: { y: "100%", opacity: 0, transition: { duration: 2 } },
    animate: { y: 0, opacity: 1, transition: { duration: 2 } },
    exit: { y: "100%", opacity: 0 },
  };
  const [zoom, setZoom] = useState(5.5);
  const MIN_ZOOM = 1;
  const MAX_ZOOM = 5;
  const ZOOM_SPEED = 0.08;

  const [showText, setShowText] = useState(false);
  const [showStayTunedImage, setShowStayTunedImage] = useState(false);

  const handleWheel = (e) => {
    if (e.deltaY > 0 && zoom > MIN_ZOOM) {
      setZoom((prevZoom) => Math.max(MIN_ZOOM, prevZoom - ZOOM_SPEED));
    } else if (e.deltaY < 0 && zoom < MAX_ZOOM) {
      setZoom((prevZoom) => Math.min(MAX_ZOOM, prevZoom + ZOOM_SPEED));
    }
  };

  const isZoomedIn = zoom === MIN_ZOOM;

  const zoomedElementOpacity = isZoomedIn ? 1 : 1;

  const zoomStyle = {
    transform: `scale(${zoom})`,
    opacity: zoomedElementOpacity,
  };

  useEffect(() => {
    const handleScroll = () => {
      const fifthPagePosition = window.innerHeight * 3.5;

      if (window.scrollY >= fifthPagePosition) {
        window.addEventListener("wheel", handleWheel);
        setShowText(true);

        const delay = 1000;
        const showStayTunedImageTimeout = setTimeout(() => {
          setShowStayTunedImage(true);
        }, delay);

        return () => {
          clearTimeout(showStayTunedImageTimeout);
        };
      } else {
        window.removeEventListener("wheel", handleWheel);
        setShowText(false);

        setShowStayTunedImage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [zoom]);

  return (
    <div
      className="zoom "
      style={{ width: "100%", height: "100vh", overflow: "hidden" }}
    >
      <div
        className="zoom-content flex  w-[100%] h-screen  justify-center items-center "
        style={zoomStyle}
      >
        {isZoomedIn && (
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.35)",
              zIndex: 1,
            }}
          ></div>
        )}
        {isZoomedIn && showText && (
          <motion.div
            initial="initial"
            animate="animate"
            className="absolute z-20 opacity-100 text-center text-white font-Poppins "
            exit="exit"
            variants={animationVariants}
          >
            <div className="flex flex-col  justify-evenly items-center  sm:w-[1200px] ssm:w-[1000px] vsm:w-[900px] gap-8 ">
              <div className="flex flex-col gap-8">
                <div className="text-4xl  tracking-wide   lg:text-4xl md:text-3xl sm:text-2xl ssm:text-xl vsm:text-lg vvsm:text-base ">
                  Stay Tuned With Us
                </div>

                <div className="text-8xl tracking-wider italic font-extrabold lg:text-7xl md:text-6xl sm:text-5xl ssm:text-[2.5rem] vsm:text-3xl vvsm:text-3xl">
                  COMING SOON !!!
                </div>
              </div>
              <div className="flex  w-[100%] justify-between items-center lg:px-14 md:px-[6rem] sm:px-[8rem] ssm:px-16 vsm:px-6 ">
                <div className=" bg-[#ffff]  h-[1px] w-[300px] "></div>
                <div className="text-4xl tracking-wide lg:text-4xl md:text-3xl sm:text-2xl ssm:text-xl vsm:text-lg vvsm:text-base ">
                  Featuring Akris Collection
                </div>
                <div className="bg-[#ffff]  h-[1px] w-[300px] "></div>
              </div>
            </div>
          </motion.div>
        )}
        {isZoomedIn && showStayTunedImage && (
          <img
            src={staytuned}
            alt=""
            className="h-screen w-[100%]"
            style={{
              position: "absolute",
              top: "43.5%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 3,
              opacity: 0.2,
            }}
          />
        )}
        <img src={zoomimg} alt="" className=" h-screen w-screen object-cover" />
      </div>
    </div>
  );
}

export default PageFive;
