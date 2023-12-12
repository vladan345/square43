"use client";
import { useEffect, useRef } from "react";
import styles from "./styles/Web.module.css";
import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Web() {
  const main = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".colors", {
        scrollTrigger: {
          trigger: ".colors",
        },
        opacity: 1,
        duration: 0.7,
      });
      gsap.to(".fonts", {
        scrollTrigger: {
          trigger: ".fonts",
        },
        opacity: 1,
        duration: 0.7,
      });
    }, main.current);

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.Web} ref={main}>
      <div className="wrapper">
        <h2 className={styles.heading}>
          Web Design
          <br /> & Development
        </h2>
        <div className={styles.row}>
          <div className={styles.colors}>
            <div>
              <h3 className="readMore">WEBSITE COLORS</h3>
              <Image
                src="/images/distributed-services/colors.svg"
                alt="Color palette"
                width={560}
                height={60}
                className="colors"
              />
              <Image
                src="/images/distributed-services/colors-m.svg"
                alt="Color palette"
                width={260}
                height={140}
                className="colors"
              />
            </div>
            <p>
              The color scheme remained in line with the previous palette, so we
              decided to refresh their brand identity with completely new
              typography. Its modern, futuristic style leaves a promise of
              state-of-the-art services.
            </p>
          </div>
          <div className={styles.fonts}>
            <h3 className="readMore">Typography</h3>
            <Image
              src="/images/distributed-services/typography.svg"
              alt="Typography styles"
              width={577}
              height={275}
              className="fonts"
            />
            <Image
              src="/images/distributed-services/typography-m.svg"
              alt="Typography styles"
              width={900}
              height={413}
              className="fonts"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Web;
