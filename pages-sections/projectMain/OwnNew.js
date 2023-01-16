import React from "react";
import DesktopVideo from "../ownnew/DesktopVideo";
import Components from "../ownnew/Components";
import Mobile from "../ownnew/Mobile";
import Parallax from "../ownnew/Parallax";
import WebDevelopment from "../ownnew/WebDevelopment";

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
