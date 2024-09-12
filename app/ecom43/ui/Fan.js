import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./styles/Fan.module.css";
import { fanAnimations } from "@/utils/animations/fans";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Fan() {
  const main = useRef(null);

  useGSAP(
    () => {
      if (window.innerWidth < 900) {
        gsap.to(".fanwrap", {
          y: "-=230%",
          scrollTrigger: {
            trigger: ".trigger",
            scrub: true,

            start: "25% bottom",
            end: "40% top",
          },
        });
      } else {
        gsap.to(".fanwrap", {
          y: "-=170%",
          scrollTrigger: {
            trigger: ".trigger",
            scrub: true,

            start: "25% bottom",
            end: "40% top",
          },
        });
      }

      gsap.to(".heading1", {
        y: "-100%",
        opacity: 0,
        scrollTrigger: {
          trigger: ".trigger",
          scrub: true,
          start: "25% bottom",
          end: "25% top",
        },
      });
      gsap.to(".heading2", {
        y: "-100%",
        opacity: 1,
        scrollTrigger: {
          trigger: ".trigger",
          scrub: true,
          start: "35% bottom",
          end: "35% top",
        },
      });
      gsap.to(".cpu", {
        width: 300,
        height: 300,
        scrollTrigger: {
          trigger: ".trigger",
          scrub: true,
          start: "20% bottom",
          end: "80% top",
        },
      });
      gsap.to([".left", ".right"], {
        width: "33.3333%",
        scrollTrigger: {
          trigger: ".trigger",
          scrub: true,
          start: "40% bottom",
          end: "60% top",
        },
      });
      gsap.to([".left", ".right"], {
        height: "100%",
        scrollTrigger: {
          trigger: ".trigger",
          scrub: true,
          start: "70% bottom",
          end: "80% top",
        },
      });
      gsap.to(".center", {
        height: "100%",
        scrollTrigger: {
          trigger: ".trigger",
          scrub: true,
          start: "40% bottom",
          end: "80% top",
        },
      });
    },
    { scope: main },
  );

  return (
    <section className={styles.Fan} ref={main}>
      <div className={styles.gradient}></div>
      <div className={`trigger ${styles.trigger}`}>
        <div className={`${styles.sticky} sticky`}>
          <h2 className={`${styles.heading1} heading1`}>
            Unlimited e-com solutions
          </h2>
          <h2 className={`${styles.heading2} heading2`}>Powered by</h2>
          <div className={`${styles.fanWrap} fanwrap`}>
            <Image
              src="/images/fanbase.webp"
              alt="Fan base"
              width={564}
              height={428}
            />
            <Image
              className={styles.fan}
              src="/images/fan.webp"
              alt="Fan"
              width={378}
              height={378}
            />
            <Image
              className={styles.mesh}
              src="/images/mesh.webp"
              alt="Mesh"
              width={412}
              height={412}
            />
          </div>
          <Image
            className={`${styles.cpu} cpu`}
            src="/images/cpu1.webp"
            alt="CPU"
            width={200}
            height={200}
          />
          <div className={styles.linesWrap}>
            <div className="wrapper">
              <div className={styles.lines}>
                <div className={`left ${styles.left} ${styles.line}`}>
                  <div className={styles.lineFill}></div>
                </div>
                <div className={`center ${styles.center} ${styles.line}`}>
                  <div className={styles.lineFill}></div>
                </div>
                <div className={`right ${styles.right} ${styles.line}`}>
                  <div className={styles.lineFill}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Fan;
