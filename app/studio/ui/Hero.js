"use client";
import React, { useRef } from "react";
import styles from "./styles/Hero.module.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.to(".tagline", {
        // opacity: 0,
        scale: 0.9,
        scrollTrigger: {
          trigger: "#heroText",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".tagline", {
        autoAlpha: 0,
        scrollTrigger: {
          trigger: "#heroImg",
          start: "top top",
          end: "top top",
          toggleActions: "play none reverse none",
        },
      });

      const gridTiles = gsap.utils.toArray(".heroGrid div");
      gsap.to(gridTiles, {
        boxShadow: "inset 0 0 0 5px rgb(255, 255, 255)",
        scrollTrigger: {
          trigger: ".heroImageContainer",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
      gsap.to(".heroImage", {
        scale: 1,
        scrollTrigger: {
          trigger: ".heroImageContainer",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
    },
    { scope: container.current }
  );

  return (
    <div ref={container}>
      <div className={styles.heroDescription} id="heroText">
        <h2 className={`${styles.tagline} tagline`}>
          We are not an award-winning agency...{" "}
          <span className={styles.gradientText}>Yet!</span>
        </h2>
      </div>

      <div
        className={`${styles.heroImageContainer} heroImageContainer`}
        id="heroImg"
      >
        <div className={styles.heroGridContainer}>
          <Image
            className={`${styles.heroImage} heroImage`}
            alt="hero image"
            src={"/images/hero.png"}
            width={1920}
            height={1132}
          ></Image>

          <div className={`${styles.heroGrid} heroGrid`}>
            <div className={styles.heroGridItem}></div>
            <div className={styles.heroGridItem}></div>
            <div className={styles.heroGridItem}></div>
            <div className={styles.heroGridItem}></div>
            <div className={styles.heroGridItem}></div>
            <div className={styles.heroGridItem}></div>
            <div className={styles.heroGridItem}></div>
            <div className={styles.heroGridItem}></div>
            <div className={styles.heroGridItem}></div>
            <div className={styles.heroGridItem}></div>
            <div className={styles.heroGridItem}></div>
            <div className={styles.heroGridItem}></div>
            <div className={styles.heroGridItem}></div>
            <div className={styles.heroGridItem}></div>
            <div className={styles.heroGridItem}></div>
            <div className={styles.heroGridItem}></div>
            <div className={styles.heroGridItem}></div>
            <div className={styles.heroGridItem}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
