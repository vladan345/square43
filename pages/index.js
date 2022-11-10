import React, { useState, useEffect } from "react";
import Head from "next/head";

import Hero from "../pages-sections/home/Hero";
import Philosophy from "../pages-sections/home/Philosophy";
import OurServices from "../pages-sections/home/OurServices";
import More from "../pages-sections/home/More";
import Project from "../pages-sections/home/Project";
import Contact from "../pages-sections/home/Contact";
import Square from "../components/Square";

import { InView } from "react-intersection-observer";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  const [state, setState] = useState(1);

  return (
    <div>
      <Head>
        <title>Square43 Studio</title>
        <meta name="description" content="Digital creative studio" />
      </Head>
      <ParallaxProvider>
        <main>
          <InView
            as="div"
            onChange={(inView, entry) => (inView ? setState(1) : null)}
            threshold={[0.3, 0.7]}
          >
            <Hero />
          </InView>

          <InView
            as="div"
            onChange={(inView, entry) => (inView ? setState(2) : null)}
            threshold={[0.3, 0.7]}
          >
            <Philosophy />
          </InView>
          <InView
            as="div"
            onChange={(inView, entry) => (inView ? setState(3) : null)}
            threshold={[0.3, 0.7]}
          >
            <OurServices />
          </InView>
          <InView
            as="div"
            onChange={(inView, entry) => (inView ? setState(4) : null)}
            threshold={[0.3, 0.7]}
          >
            <More />
          </InView>
          <InView
            as="div"
            onChange={(inView, entry) => (inView ? setState(5) : null)}
            threshold={[0.3, 0.7]}
          >
            <Project />
          </InView>
          <InView
            as="div"
            onChange={(inView, entry) => (inView ? setState(6) : null)}
            threshold={[0.3, 0.7]}
          >
            <Contact />
          </InView>
        </main>
      </ParallaxProvider>
      <Square image="/square-temp.webp" height={560} state={state} />
    </div>
  );
}
