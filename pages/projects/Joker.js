import React from "react";

import Packaging from "../../pages-sections/joker/Packaging";
import Video from "../../pages-sections/joker/Video";
import Logo from "../../pages-sections/joker/Logo";
import Colors from "../../pages-sections/joker/Colors";
import Scheme from "../../pages-sections/joker/Scheme";
import Pattern from "../../pages-sections/joker/Pattern";
import Roll from "../../pages-sections/joker/Roll";

import { ParallaxProvider } from "react-scroll-parallax";
function Joker() {
  return (
    <div className="Joker">
      <ParallaxProvider>
        <Packaging />
        <Video />
        <Logo />
        <Colors />
        <Scheme />
        <Pattern />
        <Roll />
      </ParallaxProvider>
    </div>
  );
}

export default Joker;
