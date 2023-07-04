import React from "react";

import { ParallaxProvider } from "react-scroll-parallax";

import Web from "../distributed-services/Web";
import DesktopVideo from "../distributed-services/DesktopVideo";
import Phones from "../distributed-services/Phones";
import Highlights from "../distributed-services/Highlights";
import Dual from "../distributed-services/Dual";
import London from "../distributed-services/London";

function Distributed() {
  return (
    <div>
      <ParallaxProvider>
        <Web />
        <DesktopVideo />
        <Phones />
        <Highlights />
        <Dual />
        <London />
      </ParallaxProvider>
    </div>
  );
}

export default Distributed;
