"use client";
import { useEffect, useRef } from "react";
import styles from "./styles/Graphics.module.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Graphics() {
  const main = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".angleLogo", {
        duration: 1.5,
        rotate: -15,
        translateX: "-10%",
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: ".graphics",
          start: "center bottom",
        },
      });
      gsap.to(".angle", {
        delay: 0.5,
        opacity: 1,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: ".graphics",
          start: "center bottom",
        },
      });
    }, main.current);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.Graphics} ref={main}>
      <div className="wrapper graphics">
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.colWrap}>
              <Image
                src="/images/gogaudi/regular-g.svg"
                alt="gogaudi logo"
                width={324}
                height={191}
              />
              <div className={styles.angleWrap}>
                <Image
                  src="/images/gogaudi/angle-g.svg"
                  alt="gogaudi logo"
                  width={324}
                  height={191}
                  className="angleLogo"
                />
                <Image
                  src="/images/gogaudi/angle.svg"
                  alt="gogaudi logo"
                  width={327}
                  height={102}
                  className="angle"
                />
              </div>
            </div>
            <div className={styles.colWrap}>
              <Image
                src="/images/gogaudi/regular-b.svg"
                alt="gogaudi logo"
                width={324}
                height={191}
              />
              <div className={styles.angleWrap}>
                <Image
                  src="/images/gogaudi/angle-b.svg"
                  alt="gogaudi logo"
                  width={324}
                  height={191}
                  className="angleLogo"
                />
                <Image
                  src="/images/gogaudi/angle.svg"
                  alt="gogaudi logo"
                  width={327}
                  height={102}
                  className="angle"
                />
              </div>
            </div>
          </div>
          <div className={styles.col}>
            <h2>Images and graphics</h2>
            <p>
              Clear imagery, high-quality visuals and a monochrome background in
              brand colors - we've found the optimal combination that suits the
              essence of GoGaudi! The brand's website is clad in cheerful colors
              and positive visuals that inspire the user to associate the brand
              with a fun time and excellent deals.
            </p>
            <p>
              We made sure to add flexibility to the logo as well by introducing
              its gradient alternative with a slight tilt - time to Go!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
