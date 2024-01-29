"use client";
import { useEffect, useRef } from "react";
import styles from "./styles/Colors.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Colors() {
  const main = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".primary", {
        scrollTrigger: {
          trigger: ".colors",
          start: `${window.innerWidth < 900 ? "start" : "center"} bottom`,
        },
        width: "100%",
        paddingLeft: "5%",
        duration: 1.5,
        ease: "power4.inOut",
      });

      gsap.to(".main", {
        left: 0,
        transform: "translateX(0)",
        duration: 1.5,
        delay: 0.5,
        stagger: 0.2,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: ".colors",
          start: `${window.innerWidth < 900 ? "start" : "center"} bottom`,
        },
      });
      gsap.to(".opacity", {
        right: 0,
        delay: 0.5,
        transform: "translateX(0)",
        duration: 1.5,
        stagger: 0.2,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: ".colors",
          start: `${window.innerWidth < 900 ? "start" : "center"} bottom`,
        },
      });
    }, main.current);
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.Colors} ref={main}>
      <div className="wrapper colors">
        <div className={styles.row}>
          <div className={styles.col}>
            <h2>Colors</h2>
            <p>
              Ultrices sit diam a pharetra maecenas lacus in. Nulla consec tetur
              volutpat at elit nisl lectus pulvinar cursus. Pretium porta enim
              eget ultricies eu orci duis. Porttitor lacus euismod justo quam
              non phasellus. Sollicitudin eget suspendisse morbi feugiat
              porttitor amet luctus nec tempor. Malesuada elit aliquet felis
              volutpat. Maecenas in viverra dolor tristique non a magnis.
            </p>
          </div>
          <div className={styles.col}>
            <span className={`${styles.primary} primary`}>#5B24B2</span>
            <div className={styles.rowColors}>
              <div className={styles.colorWrap}>
                <span
                  className={`${styles.circle} ${styles.main} main`}
                  style={{ background: "#A3C3FF" }}
                >
                  #A3C3FF
                </span>
                <span
                  className={`${styles.circle} ${styles.opacity} opacity`}
                  style={{ background: "#C8DBFF" }}
                >
                  60%
                </span>
              </div>
              <div className={styles.colorWrap}>
                <span
                  className={`${styles.circle} ${styles.main} main`}
                  style={{ background: "#F689C3" }}
                >
                  #F689C3
                </span>
                <span
                  className={`${styles.circle} ${styles.opacity} opacity`}
                  style={{ background: "#FAB8DB" }}
                >
                  60%
                </span>
              </div>
            </div>
            <div className={styles.rowColors}>
              <div className={styles.colorWrap}>
                <span
                  className={`${styles.circle} ${styles.main} main`}
                  style={{ background: "#FFD84D" }}
                >
                  #FFD84D
                </span>
                <span
                  className={`${styles.circle} ${styles.opacity} opacity`}
                  style={{ background: "#FFE894" }}
                >
                  60%
                </span>
              </div>
              <div className={styles.colorWrap}>
                <span
                  className={`${styles.circle} ${styles.main} main`}
                  style={{ background: "#514B5C", color: "white" }}
                >
                  #514B5C
                </span>
                <span
                  className={`${styles.circle} ${styles.opacity} opacity`}
                  style={{ background: "#97939D", color: "white" }}
                >
                  60%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
