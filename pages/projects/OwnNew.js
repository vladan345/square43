import React from "react";
import DesktopVideo from "../../pages-sections/ownnew/DesktopVideo";
import Components from "../../pages-sections/ownnew/Components";
import Mobile from "../../pages-sections/ownnew/Mobile";
import Parallax from "../../pages-sections/ownnew/Parallax";
import WebDevelopment from "../../pages-sections/ownnew/WebDevelopment";

import { ParallaxProvider } from "react-scroll-parallax";
function OwnNew() {
  return (
    <div className="OwnNew">
      <ParallaxProvider>
        <DesktopVideo />
        <Components />
        <Mobile />
        <Parallax />
        <WebDevelopment />
      </ParallaxProvider>
    </div>
  );
}

export default OwnNew;
