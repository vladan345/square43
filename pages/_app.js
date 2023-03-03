import { useEffect } from "react";

import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { LoadingProvider } from "../utils/hooks/LoadingContext";
import HasprCursor from "haspr-cursor";
import "haspr-cursor/dist/cursor.css";
import Spinner from "../components/Spinner";
import Lenis from "@studio-freight/lenis";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: "vertical", // vertical, horizontal
      gestureDirection: "vertical", // vertical, horizontal, both
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // //get scroll value
    // lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
    //   console.log({ scroll, limit, velocity, direction, progress })
    // })

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <HasprCursor>
        <LoadingProvider>
          <Spinner />
          <Header />
          <Component {...pageProps} />
          <Footer />
        </LoadingProvider>
      </HasprCursor>
    </>
  );
}

export default MyApp;
