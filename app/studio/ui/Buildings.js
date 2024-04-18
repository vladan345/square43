"use client";
import React, { useRef } from "react";
import styles from "./styles/Buildings.module.css";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Buildings() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".conclusion", {
        opacity: 0,
        scrollTrigger: {
          trigger: ".conclusion",
          start: "top 60%",
          end: "bottom center",
          stagger: 1,
          scrub: true,
        },
      });
    },
    { scope: container.current }
  );

  return (
    <div ref={container}>
      <div className={` ${styles.conclusion} `}>
        <h2 className="conclusion">It suddenly made sense.</h2>
        <p className="conclusion">
          Squares or blocks of identical appearence are symbols of New Belgrade
        </p>
        <div className={styles.buildingWrapper}>
          <Image
            src={"/images/Zgrada.png"}
            alt="zgrada"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100vw", height: "auto" }}
          />
        </div>
        <div className={styles.buildingGradient}></div>
        <div className={styles.underBuildings}>
          <p>
            On top of that, a square is a meeting point of multiple cross-roads,
            where you can meet and greet or miss and lose!
          </p>
        </div>
      </div>

      <div className={styles.videoSection}>
        <div className={styles.vid}>
          <div className={styles.top}></div>
          <div className={styles.middle}>
            <Image
              src="/images/Frame.svg"
              width={330}
              height={330}
              alt="square43 logo"
            />
          </div>
          <div className={styles.bottom}></div>
          <video
            src={"/images/S43_Skies.mp4"}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100vw", height: "100vh" }}
            type="video/mp4"
            autoPlay
            loop
            playsInline
            muted
          ></video>
        </div>
      </div>
    </div>
  );
}
