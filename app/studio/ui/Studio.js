"use client";
import React, { useRef } from "react";
import styles from "./styles/Studio.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(SplitType);

export default function Studio() {
  const container = useRef();

  // const myText = new SplitType("#honesty");

  useGSAP(
    () => {
      gsap.from(".ourCredo", {
        opacity: 0,
        scrollTrigger: {
          trigger: ".ourCredo",
          start: "top 60%",
          end: "bottom 70%",
          stagger: 1,
          scrub: true,
        },
      });
      gsap.from(".honesty", {
        opacity: 0,
        yPercent: 50,
        duration: 1,
        scrollTrigger: {
          trigger: ".honesty",
          start: "top 60%",
          end: "bottom 70%",
          stagger: 1,
          scrub: true,
        },
      });
      gsap.from(".perfection", {
        opacity: 0,
        yPercent: 50,
        duration: 1,
        scrollTrigger: {
          trigger: ".perfection",
          start: "top 60%",
          end: "bottom 70%",
          stagger: 1,
          scrub: true,
        },
      });
      gsap.from(".dedication", {
        opacity: 0,
        yPercent: 50,
        duration: 1,
        scrollTrigger: {
          trigger: ".dedication",
          start: "top 60%",
          end: "bottom 70%",
          stagger: 1,
          scrub: true,
        },
      });
      gsap.from(".teamwork", {
        opacity: 0,
        yPercent: 50,
        duration: 1,
        scrollTrigger: {
          trigger: ".teamwork",
          start: "top 60%",
          end: "bottom 70%",
          stagger: 1,
          scrub: true,
          markers: true,
        },
      });
    },
    { scope: container.current }
  );

  return (
    <div ref={container}>
      <div className={styles.studioExplanation}>
        <div className={` ${styles.credo} credo`}>
          <h1 className={` ${styles.ourCredo} ourCredo`}>
            <span>O</span>
            <span>U</span>
            <span>R</span>
            <span className={styles.noshow}>_</span>
            <span>C</span>
            <span>R</span>
            <span>E</span>
            <span>D</span>
            <span>O</span>
          </h1>
          <h1 className={` ${styles.honesty} honesty`}>
            <span>H</span>
            <span>O</span>
            <span>N</span>
            <span>E</span>
            <span>S</span>
            <span>T</span>
            <span>Y</span>
          </h1>
          <h1 className={` ${styles.perfection} perfection`}>
            <span>P</span>
            <span>E</span>
            <span>R</span>
            <span>F</span>
            <span>E</span>
            <span>C</span>
            <span>T</span>
            <span>I</span>
            <span>O</span>
            <span>N</span>
          </h1>
          <h1 className={` ${styles.dedication} dedication`}>
            <span>D</span>
            <span>E</span>
            <span>D</span>
            <span>I</span>
            <span>C</span>
            <span>A</span>
            <span>T</span>
            <span>I</span>
            <span>O</span>
            <span>N</span>
          </h1>
          <h1 className={` ${styles.teamwork} teamwork`}>
            <span>T</span>
            <span>E</span>
            <span>A</span>
            <span>M</span>
            <span>W</span>
            <span>O</span>
            <span>R</span>
            <span>K</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
