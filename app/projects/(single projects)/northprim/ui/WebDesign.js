"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./styles/WebDesign.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function WebDesign() {
  const main = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".mobileImage1", {
        x: "30px",
      });
      gsap.set(".mobileImage2", {
        x: "140px",
      });
      gsap.to(".mobileImage1", {
        x: "-100px",
        scrollTrigger: {
          trigger: ".webDesignTrigger",
          scrub: true,
        },
      });
      gsap.to(".mobileImage2", {
        x: "180px",
        scrollTrigger: {
          trigger: ".webDesignTrigger",
          scrub: true,
        },
      });
    }, main.current);

    return () => ctx.revert();
  }, []);
  return (
    <div className={styles.WebDesign}>
      <div className={styles.desktop} id="wrapper">
        <div className={`${styles.wrapper} wrapper webDesignTrigger`}>
          <div className={styles.col}>
            <h2>Web Design</h2>
            <p className={styles.description}>
              We recognized that coding itself is an art, and so the ancient and
              modern theme fully came to life! We gave praise and glory to the
              art of coding, because the modern digital world is unimaginable
              without it.
            </p>
          </div>
        </div>
        <div className={styles.desktopWrap}>
          <div
            className={`${styles.desktopImage} ${styles.desktopMockupImage} desktopImage`}
          >
            <Image
              src="/images/northprim/web-design-desktop.png"
              alt="Desktop mockup slides"
              width={1500}
              height={1000}
            />
          </div>
        </div>
      </div>
      <div className={styles.mobile}>
        <div className={`${styles.wrapper} wrapper`}>
          <div className={`${styles.col} ${styles.colImage}`}>
            <div className={`${styles.mobileImage} mobileImage1`}>
              <Image
                src="/images/northprim/web-design-mobile2.webp"
                alt="Northprim mobile mockup 2"
                width={414}
                height={678}
              />
            </div>
            <div className={`${styles.mobileImage} mobileImage2`}>
              <Image
                src="/images/northprim/web-design-mobile1.webp"
                alt="Northprim mobile mockup 1"
                width={414}
                height={678}
              />
            </div>
          </div>
          <div className={styles.col}>
            <p className={styles.description}>
              Athentic and funky, we wanted the company culture to shine as a
              bright hallmark of what sets them apart from all the rest!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebDesign;
