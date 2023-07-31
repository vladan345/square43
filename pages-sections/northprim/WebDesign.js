import { useEffect, useRef } from "react";
import { Parallax } from "react-scroll-parallax";
// import { useInView } from "react-intersection-observer";
import Image from "next/image";

import styles from "../../styles/section-css/northprim/WebDesign.module.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function WebDesign() {
  // const main = useRef(null);

  // useEffect(() => {
  //   let ctx = gsap.context(() => {
  //     gsap.to("#wrapper", {
  //       scrollTrigger: {
  //         target: "#wrapper",
  //         toggleActions: "restart none none none",
  //         markers: true,
  //       },
  //       x: 150,
  //       y: 150,
  //       duration: 3,
  //       ease: "power1",
  //     });
  //   }, main.current);
  //   return () => ctx.revert(); // <- cleanup!
  // }, []);

  return (
    <div className={styles.WebDesign}>
      <div className={styles.desktop} id="wrapper">
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

export default WebDesign;
