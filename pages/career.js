import { useRef, useEffect } from "react";
import styles from "../styles/Career.module.css";
import Head from "next/head";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Career() {
  const main = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".square", {
        x: 1000,
        duration: 8,
        scrollTrigger: {
          trigger: ".square",
          start: "top 80%",
          end: "top 30%",
          scrub: 4,
          toggleActions: "restart none none none",
          // play pause resume reverse restart reset complete none
          //onEnter, onLeave, onEnterBack, onLeaveBack
          markers: {
            startColor: "purple",
            endColor: "fuchsia",
            fontSize: "4rem",
          },
        },
      });
    }, main.current);
    return () => ctx.revert(); // <- cleanup!
  }, []);

  return (
    <>
      <Head>
        <title>Square43 Studio | Career</title>
        <meta
          name="description"
          content="Building is believing - and we'll build a bright future in front of you."
        />

        <meta name="title" content="Square43 Studio - Career" />

        <meta property="og:url" content="https://square43.com/inside" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://square43.com/images/About.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="square43.com" />
        <meta property="twitter:url" content="https://square43.com/inside" />
        <meta name="twitter:title" content="Square43 Studio - Career" />
        <meta
          name="twitter:description"
          content="Building is believing - and we'll build a bright future in front of you."
        />
        <meta
          name="twitter:image"
          content="https://square43.com/images/About.png"
        />
      </Head>
      <main>
        <div className={styles.Career} ref={main}>
          <div className={`${styles.slide1} slide1`}></div>
          <div className={`${styles.slide2} slide2`}>
            <div className={`${styles.square} square`}></div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Career;
