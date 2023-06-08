import Logo from "@/pages-sections/jove/Logo";
import Name from "@/pages-sections/jove/Name";
import Scheme from "@/pages-sections/jove/Scheme";
import Negative from "@/pages-sections/jove/Negative";
import Packaging from "@/pages-sections/jove/Packaging";
import Web from "@/pages-sections/jove/Web";

import { ParallaxProvider } from "react-scroll-parallax";

function Jove() {
  return (
    <div>
      <ParallaxProvider>
        <Name />
        <Logo />
        <Negative />
        <Web />
        <Packaging />
        <Scheme />
      </ParallaxProvider>
    </div>
  );
}

export default Jove;
