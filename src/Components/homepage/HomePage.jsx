// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import redapple from "../../assets/videoredapple.mp4";
// import redaapleimage from "../../assets/Homepageimage.png";
// import "./HomePage.css";

// let lastScrollPosition = 0;

// const Homepage = () => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const navigate = useNavigate();
//   const [transformedText, setTransformedText] = useState([]);
//   const [textColorClass, setTextColorClass] = useState("");
//   const [textPosition, setTextPosition] = useState(0);

//   const handleScroll = () => {
//     const scrollPosition = window.scrollY;

//     // Calculate the new position for the text based on scroll position
//     let newPosition = (scrollPosition / window.innerHeight) * 100;

//     // Limit the text position to a maximum of 30vh
//     newPosition = Math.min(newPosition, 30);

//     // Update the text position
//     setTextPosition(newPosition);
//   };

//   const handleVideoScroll = () => {
//     const video = document.getElementById("video");
//     const scrollPosition = window.scrollY;

//     if (scrollPosition > lastScrollPosition) {
//       // Scrolling down
//       if (!isPlaying) {
//         setIsPlaying(true);
//         video.play();
//       }
//     } else {
//       // Scrolling up
//       if (isPlaying) {
//         setIsPlaying(false);
//         video.pause();
//       }
//     }

//     lastScrollPosition = scrollPosition;

//     // Check if the video has reached the end
//     if (video.currentTime === video.duration) {
//       setIsPlaying(false);
//       video.pause();
//     }

//     // Check if the user has scrolled past a certain point
//     if (scrollPosition > window.innerHeight) {
//       setIsPlaying(false);
//       video.pause();

//       // Navigate to the next page
//       navigate("/next-page");
//     }
//   };

//   const handlePause = () => {
//     setIsPlaying(false);
//     const video = document.getElementById("video");
//     video.pause();
//   };
//   const handleVideoEnd = () => {
//     setIsPlaying(false);
//     const video = document.getElementById("video");
//     video.pause();
//     video.currentTime = 0; // Reset video to the beginning
//     video.removeEventListener("ended", handleVideoEnd); // Remove the event listener to prevent duplicate calls
//   };

//   useEffect(() => {
//     const originalText = "SCROLL DOWN • SCROLL DOWN •";
//     const transformed = originalText.split("").map((char, i) => (
//       <span key={i} style={{ transform: `rotate(${i * 11}deg)` }}>
//         {char}
//       </span>
//     ));

//     setTransformedText(transformed);

//     const colorChangeTimeout = setTimeout(() => {
//       setTextColorClass("text-white");
//     }, 5000);

//     const textAnimationTimeout = setTimeout(() => {
//       window.addEventListener("scroll", handleScroll);
//     }, 10000);

//     window.addEventListener("scroll", handleScroll);
//     window.addEventListener("scroll", handleVideoScroll);
//     window.addEventListener("scroll", handlePause);

//     const video = document.getElementById("video");
//     video.addEventListener("ended", handleVideoEnd);

//     return () => {
//       clearTimeout(colorChangeTimeout);
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("scroll", handleVideoScroll);
//       window.removeEventListener("scroll", handlePause);
//       video.removeEventListener("ended", handleVideoEnd);
//     };
//   }, [isPlaying, navigate]);

//   return (
//     <>
//       <div className="sticky h-[960vh] top-0 ">
//         <div className="overflow-hidden">
//           <div
//             className={`flex flex-col justify-center items-center absolute z-20 w-[100%] sm:h-[200px] vvsm:h-[150px] ${textColorClass}`}
//             style={{
//               transform: `translateY(${textPosition}vh)`,
//             }}
//           >
//             <div className="fontForum font-normal lg:h-[110px] md:h-[90px] sm:h-[80px] lg:text-[75px] md:text-[70px] sm:text-[70px] ssm:text-[40px] vsm:text-[36px] vvsm:text-[30px]">
//               Your One-Stop Shop
//             </div>
//             <div className="fontForum font-normal lg:text-[75px] md:text-[70px] sm:text-[70px] ssm:text-[40px] vsm:text-[36px] vvsm:text-[30px]">
//               for Wholesale Fashion
//             </div>
//           </div>

//           <div className="videocontainer h-screen w-[105%] ml-0  ">
//             <video
//               id="video"
//               src={redapple}
//               muted
//               onEnded={handleVideoEnd}
//               ref={(video) => {
//                 if (video) {
//                   video.addEventListener("ended", handleVideoEnd);
//                   video.loop = false; // Disable default looping behavior
//                 }
//               }}
//             ></video>
//           </div>
//         </div>
//       </div>

//       <div
//         className={`circle flex justify-center items-center sticky left-[46%]  w-[150px] h-[150px] ${textColorClass}`}
//       >
//         <div className="logo"></div>
//         <div className="text animate-spin-slow ">
//           {transformedText.map((char, i) => (
//             <span key={i} style={{ transform: `rotate(${i * 2}deg)` }}>
//               {char}
//             </span>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Homepage;
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import redapple from "../../assets/videoredapple.mp4";
// import "./HomePage.css";

// let lastScrollPosition = 0;

