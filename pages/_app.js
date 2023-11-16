import { useEffect } from "react";
import localFont from "next/font/local";
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { LoadingProvider } from "../utils/hooks/LoadingContext";
import { Cursor } from "../components/cursor";
import Spinner from "../components/Spinner";
import Lenis from "@studio-freight/lenis";

const matter = localFont({
  src: [
    {
      path: "../public/fonts/Matter-Bold.otf",
      weight: "700",
      style: "normal",
      fallback: ["system-ui", "arial"],
    },
    {
      path: "../public/fonts/Matter-Regular.otf",
      weight: "400",
      style: "normal",
      fallback: ["system-ui", "arial"],
    },
    {
      path: "../public/fonts/Matter-Light.otf",
      weight: "300",
      style: "normal",
      fallback: ["system-ui", "arial"],
    },
  ],
});

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
    <div className={matter.className}>
      <LoadingProvider>
        <Cursor />
        <Spinner />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </LoadingProvider>
    </div>
  );
}

export default MyApp;
