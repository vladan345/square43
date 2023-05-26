import React from "react";

import { ParallaxProvider } from "react-scroll-parallax";

import Laptop from "../glasstic/Laptop";
import Glass from "../glasstic/Glass";
import Ecom from "../glasstic/Ecom";
import SocialMedia from "../glasstic/SocialMedia";

function Glasstic() {
  return (
    <div>
      <ParallaxProvider>
        <Laptop />
        <Glass />
        <Ecom />
        <SocialMedia />
      </ParallaxProvider>
    </div>
  );
}

export default Glasstic;
