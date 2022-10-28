import React from "react";

import { ParallaxProvider } from "react-scroll-parallax";

import Brand from "../../pages-sections/imunoshop/Brand";
import Laptop from "../../pages-sections/imunoshop/Laptop";
import DesignDev from "../../pages-sections/imunoshop/DesignDev";
import Social from "../../pages-sections/imunoshop/Social";
import Posts from "../../pages-sections/imunoshop/Posts";
import Motions from "../../pages-sections/imunoshop/Motions";
import Banner from "../../pages-sections/imunoshop/Banner";

function Imunoshop() {
  return (
    <div>
      <ParallaxProvider>
        <Brand />
        <Laptop />
        <DesignDev />
        <Social />
        <Posts />
        <Motions />
        <Banner />
      </ParallaxProvider>
    </div>
  );
}

export default Imunoshop;
