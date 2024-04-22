"use client";
import React, { useRef } from "react";
import styles from "./styles/Studio.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Studio() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.to("#honesty", {
        letterSpacing: "2.8rem",
        opacity: 1,
        duration: 0.7,
        scrollTrigger: {
          trigger: ".honestyWrapper",
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none none",
        },
      });
      gsap.to("#perfection", {
        letterSpacing: "3px",
        opacity: 1,
        scrollTrigger: {
          trigger: "#perfection",
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none none",
        },
      });
      gsap.to("#dedication", {
        letterSpacing: "6px",
        opacity: 1,
        scrollTrigger: {
          trigger: "#dedication",
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none none",
        },
      });
      gsap.to("#teamwork", {
        letterSpacing: "9px",
        opacity: 1,
        scrollTrigger: {
          trigger: "#teamwork",
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none none",
        },
      });
    },

    { scope: container.current }
  );

  return (
    <div ref={container}>
      <div className={styles.studioExplanation}>
        <div className={` ${styles.credo} credo`}>
          <h1 className={` ${styles.ourCredo} ourCredo`}>OUR CREDO</h1>
          <div className="honestyWrapper">
            <h1 className={` ${styles.honesty} honesty`} id="honesty">
              HONESTY
            </h1>
          </div>
          <h1 className={` ${styles.perfection} perfection`} id="perfection">
            PERFECTION
          </h1>
          <h1 className={` ${styles.dedication} dedication`} id="dedication">
            DEDICATION
          </h1>
          <h1 className={` ${styles.teamwork} teamwork`} id="teamwork">
            TEAMWORK
          </h1>
        </div>
      </div>
    </div>
  );
}