// const Homepage = () => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const navigate = useNavigate();
//   const [textColorClass, setTextColorClass] = useState("");
//   const [textPosition, setTextPosition] = useState(0);

//   const handleScroll = () => {
//     const scrollPosition = window.scrollY;
//     let newPosition = (scrollPosition / window.innerHeight) * 100;

//     // Adjust these values as needed
//     const stopPosition = 50; // Stop when the text reaches 50% of the screen
//     const textHeight = 30; // Half of the text container height

//     // Stop when the text reaches the middle of the screen
//     if (
//       newPosition > stopPosition - textHeight &&
//       newPosition < stopPosition + textHeight
//     ) {
//       newPosition = stopPosition;
//     }

//     setTextPosition(newPosition);
//   };

//   const handleVideoScroll = () => {
//     const video = document.getElementById("video");
//     const scrollPosition = window.scrollY;

//     if (scrollPosition > lastScrollPosition) {
//       if (!isPlaying) {
//         setIsPlaying(true);
//         video.play();
//       }
//     } else {
//       if (isPlaying) {
//         setIsPlaying(false);
//         video.pause();
//       }
//     }

//     lastScrollPosition = scrollPosition;

//     if (video.currentTime === video.duration) {
//       setIsPlaying(false);
//       video.pause();
//     }

//     if (scrollPosition > window.innerHeight) {
//       setIsPlaying(false);
//       video.pause();
//       navigate("/next-page");
//     }
//   };

//   const handlePause = () => {
//     setIsPlaying(false);
//     const video = document.getElementById("video");
//     video.pause();
//   };

//   const handleVideoEnd = () => {
//     setIsPlaying(false);
//     const video = document.getElementById("video");
//     video.pause();
//     video.currentTime = 0;
//     video.removeEventListener("ended", handleVideoEnd);
//     navigate("/next-page");
//   };

//   useEffect(() => {
//     const colorChangeTimeout = setTimeout(() => {
//       setTextColorClass("text-white");
//     }, 5000);

//     const textAnimationTimeout = setTimeout(() => {
//       window.addEventListener("scroll", handleScroll);
//     }, 10000);

//     window.addEventListener("scroll", handleScroll);
//     window.addEventListener("scroll", handleVideoScroll);
//     window.addEventListener("scroll", handlePause);

//     const video = document.getElementById("video");
//     video.addEventListener("ended", handleVideoEnd);

//     return () => {
//       clearTimeout(colorChangeTimeout);
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("scroll", handleVideoScroll);
//       window.removeEventListener("scroll", handlePause);
//       video.removeEventListener("ended", handleVideoEnd);
//     };
//   }, [navigate]);

//   return (
//     <>
//       <div className="sticky-container overflow-hidden ">
//         <div className={`header ${textColorClass}`}>
//           <div
//             className="flex flex-col justify-center items-center text-container"
//             style={{
//               transform: `translateY(${textPosition}vh)`,
//             }}
//           >
//             <div className="fontForum font-normal">
//               Your One-Stop Shop for Wholesale Fashion
//             </div>
//           </div>
//         </div>

//         <div className="video-container w-[105%] h-[150vh]">
//           <video
//             id="video"
//             src={redapple}
//             muted
//             onEnded={handleVideoEnd}
//             ref={(video) => {
//               if (video) {
//                 video.addEventListener("ended", handleVideoEnd);
//                 video.loop = false;
//               }
//             }}
//           ></video>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Homepage;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import redapple from "../../assets/videoredapple.mp4";
// import "./HomePage.css";

// let lastScrollPosition = 0;

// const Homepage = () => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const navigate = useNavigate();
//   const [transformedText, setTransformedText] = useState([]);
//   const [textColorClass, setTextColorClass] = useState("");
//   const [textPosition, setTextPosition] = useState(0);
//   const [videoHeight, setVideoHeight] = useState(0);

//   const handleScroll = () => {
//     const scrollPosition = window.scrollY;
//     let newPosition = (scrollPosition / window.innerHeight) * 100;
//     newPosition = Math.min(newPosition, 30);
//     setTextPosition(newPosition);
//   };

//   const handleVideoScroll = () => {
//     const video = document.getElementById("video");
//     const scrollPosition = window.scrollY;

//     if (scrollPosition > lastScrollPosition) {
//       if (!isPlaying) {
//         setIsPlaying(true);
//         video.play();
//       }
//     } else {
//       if (isPlaying) {
//         setIsPlaying(false);
//         video.pause();
//       }
//     }

//     lastScrollPosition = scrollPosition;

//     if (video.currentTime === video.duration) {
//       setIsPlaying(false);
//       video.pause();
//     }

//     if (scrollPosition > window.innerHeight) {
//       setIsPlaying(false);
//       video.pause();
//       navigate("/next-page");
//     }
//   };

//   const handlePause = () => {
//     setIsPlaying(false);
//     const video = document.getElementById("video");
//     video.pause();
//   };

//   const handleVideoEnd = () => {
//     setIsPlaying(false);
//     const video = document.getElementById("video");
//     video.pause();
//     video.currentTime = 0;
//     video.removeEventListener("ended", handleVideoEnd);
//   };

