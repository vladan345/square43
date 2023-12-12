"use client";
import { useRef, useEffect } from "react";
import styles from "./styles/Logo.module.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Logo() {
  let main = useRef(null);
  let videoElem = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".video", {
        scrollTrigger: {
          trigger: ".wrapper",
          onEnter: () => videoElem.current.play(),
          onEnterBack: () => videoElem.current.play(),
          onLeave: () => videoElem.current.pause(),
          onLeaveBack: () => videoElem.current.pause(),
        },
      });
    }, main.current);
    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.Logo} ref={main}>
      <div className="wrapper">
        <div className={styles.rowWrap}>
          <div className={styles.textBox}>
            <h2>Logo</h2>
            <p>
              Creating a logo is perhaps one of the most challenging aspects of
              brand creation due to its associative nature. Essentially, the
              brand needed to be able to be reduced just to the logo and still
              remain recognizable. That is why Jove consists of elements of the
              oak tree in the form of its leaves, together with a discreet bolt
              symbol in the middle, remaining true to the brand&apos;s lore.
            </p>
          </div>
          <video className={`${styles.video} video`} muted ref={videoElem}>
            <source src="/images/jove/jove-logo4.mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

export default Logo;
