"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import styles from "./styles/BlackWhite.module.css";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function BlackWhite() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.to(".blackWhite", {
        background: "white",
        color: "#202020",
        scrollTrigger: {
          trigger: ".blackWhite",
          start: "top 70%",
          end: "top 40%",
          stagger: 1,
          scrub: true,
          duration: 1,
          markers: true,
        },
      });
      gsap.to(".h2", {
        color: "#202020",
        scrollTrigger: {
          trigger: ".blackWhite",
          start: "top 70%",
          end: "top 40%",
          stagger: 1,
          scrub: true,
          duration: 1,
        },
      });
      gsap.to(".businessParagraph", {
        color: "#202020",
        scrollTrigger: {
          trigger: ".blackWhite",
          start: "top 70%",
          end: "top 40%",
          stagger: 1,
          scrub: true,
          duration: 1,
        },
      });
    },
    { scope: container.current }
  );
  return (
    <div className={` ${styles.blackWhite} blackWhite`} ref={container}>
      <div className={styles.buildingsConclusion}>
        <h2 className="h2">
          In that light, Square43 Studio became a meeting point...
        </h2>
        <p className="businessParagraph">
          ...where business meets creativity, as well as a meeting point for all
          creatives of the world.
        </p>
      </div>
      <div className={` ${styles.philosophy}`}>
        <div className={styles.philosophyQuestion}>
          <h3>Why studio?</h3>
          <p>A philosophical distinction.</p>
        </div>
        <div className={styles.philosophyExplanation}>
          <p>
            We feel that the term “Agency” carries bad legacy emotions. Every
            agency out there has its purpose, but that is not our approach to a
            creative industry. Agencies are here to please you by delivering
            what you expect.
          </p>
          <p>
            In a studio, the aim is not to please, but rather amaze with a
            creative approach that ventures beyond what is already given.
          </p>
        </div>
      </div>
    </div>
  );
}