//   const handleVideoLoaded = () => {
//     const video = document.getElementById("video");
//     setVideoHeight(video.offsetHeight);
//   };

//   useEffect(() => {
//     const originalText = "SCROLL DOWN • SCROLL DOWN •";
//     const transformed = originalText.split("").map((char, i) => (
//       <span key={i} style={{ transform: `rotate(${i * 11}deg)` }}>
//         {char}
//       </span>
//     ));

//     setTransformedText(transformed);

//     const colorChangeTimeout = setTimeout(() => {
//       setTextColorClass("text-white");
//     }, 5000);

//     const textAnimationTimeout = setTimeout(() => {
//       window.addEventListener("scroll", handleScroll);
//     }, 10000);

//     window.addEventListener("scroll", handleScroll);
//     window.addEventListener("scroll", handleVideoScroll);
//     window.addEventListener("scroll", handlePause);

//     const video = document.getElementById("video");
//     video.addEventListener("ended", handleVideoEnd);
//     video.addEventListener("loadedmetadata", handleVideoLoaded);

//     return () => {
//       clearTimeout(colorChangeTimeout);
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("scroll", handleVideoScroll);
//       window.removeEventListener("scroll", handlePause);
//       video.removeEventListener("ended", handleVideoEnd);
//       video.removeEventListener("loadedmetadata", handleVideoLoaded);
//     };
//   }, [isPlaying, navigate]);

//   return (
//     <>
//       <div className="sticky-container ">
//         <div className="overflow-hidden">
//           <div
//             className={`flex flex-col justify-center items-center absolute z-20 w-[100%] sm:h-[200px] vvsm:h-[150px] ${textColorClass}`}
//             style={{
//               transform: `translateY(${textPosition}vh)`,
//             }}
//           >
//             <div className="fontForum font-normal lg:h-[110px] md:h-[90px] sm:h-[80px] lg:text-[75px] md:text-[70px] sm:text-[70px] ssm:text-[40px] vsm:text-[36px] vvsm:text-[30px]">
//               Your One-Stop Shop
//             </div>
//             <div className="fontForum font-normal lg:text-[75px] md:text-[70px] sm:text-[70px] ssm:text-[40px] vsm:text-[36px] vvsm:text-[30px]">
//               for Wholesale Fashion
//             </div>
//           </div>

//           <div className="videocontainer h-screen w-full ml-0 relative">
//             <div style={{ height: videoHeight }} />
//             <video
//               id="video"
//               src={redapple}
//               muted
//               onEnded={handleVideoEnd}
//               ref={(video) => {
//                 if (video) {
//                   video.addEventListener("ended", handleVideoEnd);
//                   video.loop = false;
//                 }
//               }}
//               className="absolute top-0 left-0 w-full h-full object-cover"
//             ></video>
//           </div>
//         </div>
//       </div>

//       <div
//         className={`circle flex justify-center items-center sticky top-0 left-[46%] w-[150px] h-[150px] ${textColorClass}`}
//       >
//         <div className="logo"></div>
//         <div className="text animate-spin-slow ">
//           {transformedText.map((char, i) => (
//             <span key={i} style={{ transform: `rotate(${i * 2}deg)` }}>
//               {char}
//             </span>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Homepage;
// import React, { useEffect, useState } from "react";
// import Homepageimg from "../../assets/Homepageimage.png";
// import "./HomePage.css"; // Import your CSS file

// const HomePage = () => {
//   const [zoom, setZoom] = useState(1);

//   useEffect(() => {
//     // Zoom in on initial load
//     setZoom(3);

//     const handleScroll = () => {
//       // Zoom out on scroll
//       setZoom(1);
//       // Optionally, you can remove the scroll event listener after zooming out once
//       window.removeEventListener("scroll", handleScroll);
//     };

//     // Add scroll event listener
//     window.addEventListener("scroll", handleScroll);

//     // Clean up the event listener on component unmount
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="overflow-hidden h-screen +">
//       <img
//         src={Homepageimg}
//         alt=""
//         className="w-full h-full object-cover zoom-out"
//         style={{ transform: `scale(${zoom})` }}
//       />
//     </div>
//   );
// };

// export default HomePage;
import React, { useEffect, useState } from "react";
import Homepageimg from "../../assets/Homepageimage.png";
import "./HomePage.css"; // Import your CSS file

const HomePage = () => {
  const [scale, setScale] = useState(0.1); // Initial scale
  const [isEnlarged, setIsEnlarged] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldEnlarge = scrollY > 100; // Adjust the scroll threshold as needed

      if (shouldEnlarge !== isEnlarged) {
        setIsEnlarged(shouldEnlarge);
        setScale(shouldEnlarge ? 1 : 0.1);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isEnlarged]);

  return (
    <div className="overflow-hidden h-screen flex justify-center items-center">
      <img
        src={Homepageimg}
        alt=""
        className="object-cover"
        style={{
          width: "30%",
          height: "30%",
          transform: `scale(${scale})`,
          transition: "transform 0.5s ease-in-out",
        }}
      />
    </div>
  );
};
export default HomePage;
