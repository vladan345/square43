"use client";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LoadingProvider } from "@/utils/hooks/LoadingContext";
import { Cursor } from "@/components/cursor";
import Spinner from "@/components/Spinner";
import Lenis from "@studio-freight/lenis";
import localFont from "next/font/local";
import "@/styles/globals.css";

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

const ivy = localFont({
  src: "../public/fonts/IvyPrestoHeadline-Thin.otf",
  variable: "--font-ivy",
});

export default function RootLayout({ children }) {
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
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-5S6TZ4F');`,
          }}
        />
        <link rel="icon" href="/logo2.svg" sizes="any" />
      </head>
      <body>
        <div className={`${matter.className} ${ivy.variable}`}>
          <LoadingProvider>
            <Cursor />
            <Spinner />
            <Header />
            {children}
            <Footer />
          </LoadingProvider>
        </div>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5S6TZ4F"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      </body>
    </html>
  );
}
