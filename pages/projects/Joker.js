import React from "react";

import Packaging from "../../pages-sections/joker/Packaging";

import { ParallaxProvider } from "react-scroll-parallax";
function Joker() {
  return (
    <div className="Joker">
      <ParallaxProvider>
        <Packaging />
      </ParallaxProvider>
    </div>
  );
}

export default Joker;
