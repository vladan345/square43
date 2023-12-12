"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./styles/Skate.module.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Skate() {
  const main = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".splash", {
        scrollTrigger: {
          trigger: ".splash",
          start: "top bottom",
          toggleActions: "restart none none none",
          scrub: true,
        },
        scale: 0.5,
        duration: 2,
        ease: "power1",
      });
      gsap.from(".skateF", {
        scrollTrigger: {
          trigger: ".skateF",
          toggleActions: "restart none none none",
          start: "-240px bottom",
        },
        scale: 0.4,
        duration: 1.5,
        ease: "power1",
      });
      gsap.from(".skateM", {
        scrollTrigger: {
          trigger: ".skateM",
          start: "-220px bottom",
          toggleActions: "restart none none none",
        },
        scale: 0.3,
        duration: 1,
        ease: "power1",
      });
    }, main.current);
    return () => ctx.revert(); // <- cleanup!
  }, []);
  return (
    <div className={styles.Skate}>
      <div className="wrapper">
        <div className={styles.row}>
          <div className={styles.col}>
            <p className={styles.description}>
              In the sea of various companies offering exquisite IT services, we
              needed to make Northprim shine like no other.
            </p>
            <p className={styles.statement}>
              All that glitters isn&apos;t gold - so we went with neon!
            </p>
            <div className={styles.skaters} ref={main}>
              <div className={`${styles.splash} splash`}>
                <Image
                  src="/images/northprim/splash.svg"
                  alt="Spray splash Northprim"
                  fill
                  sizes="100vw"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className={`${styles.skateF} skateF`}>
                <Image
                  src="/images/northprim/skateboarder-f-1.webp"
                  alt="Skateboarder femaile Northprim"
                  fill
                  sizes="100vw"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className={`${styles.skateM} skateM`}>
                <Image
                  src="/images/northprim/skateboarder-m-1.webp"
                  alt="Skateboarder male Northprim"
                  fill
                  sizes="100vw"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
          <div className={styles.col}>
            <Image
              src="/images/northprim/future.webp"
              alt="Spray splash Northprim"
              width={600}
              height={600}
              className={styles.david}
            />
            <p className={styles.description}>
              In terms of imagery, we focused on the art that modern coding is
              and that&apos;s how the ancient and modern theme fully came to
              life! We gave praise and glory to the art of coding, because the
              modern digital world is simply unimaginable without it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skate;
