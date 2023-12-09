import React from "react";
import HomePage from "../Components/homepage/HomePage1";
import Circle from "../Components/Circle/Circle";
import PageTwo from "../Components/pagetwo/PageTwo";
import PageThree from "../Components/pagethree/PageThree";
import PageFour from "../Components/pagefour/PageFour";
import PageFive from "../Components/pagefive/PageFive";
import PageSix from "../Components/pagesix/PageSix";
import PageSeven from "../Components/pageseven/PageSeven";
import PageEight from "../Components/pageeight/PageEight";
import PageNine from "../Components/pagenine/PageNine";
import PageTen from "../Components/pageten/PageTen";
import PageEleven from "../Components/pageevelen/PageEleven";
import MaskedImage from "../Components/homepage/SvgFile";
import YourSvgComponent from "../Components/homepage/SvgFile";
import OrientationMessage from "../Components/OrientateionMessage/OrientationMessage";

const RedApplePage = () => {
  return (
    <>
      <OrientationMessage />
      {/* <HomePage /> */}
      {/* <Circle /> */}
      {/* <YourSvgComponent /> */}
      <PageTwo />
      <PageThree />
      <PageFour />
      <PageFive />
      <PageSix />
      <PageSeven />
      <PageEight />
      <PageNine />
      <PageEleven />
      <PageTen />
    </>
  );
};

export default RedApplePage;
