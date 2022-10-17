import React from "react";
// import "./Northprim.css";
import { ParallaxProvider } from "react-scroll-parallax";

import VideoSection from "../../pages-sections/northprim/VideoSection";
import Brand from "../../pages-sections/northprim/Brand";
import Sprint from "../../pages-sections/northprim/Sprint";
import Taglines from "../../pages-sections/northprim/Taglines";
import Skate from "../../pages-sections/northprim/Skate";
import CoreThemes from "../../pages-sections/northprim/CoreThemes";
import Parallax from "../../pages-sections/northprim/Parallax";
import WebDesign from "../../pages-sections/northprim/WebDesign";
// import ScrollSequence from "../../pages-sections/northprim/ScrollSequence";
import WebDevelopment from "../../pages-sections/northprim/WebDevelopment";
import SocialMedia from "../../pages-sections/northprim/SocialMedia";
import Print from "../../pages-sections/northprim/Print";
import Slider from "../../pages-sections/northprim/Slider";
import Coffee from "../../pages-sections/northprim/Coffee";

function Northprim() {
  return (
    <div className="Northprim">
      <ParallaxProvider>
        <VideoSection />
        <Brand />
        <Sprint />
        <Taglines />
        <Skate />
        <CoreThemes />
        <Parallax />
        <WebDesign />
        {/* <ScrollSequence /> */}
        <WebDevelopment />
        <SocialMedia />
        <Print />
        <Slider />
        <Coffee />
      </ParallaxProvider>
    </div>
  );
}

export default Northprim;
