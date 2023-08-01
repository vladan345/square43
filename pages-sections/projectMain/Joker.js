import Packaging from "../joker/Packaging";
import Video from "../joker/Video";
import Logo from "../joker/Logo";
import Colors from "../joker/Colors";
import Scheme from "../joker/Scheme";
import Pattern from "../joker/Pattern";
import Roll from "../joker/Roll";

import { ParallaxProvider } from "react-scroll-parallax";
function Joker() {
  return (
    <div className="Joker">
      <ParallaxProvider>
        <Packaging />
        <Video />
        <Logo />
        <Colors />
        <Scheme />
        <Pattern />
        <Roll />
      </ParallaxProvider>
    </div>
  );
}

export default Joker;
