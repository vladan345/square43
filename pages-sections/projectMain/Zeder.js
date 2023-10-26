import { ParallaxProvider } from "react-scroll-parallax";
import Logo from "../zeder/Logo";
import Web from "../zeder/Web";
import Videos from "../zeder/Videos";
import Banner from "../zeder/Banner";

function Zeder() {
  return (
    <div>
      <ParallaxProvider>
        <Logo />
        <Web />
        <Videos />
        <Banner />
      </ParallaxProvider>
    </div>
  );
}

export default Zeder;
