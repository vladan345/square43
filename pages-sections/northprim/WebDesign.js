import React, { useEffect, useRef } from "react";
import { Parallax } from "react-scroll-parallax";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
import Image from "next/image";

import styles from "../../styles/section-css/northprim/WebDesign.module.css";

function WenDesign() {
  const desktopMockup = useRef(null);
  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) {
      const el = desktopMockup.current;
      gsap.fromTo(
        el,
        {
          x: 150,
          y: 150,
          duration: 1,
          ease: "power1",
        },
        {
          x: 0,
          y: 0,
          duration: 1,
          ease: "power1",
        }
      );
    }
  }, [inView]);
  return (
    <div className="WebDesign">
      <div className={styles.desktop}>
        <div className={`${styles.wrapper} wrapper`}>
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
        <div className={styles.desktopWrap} ref={ref}>
          {/*THIS IS MOVING WHILE SCROLLING*/}
          {/* <Parallax
              translateX={["0px", "-300px"]}
              translateY={["0px", "-300px"]}
              className="desktop-image"
            >
              <img src={desktopSlide} alt="Desktop mockup slides" />
            </Parallax> */}
          <div
            className={`${styles.desktopImage} ${styles.desktopMockupImage}`}
            ref={desktopMockup}
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
            <Parallax
              translateX={["30px", "-100px"]}
              className={styles.mobileImage}
            >
              <Image
                src="/images/northprim/web-design-mobile2.webp"
                alt="Northprim mobile mockup 2"
                width={414}
                height={678}
              />
            </Parallax>
            <Parallax
              translateX={["140px", "180px"]}
              className={styles.mobileImage}
            >
              <Image
                src="/images/northprim/web-design-mobile1.webp"
                alt="Northprim mobile mockup 1"
                width={414}
                height={678}
              />
            </Parallax>
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

export default WenDesign;
