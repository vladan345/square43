import { ParallaxProvider } from "react-scroll-parallax";

import Brand from "../imunoshop/Brand";
import Laptop from "../imunoshop/Laptop";
import DesignDev from "../imunoshop/DesignDev";
import Social from "../imunoshop/Social";
import Posts from "../imunoshop/Posts";
import Motions from "../imunoshop/Motions";
import Banner from "../imunoshop/Banner";

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
