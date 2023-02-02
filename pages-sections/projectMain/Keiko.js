import React from "react";

import { ParallaxProvider } from "react-scroll-parallax";

import Social from "../keiko/Social";
import Motions from "../keiko/Motions";
import Taglines from "../keiko/Taglines";
import Banner from "../keiko/Banner";
function Keiko() {
  return (
    <div>
      <ParallaxProvider>
        <Taglines />
        <Social />
        <Motions />
        <Banner />
      </ParallaxProvider>
    </div>
  );
}

export default Keiko;
