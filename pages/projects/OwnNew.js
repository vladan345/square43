import React from "react";
import Outro from "../../components/Outro";
import Mobile from "../../pages-sections/ownnew/Mobile";
import Parallax from "../../pages-sections/ownnew/Parallax";
import WebDevelopment from "../../pages-sections/ownnew/WebDevelopment";

import { ParallaxProvider } from "react-scroll-parallax";
function OwnNew() {
  return (
    <div className="OwnNew">
      <ParallaxProvider>
        <Mobile />
        <Parallax />
        <WebDevelopment />
        <Outro />
      </ParallaxProvider>
    </div>
  );
}

export default OwnNew;
