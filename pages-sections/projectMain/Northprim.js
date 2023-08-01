// import "./Northprim.css";
import Head from "next/head";

import { ParallaxProvider } from "react-scroll-parallax";

import VideoSection from "../northprim/VideoSection";
import Brand from "../northprim/Brand";
import Sprint from "../northprim/Sprint";
import Taglines from "../northprim/Taglines";
import Skate from "../northprim/Skate";
import CoreThemes from "../northprim/CoreThemes";
import Parallax from "../northprim/Parallax";
import WebDesign from "../northprim/WebDesign";
import ScrollSequence from "../northprim/ScrollSequence";
import WebDevelopment from "../northprim/WebDevelopment";
import SocialMedia from "../northprim/SocialMedia";
import Print from "../northprim/Print";
import Slider from "../northprim/Slider";
import Coffee from "../northprim/Coffee";

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
        <ScrollSequence />
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
